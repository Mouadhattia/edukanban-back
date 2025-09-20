// routes/teacherRoutes.js

const express = require("express");
const {
  getClassroomsByTeacherId,
  getCoursesByTeacherId,
} = require("../controllers/teacherController");
const { authorize, verifyToken } = require("../middleware/auth");
const { ROLES } = require("../models/User");
const router = express.Router();

const permissions = authorize(
  ROLES.TEACHER,
  ROLES.SUPER_ADMIN,
  ROLES.SCHOOL_ADMIN
);

// get Classrooms by teacher id
router.get(
  "/classrooms/:teacherId",
  verifyToken,
  permissions,
  getClassroomsByTeacherId
);

// get courses by teacher id
router.get(
  "/courses/:teacherId",
  verifyToken,
  permissions,
  getCoursesByTeacherId
);
module.exports = router;
