const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const { User, ROLES } = require('../models/User');
const { Organization } = require('../models/Organization');
const { InvitationCode } = require('../models/InvitationCode');

describe('Organization API', () => {
  let testOrganization;
  let testOrgAdmin;
  let testCurriculumDesigner;
  let authToken;
  let invitationCode;

  const testOrgData = {
    organizationName: 'Test Organization',
    organizationType: 'Educational',
    organizationWebsite: 'https://test-org.com',
    primarySubjectAreas: ['Math', 'Science']
  };

  beforeAll(async () => {
    // Clear relevant collections
    await User.deleteMany({});
    await Organization.deleteMany({});
    await InvitationCode.deleteMany({});

    // Create test organization
    testOrganization = await Organization.create(testOrgData);

    // Create test organization admin
    testOrgAdmin = await User.create({
      email: 'orgadmin@test.com',
      password: 'password123',
      fullName: 'Test Org Admin',
      role: ROLES.ORGANIZATION_ADMIN,
      organizationId: testOrganization._id
    });

    // Get auth token
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'orgadmin@test.com',
        password: 'password123'
      });

    authToken = loginResponse.body.token;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Organization Management', () => {
    test('Should update organization details', async () => {
      const updateData = {
        organizationName: 'Updated Org Name',
        organizationType: 'Commercial'
      };

      const response = await request(app)
        .put('/api/organization')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.organizationName).toBe(updateData.organizationName);
      expect(response.body.organizationType).toBe(updateData.organizationType);
    });

    test('Should not update organization with invalid data', async () => {
      const invalidData = {
        organizationName: 'A', // Too short
        organizationType: 'Invalid'
      };

      const response = await request(app)
        .put('/api/organization')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('User Management', () => {
    test('Should get organization users', async () => {
      const response = await request(app)
        .get('/api/organization/users')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.users).toBeDefined();
      expect(response.body.users.length).toBeGreaterThan(0);
    });

    test('Should filter users by role', async () => {
      const response = await request(app)
        .get('/api/organization/users?role=organization-admin')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.users).toBeDefined();
      expect(response.body.users.every(user => user.role === ROLES.ORGANIZATION_ADMIN)).toBe(true);
    });
  });

  describe('Invitation Management', () => {
    test('Should generate invitation code', async () => {
      const inviteData = {
        role: ROLES.CURRICULUM_DESIGNER,
        expirationDays: 7
      };

      const response = await request(app)
        .post('/api/organization/invite')
        .set('Authorization', `Bearer ${authToken}`)
        .send(inviteData);

      expect(response.status).toBe(200);
      expect(response.body.code).toBeDefined();
      expect(response.body.role).toBe(ROLES.CURRICULUM_DESIGNER);
      invitationCode = response.body;
    });

    test('Should list active invitation codes', async () => {
      const response = await request(app)
        .get('/api/organization/invite')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    test('Should revoke invitation code', async () => {
      const response = await request(app)
        .delete(`/api/organization/invite/${invitationCode._id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Invitation code revoked successfully');

      // Verify code is revoked
      const revokedCode = await InvitationCode.findById(invitationCode._id);
      expect(revokedCode.active).toBe(false);
    });
  });

  describe('Access Control', () => {
    test('Should deny access without auth token', async () => {
      const response = await request(app)
        .get('/api/organization/users');

      expect(response.status).toBe(401);
    });

    test('Should deny access with non-organization-admin role', async () => {
      // Create a curriculum designer user
      const designer = await User.create({
        email: 'designer@test.com',
        password: 'password123',
        fullName: 'Test Designer',
        role: ROLES.CURRICULUM_DESIGNER,
        organizationId: testOrganization._id
      });

      // Get designer's auth token
      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'designer@test.com',
          password: 'password123'
        });

      const designerToken = loginResponse.body.token;

      const response = await request(app)
        .get('/api/organization/users')
        .set('Authorization', `Bearer ${designerToken}`);

      expect(response.status).toBe(403);
    });
  });
});