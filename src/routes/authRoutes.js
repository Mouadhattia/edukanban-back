const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const emailVerificationController = require('../controllers/emailVerificationController');
const { verifyToken } = require('../middleware/auth');
const { ROLES } = require('../models/User');

const router = express.Router();

// Validation middleware
const registerValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('fullName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Full name must be at least 3 characters long'),
  body('role')
    .notEmpty()
    .withMessage('Role is required')
    .custom((value) => {
      if (!Object.values(ROLES).includes(value)) {
        throw new Error('Invalid role');
      }
      return true;
    }),
  body('invitationCode')
    .custom((value, { req }) => {
      // School admin and organization admin don't need invitation code
      if (req.body.role === ROLES.SCHOOL_ADMIN) {
        if (!req.body.schoolName || !req.body.schoolDistrict || !req.body.schoolType) {
          throw new Error('School details are required for school admin registration');
        }
        return true;
      }
      if (req.body.role === ROLES.ORGANIZATION_ADMIN) {
        if (!req.body.organizationName || !req.body.organizationType) {
          throw new Error('Organization details are required for organization admin registration');
        }
        return true;
      }
      // Other roles require invitation code
      if (!value) {
        throw new Error('Invitation code is required for this role');
      }
      return true;
    }),
  // School admin validation
  body('schoolName')
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage('School name must be at least 3 characters long'),
  body('schoolDistrict')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('School district is required'),
  body('schoolType')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('School type is required'),
  // Organization admin validation
  body('organizationName')
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Organization name must be at least 3 characters long'),
  body('organizationType')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Organization type is required'),
  body('organizationWebsite')
    .optional()
    .trim()
    .isURL()
    .withMessage('Invalid organization website URL'),
  body('primarySubjectAreas')
    .optional()
    .isArray()
    .withMessage('Primary subject areas must be an array')
];

const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const requestResetValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email')
];

const resetPasswordValidation = [
  body('token')
    .notEmpty()
    .withMessage('Reset token is required'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
];


module.exports = router;

// Routes
router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

// Google login route
router.post('/google/login', authController.googleLogin);
router.get('/profile', verifyToken, authController.getCurrentUser);

// Email verification routes
router.get('/verify-email/:token', emailVerificationController.verifyEmail);
router.post('/resend-verification', [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email')
], emailVerificationController.resendVerificationEmail);

// Password reset routes
router.post('/request-password-reset', requestResetValidation, authController.requestPasswordReset);
router.post('/reset-password', resetPasswordValidation, authController.resetPassword);

module.exports = router;