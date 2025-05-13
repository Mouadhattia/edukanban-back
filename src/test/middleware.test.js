const { verifyToken, authorize } = require('../middleware/auth');

// Mock environment variables
process.env.JWT_SECRET = 'test-secret';
const jwt = require('jsonwebtoken');
const { ROLES } = require('../models/User');

describe('Auth Middleware', () => {
  let mockReq;
  let mockRes;
  let nextFunction;

  beforeEach(() => {
    mockReq = {
      header: jest.fn()
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    nextFunction = jest.fn();
  });

  describe('verifyToken', () => {
    it('should return 401 if no token is provided', () => {
      mockReq.header.mockReturnValue(undefined);

      verifyToken(mockReq, mockRes, nextFunction);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Access denied. No token provided.' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should return 401 if token is invalid', () => {
      mockReq.header.mockReturnValue('Bearer invalid_token');

      verifyToken(mockReq, mockRes, nextFunction);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Invalid token.' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should call next() if token is valid', () => {
      const validToken = jwt.sign({ userId: '123', role: ROLES.TEACHER }, 'test-secret');
      mockReq.header.mockReturnValue(`Bearer ${validToken}`);

      verifyToken(mockReq, mockRes, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
      expect(mockReq.user).toBeDefined();
      expect(mockReq.user.userId).toBe('123');
      expect(mockReq.user.role).toBe(ROLES.TEACHER);
    });
  });

  describe('authorize', () => {
    it('should return 401 if user is not authenticated', () => {
      const authMiddleware = authorize(ROLES.TEACHER);
      mockReq.user = undefined;

      authMiddleware(mockReq, mockRes, nextFunction);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'User not authenticated.' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should return 403 if user role is not allowed', () => {
      const authMiddleware = authorize(ROLES.TEACHER);
      mockReq.user = { role: ROLES.STUDENT };

      authMiddleware(mockReq, mockRes, nextFunction);

      expect(mockRes.status).toHaveBeenCalledWith(403);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Access forbidden. Insufficient permissions.' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should call next() if user has correct role', () => {
      const authMiddleware = authorize(ROLES.TEACHER);
      mockReq.user = { role: ROLES.TEACHER };

      authMiddleware(mockReq, mockRes, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
    });

    it('should allow multiple roles', () => {
      const authMiddleware = authorize(ROLES.TEACHER, ROLES.SUPER_ADMIN);
      mockReq.user = { role: ROLES.SUPER_ADMIN };

      authMiddleware(mockReq, mockRes, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
    });
  });
});