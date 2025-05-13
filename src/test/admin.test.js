const request = require('supertest');
const app = require('../index');
const { User, ROLES } = require('../models/User');
const { School } = require('../models/School');
const { Organization } = require('../models/Organization');
const mongoose = require('mongoose');

require('./setup');

describe('Admin API', () => {
  let adminToken;
  let testUserId;
  let testSchoolId;
  let testOrganizationId;

  const adminUser = {
    email: 'admin@test.com',
    password: 'Admin@123',
    role: ROLES.SUPER_ADMIN,
    fullName: 'Admin User',
    schoolId: new mongoose.Types.ObjectId()
  };

  const testSchool = {
    schoolName: 'Test School',
    schoolDistrict: 'Test District',
    schoolType: 'Public'
  };

  const testOrganization = {
    organizationName: 'Test Organization',
    organizationType: 'Educational',
    organizationWebsite: 'http://test.org',
    primarySubjectAreas: ['Math', 'Science']
  };

  beforeAll(async () => {
    // Create admin user and get token
    const admin = await User.create(adminUser);
    adminToken = admin.generateAuthToken();

    // Create test entities
    const school = await School.create(testSchool);
    testSchoolId = school._id;

    const organization = await Organization.create(testOrganization);
    testOrganizationId = organization._id;

    // Create multiple test users with different roles
    const testUsers = [
      {
        email: 'teacher@test.com',
        password: 'Test@123',
        role: ROLES.TEACHER,
        fullName: 'Test Teacher',
        schoolId: testSchoolId
      },
      {
        email: 'student@test.com',
        password: 'Test@123',
        role: ROLES.STUDENT,
        fullName: 'Test Student',
        schoolId: testSchoolId
      },
      {
        email: 'org@test.com',
        password: 'Test@123',
        role: ROLES.ORGANISATION,
        fullName: 'Test Organization User',
        organizationId: testOrganizationId
      }
    ];

    await User.insertMany(testUsers);
    const testUser = await User.findOne({ email: 'teacher@test.com' });
    testUserId = testUser._id;

    // Create additional test schools
    await School.create([
      {
        schoolName: 'Another Test School',
        schoolDistrict: 'Another District',
        schoolType: 'Private'
      },
      {
        schoolName: 'Third Test School',
        schoolDistrict: 'Third District',
        schoolType: 'Public'
      }
    ]);

    // Create additional test organizations
    await Organization.create([
      {
        organizationName: 'Another Test Organization',
        organizationType: 'Non-Profit',
        organizationWebsite: 'http://another-test.org',
        primarySubjectAreas: ['English', 'History']
      },
      {
        organizationName: 'Third Test Organization',
        organizationType: 'Educational',
        organizationWebsite: 'http://third-test.org',
        primarySubjectAreas: ['Art', 'Music']
      }
    ]);
  });

  afterAll(async () => {
    await User.deleteMany({});
    await School.deleteMany({});
    await Organization.deleteMany({});
  });

  describe('User Management', () => {
    describe('GET /api/admin/users', () => {
      it('should return paginated users', async () => {
        const response = await request(app)
          .get('/api/admin/users?page=1&limit=10')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('users');
        expect(response.body).toHaveProperty('totalPages');
        expect(response.body).toHaveProperty('currentPage');
        expect(response.body).toHaveProperty('totalUsers');
        expect(Array.isArray(response.body.users)).toBeTruthy();
      });

      it('should filter users by role', async () => {
        const response = await request(app)
          .get(`/api/admin/users?role=${ROLES.TEACHER}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.users.every(user => user.role === ROLES.TEACHER)).toBeTruthy();
      });

      it('should search users by email or fullName', async () => {
        const searchTerm = 'test';
        const response = await request(app)
          .get(`/api/admin/users?search=${searchTerm}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.users.some(user => 
          user.email.includes(searchTerm) || 
          user.fullName.toLowerCase().includes(searchTerm)
        )).toBeTruthy();
      });
    });

    describe('GET /api/admin/users/:id', () => {
      it('should return a specific user', async () => {
        const response = await request(app)
          .get(`/api/admin/users/${testUserId}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('email', 'user@test.com');
      });
    });

    describe('POST /api/admin/users', () => {
      it('should create a new user', async () => {
        const newUser = {
          email: 'newuser@test.com',
          password: 'Test@123',
          role: ROLES.STUDENT,
          fullName: 'New User',
          schoolId: testSchoolId
        };

        const response = await request(app)
          .post('/api/admin/users')
          .set('Authorization', `Bearer ${adminToken}`)
          .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.user).toHaveProperty('email', newUser.email);
      });
    });
  });

  describe('School Management', () => {
    describe('GET /api/admin/schools', () => {
      it('should return paginated schools', async () => {
        const response = await request(app)
          .get('/api/admin/schools?page=1&limit=10')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('schools');
        expect(response.body).toHaveProperty('totalPages');
        expect(response.body).toHaveProperty('currentPage');
        expect(response.body).toHaveProperty('totalSchools');
        expect(Array.isArray(response.body.schools)).toBeTruthy();
      });

      it('should filter schools by type', async () => {
        const response = await request(app)
          .get('/api/admin/schools?schoolType=Public')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.schools.every(school => school.schoolType === 'Public')).toBeTruthy();
      });

      it('should search schools by name or district', async () => {
        const searchTerm = 'test';
        const response = await request(app)
          .get(`/api/admin/schools?search=${searchTerm}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.schools.some(school => 
          school.schoolName.toLowerCase().includes(searchTerm) || 
          school.schoolDistrict.toLowerCase().includes(searchTerm)
        )).toBeTruthy();
      });
    });

    describe('POST /api/admin/schools', () => {
      it('should create a new school', async () => {
        const newSchool = {
          schoolName: 'New Test School',
          schoolDistrict: 'New District',
          schoolType: 'Private'
        };

        const response = await request(app)
          .post('/api/admin/schools')
          .set('Authorization', `Bearer ${adminToken}`)
          .send(newSchool);

        expect(response.status).toBe(201);
        expect(response.body.school).toHaveProperty('schoolName', newSchool.schoolName);
      });
    });
  });

  describe('Organization Management', () => {
    describe('GET /api/admin/organizations', () => {
      it('should return paginated organizations', async () => {
        const response = await request(app)
          .get('/api/admin/organizations?page=1&limit=10')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('organizations');
        expect(response.body).toHaveProperty('totalPages');
        expect(response.body).toHaveProperty('currentPage');
        expect(response.body).toHaveProperty('totalOrganizations');
        expect(Array.isArray(response.body.organizations)).toBeTruthy();
      });

      it('should filter organizations by type', async () => {
        const response = await request(app)
          .get('/api/admin/organizations?organizationType=Educational')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.organizations.every(org => 
          org.organizationType === 'Educational'
        )).toBeTruthy();
      });

      it('should search organizations by name or website', async () => {
        const searchTerm = 'test';
        const response = await request(app)
          .get(`/api/admin/organizations?search=${searchTerm}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.organizations.some(org => 
          org.organizationName.toLowerCase().includes(searchTerm) || 
          (org.organizationWebsite && org.organizationWebsite.toLowerCase().includes(searchTerm))
        )).toBeTruthy();
      });
    });

    describe('POST /api/admin/organizations', () => {
      it('should create a new organization', async () => {
        const newOrg = {
          organizationName: 'New Test Org',
          organizationType: 'Non-Profit',
          organizationWebsite: 'http://newtest.org',
          primarySubjectAreas: ['History', 'Art']
        };

        const response = await request(app)
          .post('/api/admin/organizations')
          .set('Authorization', `Bearer ${adminToken}`)
          .send(newOrg);

        expect(response.status).toBe(201);
        expect(response.body.organization).toHaveProperty('organizationName', newOrg.organizationName);
      });
    });
  });
});