const jwt = require('jsonwebtoken');
const { ROLES } = require('../models/User');

// Verify JWT token middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Include all user information in the request
    req.user = {
      userId: decoded.userId,
      role: decoded.role,
      email: decoded.email,
      fullName: decoded.fullName,
      status: decoded.status,
      organizationIds: decoded.organizationIds || [],
      schoolIds: decoded.schoolIds || []
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

// Role-based access control middleware
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access forbidden. Insufficient permissions.' });
    }

    next();
  };
};

// Role-specific middleware functions
const isTeacher = authorize(ROLES.TEACHER);
const isStudent = authorize(ROLES.STUDENT);
const isCurriculumDesigner = authorize(ROLES.CURRICULUM_DESIGNER);
const isSuperAdmin = authorize(ROLES.SUPER_ADMIN);
const isOrganizationAdmin = authorize(ROLES.ORGANIZATION_ADMIN);
const isSchoolAdmin = authorize(ROLES.SCHOOL_ADMIN);

// Combined middleware for multiple roles
const hasAnyRole = (...roles) => authorize(...roles);

module.exports = {
  verifyToken,
  authorize,
  isTeacher,
  isStudent,
  isCurriculumDesigner,
  isSuperAdmin,
  isOrganizationAdmin,
  isSchoolAdmin,
  hasAnyRole
};