const request = require('supertest');
const app = require('../index');
const { User, ROLES } = require('../models/User');
const { School } = require('../models/School');
const { Organization } = require('../models/Organization');
const { InvitationCode } = require('../models/InvitationCode');
const mongoose = require('mongoose');

require('./setup');

describe('Authentication API', () => {
  const testSchool = {
    schoolName: 'Test School',
    schoolDistrict: 'Test District',
    schoolType: 'High School'
  };

  const testOrganization = {
    organizationName: 'Test Organization',
    organizationWebsite: 'https://test.org',
    organizationType: 'Educational',
    primarySubjectAreas: ['Math', 'Science']
  };

  const testSchoolAdmin = {
    email: 'schooladmin@test.com',
    password: 'Test@123',
    fullName: 'School Admin',
    role: ROLES.SCHOOL_ADMIN,
    ...testSchool
  };

  const testOrgAdmin = {
    email: 'orgadmin@test.com',
    password: 'Test@123',
    fullName: 'Org Admin',
    role: ROLES.ORGANIZATION_ADMIN,
    ...testOrganization
  };

  const testTeacher = {
    email: 'teacher@test.com',
    password: 'Test@123',
    fullName: 'Test Teacher',
    role: ROLES.TEACHER
  };

  const testStudent = {
    email: 'student@test.com',
    password: 'Test@123',
    fullName: 'Test Student',
    role: ROLES.STUDENT
  };

  const testCurriculumDesigner = {
    email: 'designer@test.com',
    password: 'Test@123',
    fullName: 'Test Designer',
    role: ROLES.CURRICULUM_DESIGNER
  };

  describe('POST /api/auth/register', () => {
    let schoolId, organizationId, teacherInviteCode, studentInviteCode, designerInviteCode;

    beforeAll(async () => {
      await User.deleteMany({});
      await School.deleteMany({});
      await Organization.deleteMany({});
      await InvitationCode.deleteMany({});
    });

    beforeEach(async () => {
      // Create a school and organization for invitation codes
      const school = await School.create(testSchool);
      const organization = await Organization.create(testOrganization);
      schoolId = school._id;
      organizationId = organization._id;

      // Create invitation codes
      const teacherCode = await InvitationCode.create({
        code: 'TEACHER123',
        schoolId: school._id,
        role: ROLES.TEACHER,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
      });

      const studentCode = await InvitationCode.create({
        code: 'STUDENT123',
        schoolId: school._id,
        role: ROLES.STUDENT,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
      });

      const designerCode = await InvitationCode.create({
        code: 'DESIGNER123',
        organizationId: organization._id,
        role: ROLES.CURRICULUM_DESIGNER,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
      });

      teacherInviteCode = teacherCode.code;
      studentInviteCode = studentCode.code;
      designerInviteCode = designerCode.code;
    });

    // Validation test cases
    it('should not register without required fields', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    it('should not register with invalid email', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          ...testTeacher,
          email: 'invalid-email'
        });

      expect(response.status).toBe(400);
      expect(response.body.errors[0].msg).toContain('valid email');
    });

    it('should not register with short password', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          ...testTeacher,
          password: 'short'
        });

      expect(response.status).toBe(400);
      expect(response.body.errors[0].msg).toContain('at least 8 characters');
    });

    it('should not register school admin without school details', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'schooladmin@test.com',
          password: 'Test@123',
          fullName: 'School Admin',
          role: ROLES.SCHOOL_ADMIN
        });

      expect(response.status).toBe(400);
      expect(response.body.errors[0].msg).toContain('School details are required');
    });

    it('should not register organization admin without organization details', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'orgadmin@test.com',
          password: 'Test@123',
          fullName: 'Org Admin',
          role: ROLES.ORGANIZATION_ADMIN
        });

      expect(response.status).toBe(400);
      expect(response.body.errors[0].msg).toContain('Organization details are required');
    });

    it('should not register teacher without invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testTeacher);

      expect(response.status).toBe(400);
      expect(response.body.errors[0].msg).toContain('Invitation code is required');
    });

    // Success test cases
    it('should register a school admin and create school', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testSchoolAdmin);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('school');
      expect(response.body.user.role).toBe(ROLES.SCHOOL_ADMIN);
      expect(response.body.school.schoolName).toBe(testSchool.schoolName);
    });

    it('should register an organization admin and create organization', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testOrgAdmin);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('organization');
      expect(response.body.user.role).toBe(ROLES.ORGANIZATION_ADMIN);
      expect(response.body.organization.organizationName).toBe(testOrganization.organizationName);
    });

    it('should register a teacher with valid invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({ ...testTeacher, invitationCode: teacherInviteCode });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.role).toBe(ROLES.TEACHER);
      expect(response.body.user.schoolId).toBeDefined();
    });

    it('should register a student with valid invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({ ...testStudent, invitationCode: studentInviteCode });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.role).toBe(ROLES.STUDENT);
      expect(response.body.user.schoolId).toBeDefined();
    });

    it('should register a curriculum designer with valid invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({ ...testCurriculumDesigner, invitationCode: designerInviteCode });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.role).toBe(ROLES.CURRICULUM_DESIGNER);
      expect(response.body.user.organizationId).toBeDefined();
    });

    it('should not register teacher without invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testTeacher);

      expect(response.status).toBe(400);
      expect(response.body.message).toContain('Invalid registration request');
    });

    it('should not register with expired invitation code', async () => {
      // Create expired code
      const expiredCode = await InvitationCode.create({
        code: 'EXPIRED123',
        schoolId,
        role: ROLES.TEACHER,
        expirationDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
      });

      const response = await request(app)
        .post('/api/auth/register')
        .send({ ...testTeacher, invitationCode: expiredCode.code });

      expect(response.status).toBe(400);
      expect(response.body.message).toContain('Invalid or expired invitation code');
    });

    it('should not register with role mismatch in invitation code', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({ ...testTeacher, invitationCode: studentInviteCode });

      expect(response.status).toBe(400);
      expect(response.body.message).toContain('Role mismatch');
    });
  });

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      const school = await School.create(testSchool);
      await User.create({
        ...testTeacher,
        schoolId: school._id
      });
    });

    it('should login successfully with correct credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testTeacher.email,
          password: testTeacher.password
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe(testTeacher.email);
    });

    it('should not login with incorrect password', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testTeacher.email,
          password: 'wrongpassword'
        });

      expect(response.status).toBe(401);
      expect(response.body.message).toContain('Invalid email or password');
    });

    it('should not login with non-existent email', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@test.com',
          password: testTeacher.password
        });

      expect(response.status).toBe(401);
      expect(response.body.message).toContain('Invalid email or password');
    });
  });
});