const express = require("express");
const router = express.Router();
const {
  assignStudentToClassroom,
  getAllClassroomsByCourse,
} = require("../controllers/calssRoomController");
const { verifyToken } = require("../middleware/auth");

router.post("/assign-student", verifyToken, assignStudentToClassroom);
router.get(
  "/get-all-classrooms-by-course/:courseId",
  verifyToken,
  getAllClassroomsByCourse
);

module.exports = router;
