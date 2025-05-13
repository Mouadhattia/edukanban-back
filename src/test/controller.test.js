const { register, login, getCurrentUser } = require('../controllers/authController');
const { User } = require('../models/User');
const { validationResult } = require('express-validator');

jest.mock('express-validator');

describe('Auth Controller', () => {
  let mockReq;
  let mockRes;
  let nextFunction;

  beforeEach(() => {
    mockReq = {
      body: {},
      user: {}
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    nextFunction = jest.fn();
    validationResult.mockReturnValue({
      isEmpty: jest.fn().mockReturnValue(true),
      array: jest.fn().mockReturnValue([])
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    const validUser = {
      email: 'test@example.com',
      password: 'Test@123',
      role: 'teacher',
      fullName: 'Test User',
      schoolId: '507f1f77bcf86cd799439011'
    };

    const validOrgUser = {
      email: 'org@example.com',
      password: 'Test@123',
      role: 'organisation',
      fullName: 'Org User',
      organizationId: '507f1f77bcf86cd799439012'
    };

    it('should return validation errors if request is invalid', async () => {
      validationResult.mockReturnValue({
        isEmpty: jest.fn().mockReturnValue(false),
        array: jest.fn().mockReturnValue([{ msg: 'Invalid input' }])
      });
      mockReq.body = {};

      await register(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ errors: [{ msg: 'Invalid input' }] });
    });

    it('should return 400 if user already exists', async () => {
      mockReq.body = validUser;
      jest.spyOn(User, 'findOne').mockResolvedValue({ ...validUser });

      await register(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ 
        message: 'User already exists with this email.' 
      });
    });

    it('should create a new user with school if input is valid', async () => {
      mockReq.body = validUser;
      const mockSave = jest.fn();
      const mockGenerateToken = jest.fn().mockReturnValue('test_token');

      jest.spyOn(User, 'findOne').mockResolvedValue(null);
      jest.spyOn(User.prototype, 'save').mockImplementation(mockSave);
      jest.spyOn(User.prototype, 'generateAuthToken').mockImplementation(mockGenerateToken);

      await register(mockReq, mockRes);

      expect(mockSave).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
        message: 'User registered successfully',
        token: 'test_token',
        user: expect.objectContaining({
          schoolId: validUser.schoolId
        })
      }));
    });

    it('should create a new user with organization if input is valid', async () => {
      mockReq.body = validOrgUser;
      const mockSave = jest.fn();
      const mockGenerateToken = jest.fn().mockReturnValue('test_token');

      jest.spyOn(User, 'findOne').mockResolvedValue(null);
      jest.spyOn(User.prototype, 'save').mockImplementation(mockSave);
      jest.spyOn(User.prototype, 'generateAuthToken').mockImplementation(mockGenerateToken);

      await register(mockReq, mockRes);

      expect(mockSave).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
        message: 'User registered successfully',
        token: 'test_token',
        user: expect.objectContaining({
          organizationId: validOrgUser.organizationId
        })
      }));
    });
  });

  describe('login', () => {
    const validCredentials = {
      email: 'test@example.com',
      password: 'Test@123'
    };

    it('should return validation errors if request is invalid', async () => {
      validationResult.mockReturnValue({
        isEmpty: jest.fn().mockReturnValue(false),
        array: jest.fn().mockReturnValue([{ msg: 'Invalid input' }])
      });
      mockReq.body = {};

      await login(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ errors: [{ msg: 'Invalid input' }] });
    });

    it('should return 401 if user not found', async () => {
      mockReq.body = validCredentials;
      jest.spyOn(User, 'findOne').mockResolvedValue(null);

      await login(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ 
        message: 'Invalid email or password.' 
      });
    });

    it('should return 401 if user account is inactive', async () => {
      mockReq.body = validCredentials;
      jest.spyOn(User, 'findOne').mockResolvedValue({
        ...validCredentials,
        active: false,
        comparePassword: jest.fn().mockResolvedValue(true)
      });

      await login(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ 
        message: 'Account is deactivated. Please contact administrator.' 
      });
    });

    it('should return 401 if password is invalid', async () => {
      mockReq.body = validCredentials;
      jest.spyOn(User, 'findOne').mockResolvedValue({
        ...validCredentials,
        active: true,
        comparePassword: jest.fn().mockResolvedValue(false)
      });

      await login(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ 
        message: 'Invalid email or password.' 
      });
    });

    it('should login successfully with valid credentials', async () => {
      mockReq.body = validCredentials;
      const mockSave = jest.fn();
      const mockGenerateToken = jest.fn().mockReturnValue('test_token');

      jest.spyOn(User, 'findOne').mockResolvedValue({
        ...validCredentials,
        _id: 'test_id',
        active: true,
        save: mockSave,
        comparePassword: jest.fn().mockResolvedValue(true),
        generateAuthToken: mockGenerateToken
      });

      await login(mockReq, mockRes);

      expect(mockSave).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Login successful',
        token: 'test_token'
      }));
    });
  });

  describe('getCurrentUser', () => {
    it('should return 404 if user not found', async () => {
      mockReq.user = { userId: 'test_id' };
      jest.spyOn(User, 'findById').mockResolvedValue(null);

      await getCurrentUser(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ 
        message: 'User not found.' 
      });
    });

    it('should return user profile if found', async () => {
      const userProfile = {
        _id: 'test_id',
        username: 'testuser',
        email: 'test@example.com'
      };
      mockReq.user = { userId: 'test_id' };
      jest.spyOn(User, 'findById').mockReturnValue({
        select: jest.fn().mockResolvedValue(userProfile)
      });

      await getCurrentUser(mockReq, mockRes);

      expect(mockRes.json).toHaveBeenCalledWith(userProfile);
    });
  });
});