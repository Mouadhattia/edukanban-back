const express = require('express');
const router = express.Router();
const { verifyToken, authorize } = require('../middleware/auth');
const { ROLES } = require('../models/User');
const { 
  updateOrganization,
  deleteOrganization,
  getOrganizationUsers,
  generateInvitation,
  listInvitationCodes,
  revokeInvitationCode
} = require('../controllers/organizationController');

// Middleware to check if user is an organization admin
const isOrganizationAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.ORGANIZATION_ADMIN) {
    return res.status(403).json({ message: 'Access denied. Organization admin only.' });
  }
  next();
};

// Validation middleware for organization updates
const validateOrganizationUpdate = (req, res, next) => {
  const { organizationName, organizationType, organizationWebsite, primarySubjectAreas } = req.body;
  const errors = [];

  if (organizationName && organizationName.length < 2) {
    errors.push('Organization name must be at least 2 characters long');
  }

  if (organizationType && !['Educational', 'Commercial', 'Non-profit'].includes(organizationType)) {
    errors.push('Invalid organization type. Must be Educational, Commercial, or Non-profit');
  }

  if (organizationWebsite) {
    try {
      new URL(organizationWebsite);
    } catch (error) {
      errors.push('Invalid organization website URL');
    }
  }

  if (primarySubjectAreas && (!Array.isArray(primarySubjectAreas) || primarySubjectAreas.length === 0)) {
    errors.push('Primary subject areas must be a non-empty array');
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }

  next();
};

// Validation middleware for invitation generation
const validateInvitation = (req, res, next) => {
  const { expirationDays } = req.body;

  
  const errors = [];

  // Role validation is not needed as we'll use the authenticated user's role from the token

  if (expirationDays && (isNaN(expirationDays) || expirationDays < 1 || expirationDays > 30)) {
    errors.push('Expiration days must be between 1 and 30');
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }

  next();
};

// Apply authentication middleware to all routes
router.use(verifyToken);
router.use(isOrganizationAdmin);

// Organization management routes
router.put('/', validateOrganizationUpdate, updateOrganization);
router.delete('/', deleteOrganization);

// User management routes
router.get('/users', getOrganizationUsers);

// Invitation management routes
router.post('/invite', validateInvitation, generateInvitation);
router.get('/invite', listInvitationCodes);
router.delete('/invite/:codeId', revokeInvitationCode);

module.exports = router;