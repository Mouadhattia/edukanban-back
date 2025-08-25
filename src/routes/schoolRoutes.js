const express = require("express");
const router = express.Router();
const { verifyToken, authorize } = require("../middleware/auth");
const { ROLES } = require("../models/User");
const {
  getSchoolUsers,
  updateSchool,
  generateInvitation,
  listInvitationCodes,
  revokeInvitationCode,
} = require("../controllers/schoolController");
const {
  createClassroom,
  getAllClassrooms,
  getClassroomById,
  updateClassroom,
  deleteClassroom,
  createFullClassroom,
} = require("../controllers/calssRoomController");
const {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/SubjectController");
const {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevel,
  deleteLevel,
} = require("../controllers/levelController");
const {
  getAllRooms,
  getRoomById,
  createRoom,
  deleteRoom,
  updateRoom,
} = require("../controllers/roomController");
const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
} = require("../controllers/sessionController");
const {
  getAllPresences,
  getPresenceById,
  createPresence,
  updatePresence,
  deletePresence,
} = require("../controllers/presenceController");
const {
  getAllStudyPeriods,
  getOneStudyPeriod,
  createStudyPeriod,
  updateStudyPeriod,
  deleteStudyPeriod,
} = require("../controllers/studyPeriodController");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require("../controllers/courseController");

function unless(skipped, middleware) {
  return (req, res, next) => {
    // check method + path
    const shouldSkip = skipped.some(
      (rule) => rule.path === req.path && rule.method === req.method
    );

    if (shouldSkip) {
      return next(); // skip middleware
    }
    return middleware(req, res, next);
  };
}


// Skip ONLY GET /courses
const skippedRoutes = [{ path: "/courses", method: "GET" }];

// Middleware to check if user is a school admin
const isSchoolAdmin = (req, res, next) => {
  if (
    req.user.role !== ROLES.SCHOOL_ADMIN &&
    req.user.role !== ROLES.SUPER_ADMIN
  ) {
    return res
      .status(403)
      .json({ message: "Access denied. School admin only." });
  } else {
  }
  next();
};

// Validation middleware for school updates
const validateSchoolUpdate = (req, res, next) => {
  const { schoolName, schoolDistrict, schoolType } = req.body;
  const errors = [];

  if (schoolName && schoolName.length < 2) {
    errors.push("School name must be at least 2 characters long");
  }

  if (schoolDistrict && schoolDistrict.length < 2) {
    errors.push("School district must be at least 2 characters long");
  }

  if (schoolType && !["Public", "Private", "Charter"].includes(schoolType)) {
    errors.push("Invalid school type. Must be Public, Private, or Charter");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation failed", errors });
  }

  next();
};

// Validation middleware for invitation generation
const validateInvitation = (req, res, next) => {
  const { role, expirationDays } = req.body;
  const errors = [];

  if (!role || ![ROLES.TEACHER, ROLES.STUDENT].includes(role)) {
    errors.push("Invalid role. Must be teacher or student");
  }

  if (
    expirationDays &&
    (isNaN(expirationDays) || expirationDays < 1 || expirationDays > 30)
  ) {
    errors.push("Expiration days must be between 1 and 30");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation failed", errors });
  }

  next();
};

router.use(unless(skippedRoutes, verifyToken));
router.use(unless(skippedRoutes, isSchoolAdmin));

// Get users within the same school (with pagination and filters)
router.get("/users", getSchoolUsers);

// Update school details
router.put("/school", validateSchoolUpdate, updateSchool);

// Invitation code management
router.post("/invite", validateInvitation, generateInvitation);
router.get("/invite", listInvitationCodes);
router.delete("/invite/:codeId", revokeInvitationCode);

// Classrooms
router.post("/classrooms", createClassroom);
router.get("/classrooms", getAllClassrooms);
router.get("/classrooms/:id", getClassroomById);
router.put("/classrooms/:id", updateClassroom);
router.delete("/classrooms/:id", deleteClassroom);

// Subjects
router.get("/subjects", getAllSubjects);
router.get("/subjects/:id", getSubjectById);
router.post("/subjects", createSubject);
router.put("/subjects/:id", updateSubject);
router.delete("/subjects/:id", deleteSubject);

// Levels
router.get("/levels", getAllLevels);
router.get("/levels/:id", getLevelById);
router.post("/levels", createLevel);
router.put("/levels/:id", updateLevel);
router.delete("/levels/:id", deleteLevel);

// Rooms
router.get("/rooms", getAllRooms);
router.get("/rooms/:id", getRoomById);
router.post("/rooms", createRoom);
router.put("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);

// Sessions
router.get("/sessions", getAllSessions);
router.get("/sessions/:id", getSessionById);
router.post("/sessions", createSession);
router.put("/sessions/:id", updateSession);
router.delete("/sessions/:id", deleteSession);

// Presences
router.get("/presences", getAllPresences);
router.get("/presences/:id", getPresenceById);
router.post("/presences", createPresence);
router.put("/presences/:id", updatePresence);
router.delete("/presences/:id", deletePresence);

// Study periods
router.get("/study-periods", getAllStudyPeriods);
router.get("/study-periods/:id", getOneStudyPeriod);
router.post("/study-periods", createStudyPeriod);
router.put("/study-periods/:id", updateStudyPeriod);
router.delete("/study-periods/:id", deleteStudyPeriod);

// create a full class room with session
router.post("/classrooms/full", createFullClassroom);

// Courses
router.post("/courses", createCourse);
router.get("/courses", getAllCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id", updateCourseById);
router.delete("/courses/:id", deleteCourseById);

module.exports = router;
