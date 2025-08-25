const express = require("express");
const { body } = require("express-validator");
const adminController = require("../controllers/adminController");
const { verifyToken } = require("../middleware/auth");
const { ROLES } = require("../models/User");

const router = express.Router();

// Middleware to check if user is super admin
const isSuperAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.SUPER_ADMIN) {
    return res
      .status(403)
      .json({ message: "Access denied. Super Admin only." });
  }
  next();
};
// Middleware to check if user is sh admin
const isSchoolAdmin = (req, res, next) => {
  if (
    req.user.role !== ROLES.SCHOOL_ADMIN &&
    req.user.role !== ROLES.SUPER_ADMIN
  ) {
    return res
      .status(403)
      .json({ message: "Access denied. School or Super admin only." });
  }
  next();
};
// Validation middleware
const userValidation = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please enter a valid email"),
  body("role").isIn(Object.values(ROLES)).withMessage("Invalid role specified"),
  body("fullName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 3 characters long"),
  body("schoolId")
    .optional()
    .isMongoId()
    .withMessage("Invalid school ID format"),
  body("organizationId")
    .optional()
    .isMongoId()
    .withMessage("Invalid organization ID format"),
];

const schoolValidation = [
  body("schoolName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("School name must be at least 3 characters long"),
  body("schoolDistrict")
    .trim()
    .notEmpty()
    .withMessage("School district is required"),
  body("schoolType").trim().notEmpty().withMessage("School type is required"),
];

const templateValidation = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Template name must be at least 3 characters long"),
  body("status")
    .trim()
    .isIn(["published", "draft", "pending_approval", "archived", "rejected"])
    .withMessage("Invalid status. Must be publish, private, or pending"),
];

const standardValidation = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Standard name must be at least 3 characters long"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("region").trim().notEmpty().withMessage("Region is required"),
  body("status")
    .trim()
    .isIn(["active", "pending", "suspended"])
    .withMessage("Invalid status. Must be active, pending, or suspended"),
];

const organizationValidation = [
  body("organizationName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Organization name must be at least 3 characters long"),
  body("organizationType")
    .trim()
    .notEmpty()
    .withMessage("Organization type is required"),
  body("organizationWebsite")
    .optional()
    .trim()
    .custom((value) => {
      if (!value) return true;
      return /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[\/\w\-]*$/i.test(value);
    })
    .withMessage("Invalid website URL format"),
  body("primarySubjectAreas")
    .optional()
    .isArray()
    .withMessage("Primary subject areas must be an array"),
];

// Apply verifyToken middleware to all routes
router.use(verifyToken);

// Routes accessible by both School Admin and Super Admin
router.get("/schools", isSuperAdmin, adminController.getSchools);
router.get("/schools/:id", isSchoolAdmin, adminController.getSchool);
router.get("/templates", isSchoolAdmin, adminController.getTemplates);
router.get("/templates/:id", isSchoolAdmin, adminController.getTemplate);

// User Management Routes (School Admin can only manage their school's users)
router.get("/users", isSchoolAdmin, adminController.getUsers);
router.get("/users/:id", isSchoolAdmin, adminController.getUser);
router.post(
  "/users",
  isSchoolAdmin,
  userValidation,
  adminController.createUser
);
router.put(
  "/users/:id",
  isSchoolAdmin,

  adminController.updateUser
);
router.delete("/users/:id", isSchoolAdmin, adminController.deleteUser);

// Super Admin only routes
router.post(
  "/schools",
  isSuperAdmin,
  schoolValidation,
  adminController.createSchool
);
router.put(
  "/schools/:id",
  isSuperAdmin,
  schoolValidation,
  adminController.updateSchool
);
router.delete("/schools/:id", isSuperAdmin, adminController.deleteSchool);

router.post(
  "/templates",
  isSuperAdmin,
  templateValidation,
  adminController.createTemplate
);
router.put(
  "/templates/:id",
  isSuperAdmin,
  templateValidation,
  adminController.updateTemplate
);
router.delete("/templates/:id", isSuperAdmin, adminController.deleteTemplate);

// Organization Management Routes (Super Admin only)
router.get("/organizations", isSuperAdmin, adminController.getOrganizations);
router.get("/organizations/:id", isSuperAdmin, adminController.getOrganization);
router.post(
  "/organizations",
  isSuperAdmin,
  organizationValidation,
  adminController.createOrganization
);
router.put(
  "/organizations/:id",
  isSuperAdmin,
  organizationValidation,
  adminController.updateOrganization
);
router.delete(
  "/organizations/:id",
  isSuperAdmin,
  adminController.deleteOrganization
);

// Standard Management Routes (Super Admin only)
router.get("/standards", isSuperAdmin, adminController.getStandards);
router.get("/standards/:id", isSuperAdmin, adminController.getStandard);
router.post(
  "/standards",
  isSuperAdmin,
  standardValidation,
  adminController.createStandard
);
router.put(
  "/standards/:id",
  isSuperAdmin,
  standardValidation,
  adminController.updateStandard
);
router.delete("/standards/:id", isSuperAdmin, adminController.deleteStandard);

// Analytics Routes (Super Admin only)
router.get(
  "/analytics/user-growth",
  isSuperAdmin,
  adminController.getUserGrowth
);
router.get(
  "/analytics/user-distribution",
  isSuperAdmin,
  adminController.getUserDistribution
);

module.exports = router;
