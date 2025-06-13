const express = require('express');
const { body } = require('express-validator');
const adminController = require('../controllers/adminController');
const { verifyToken } = require('../middleware/auth');
const { ROLES } = require('../models/User');

const router = express.Router();

// Middleware to check if user is super admin
const isSuperAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.SUPER_ADMIN) {
    return res.status(403).json({ message: 'Access denied. Super Admin only.' });
  }
  next();
};

// Validation middleware
const userValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('role')
    .isIn(Object.values(ROLES))
    .withMessage('Invalid role specified'),
  body('fullName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Full name must be at least 3 characters long'),
  body('schoolId')
    .optional()
    .isMongoId()
    .withMessage('Invalid school ID format'),
  body('organizationId')
    .optional()
    .isMongoId()
    .withMessage('Invalid organization ID format')
];

const schoolValidation = [
  body('schoolName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('School name must be at least 3 characters long'),
  body('schoolDistrict')
    .trim()
    .notEmpty()
    .withMessage('School district is required'),
  body('schoolType')
    .trim()
    .notEmpty()
    .withMessage('School type is required')
];

const templateValidation = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Template name must be at least 3 characters long'),
  body('status')
    .trim()
    .isIn(['published', 'draft', 'pending_approval','archived','rejected'])
    .withMessage('Invalid status. Must be publish, private, or pending')
];

const standardValidation = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Standard name must be at least 3 characters long'),
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required'),
  body('region')
    .trim()
    .notEmpty()
    .withMessage('Region is required'),
  body('status')
    .trim()
    .isIn(['active', 'pending', 'suspended'])
    .withMessage('Invalid status. Must be active, pending, or suspended')
];

const organizationValidation = [
  body('organizationName')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Organization name must be at least 3 characters long'),
  body('organizationType')
    .trim()
    .notEmpty()
    .withMessage('Organization type is required'),
  body('organizationWebsite')
    .optional()
    .trim()
    .custom((value) => {
      if (!value) return true;
      return /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[\/\w\-]*$/i.test(value);
    })
    .withMessage('Invalid website URL format'),
  body('primarySubjectAreas')
    .optional()
    .isArray()
    .withMessage('Primary subject areas must be an array')
];

// Apply verifyToken and isSuperAdmin middleware to all routes
router.use(verifyToken, isSuperAdmin);

// User Management Routes
router.get('/users', adminController.getUsers);
router.get('/users/:id', adminController.getUser);
router.post('/users', userValidation, adminController.createUser);
router.put('/users/:id', userValidation, adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// School Management Routes
router.get('/schools', adminController.getSchools);
router.get('/schools/:id', adminController.getSchool);
router.post('/schools', schoolValidation, adminController.createSchool);
router.put('/schools/:id', schoolValidation, adminController.updateSchool);
router.delete('/schools/:id', adminController.deleteSchool);

// Organization Management Routes
router.get('/organizations', adminController.getOrganizations);
router.get('/organizations/:id', adminController.getOrganization);
router.post('/organizations', organizationValidation, adminController.createOrganization);
router.put('/organizations/:id', organizationValidation, adminController.updateOrganization);
router.delete('/organizations/:id', adminController.deleteOrganization);

// Template Management Routes
router.get('/templates', adminController.getTemplates);
router.get('/templates/:id', adminController.getTemplate);
router.post('/templates', templateValidation, adminController.createTemplate);
router.put('/templates/:id', templateValidation, adminController.updateTemplate);
router.delete('/templates/:id', adminController.deleteTemplate);

// Standard Management Routes
router.get('/standards', adminController.getStandards);
router.get('/standards/:id', adminController.getStandard);
router.post('/standards', standardValidation, adminController.createStandard);
router.put('/standards/:id', standardValidation, adminController.updateStandard);
router.delete('/standards/:id', adminController.deleteStandard);

// Analytics Routes
router.get('/analytics/user-growth', adminController.getUserGrowth);
router.get('/analytics/user-distribution', adminController.getUserDistribution);

module.exports = router;