const express = require('express');
const router = express.Router();
const { verifyToken, authorize } = require('../middleware/auth');
const { ROLES } = require('../models/User');
const { getSchoolUsers, updateSchool, generateInvitation, listInvitationCodes, revokeInvitationCode } = require('../controllers/schoolController');

// Middleware to check if user is a school admin
const isSchoolAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.SCHOOL_ADMIN) {
    return res.status(403).json({ message: 'Access denied. School admin only.' });
  }
  next();
};

// Validation middleware for school updates
const validateSchoolUpdate = (req, res, next) => {
  const { schoolName, schoolDistrict, schoolType } = req.body;
  const errors = [];

  if (schoolName && schoolName.length < 2) {
    errors.push('School name must be at least 2 characters long');
  }

  if (schoolDistrict && schoolDistrict.length < 2) {
    errors.push('School district must be at least 2 characters long');
  }

  if (schoolType && !['Public', 'Private', 'Charter'].includes(schoolType)) {
    errors.push('Invalid school type. Must be Public, Private, or Charter');
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }

  next();
};

// Validation middleware for invitation generation
const validateInvitation = (req, res, next) => {
  const { role, expirationDays } = req.body;
  const errors = [];

  if (!role || ![ROLES.TEACHER, ROLES.STUDENT].includes(role)) {
    errors.push('Invalid role. Must be teacher or student');
  }

  if (expirationDays && (isNaN(expirationDays) || expirationDays < 1 || expirationDays > 30)) {
    errors.push('Expiration days must be between 1 and 30');
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }

  next();
};

// Routes
router.use(verifyToken);
router.use(isSchoolAdmin);

// Get users within the same school (with pagination and filters)
router.get('/users', getSchoolUsers);

// Update school details
router.put('/school', validateSchoolUpdate, updateSchool);

// Invitation code management
router.post('/invite', validateInvitation, generateInvitation);
router.get('/invite', listInvitationCodes);
router.delete('/invite/:codeId', revokeInvitationCode);

module.exports = router;