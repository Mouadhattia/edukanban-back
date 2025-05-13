const request = require('supertest');
const app = require('../index');
const { User, ROLES } = require('../models/User');
const { School } = require('../models/School');
const InvitationCode = require('../models/InvitationCode');
const mongoose = require('mongoose');

require('./setup');

describe('School Admin API', () => {
  let schoolAdminToken;
  let schoolId;
  let testTeacherId;
  let invitationCodeId;

  const schoolAdmin = {
    email: 'schooladmin@test.com',
    password: 'Admin@123',
    role: ROLES.SCHOOL_ADMIN,
    fullName: 'School Admin'
  };

  const testSchool = {
    schoolName: 'Test School',
    schoolDistrict: 'Test District',
    schoolType: 'Public'
  };

  beforeAll(async () => {
    // Create test school
    const school = await School.create(testSchool);
    schoolId = school._id;

    // Create school admin
    schoolAdmin.schoolId = schoolId;
    const admin = await User.create(schoolAdmin);
    schoolAdminToken = admin.generateAuthToken();

    // Create test users
    const testTeacher = await User.create({
      email: 'teacher@test.com',
      password: 'Test@123',
      role: ROLES.TEACHER,
      fullName: 'Test Teacher',
      schoolId
    });
    testTeacherId = testTeacher._id;

    await User.create([
      {
        email: 'student1@test.com',
        password: 'Test@123',
        role: ROLES.STUDENT,
        fullName: 'Test Student 1',
        schoolId
      },
      {
        email: 'student2@test.com',
        password: 'Test@123',
        role: ROLES.STUDENT,
        fullName: 'Test Student 2',
        schoolId
      }
    ]);
  });

  afterAll(async () => {
    await User.deleteMany({});
    await School.deleteMany({});
    await InvitationCode.deleteMany({});
  });

  describe('User Management', () => {
    describe('GET /api/school/users', () => {
      it('should return paginated school users', async () => {
        const response = await request(app)
          .get('/api/school/users?page=1&limit=10')
          .set('Authorization', `Bearer ${schoolAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('users');
        expect(response.body).toHaveProperty('totalPages');
        expect(response.body).toHaveProperty('currentPage');
        expect(response.body).toHaveProperty('totalUsers');
        expect(Array.isArray(response.body.users)).toBeTruthy();
        expect(response.body.users.length).toBeGreaterThan(0);
      });

      it('should filter users by role', async () => {
        const response = await request(app)
          .get(`/api/school/users?role=${ROLES.TEACHER}`)
          .set('Authorization', `Bearer ${schoolAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.users.every(user => user.role === ROLES.TEACHER)).toBeTruthy();
      });

      it('should search users by name or email', async () => {
        const searchTerm = 'test';
        const response = await request(app)
          .get(`/api/school/users?search=${searchTerm}`)
          .set('Authorization', `Bearer ${schoolAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.users.some(user => 
          user.email.includes(searchTerm) || 
          user.fullName.toLowerCase().includes(searchTerm)
        )).toBeTruthy();
      });
    });
  });

  describe('School Management', () => {
    describe('PUT /api/school/school', () => {
      it('should update school details', async () => {
        const updatedSchool = {
          schoolName: 'Updated Test School',
          schoolDistrict: 'Updated District'
        };

        const response = await request(app)
          .put('/api/school/school')
          .set('Authorization', `Bearer ${schoolAdminToken}`)
          .send(updatedSchool);

        expect(response.status).toBe(200);
        expect(response.body.school).toHaveProperty('schoolName', updatedSchool.schoolName);
        expect(response.body.school).toHaveProperty('schoolDistrict', updatedSchool.schoolDistrict);
      });
    });
  });

  describe('Invitation Code Management', () => {
    describe('POST /api/school/invite', () => {
      it('should generate invitation code for teacher', async () => {
        const response = await request(app)
          .post('/api/school/invite')
          .set('Authorization', `Bearer ${schoolAdminToken}`)
          .send({
            role: ROLES.TEACHER,
            expirationDays: 7
          });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('invitationCode');
        expect(response.body.invitationCode).toHaveProperty('code');
        expect(response.body.invitationCode).toHaveProperty('role', ROLES.TEACHER);
        expect(response.body.invitationCode).toHaveProperty('expirationDate');

        const code = await InvitationCode.findOne({ code: response.body.invitationCode.code });
        invitationCodeId = code._id;
      });

      it('should generate invitation code for student', async () => {
        const response = await request(app)
          .post('/api/school/invite')
          .set('Authorization', `Bearer ${schoolAdminToken}`)
          .send({
            role: ROLES.STUDENT,
            expirationDays: 7
          });

        expect(response.status).toBe(200);
        expect(response.body.invitationCode).toHaveProperty('role', ROLES.STUDENT);
      });
    });

    describe('GET /api/school/invite', () => {
      it('should list active invitation codes', async () => {
        const response = await request(app)
          .get('/api/school/invite')
          .set('Authorization', `Bearer ${schoolAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('invitationCodes');
        expect(Array.isArray(response.body.invitationCodes)).toBeTruthy();
        expect(response.body.invitationCodes.length).toBeGreaterThan(0);
      });
    });

    describe('DELETE /api/school/invite/:codeId', () => {
      it('should revoke invitation code', async () => {
        const response = await request(app)
          .delete(`/api/school/invite/${invitationCodeId}`)
          .set('Authorization', `Bearer ${schoolAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Invitation code revoked successfully');

        const code = await InvitationCode.findById(invitationCodeId);
        expect(code.active).toBeFalsy();
      });
    });
  });
});