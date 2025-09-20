const Session = require("../models/Session");
const Course = require("../models/Courses");
const { CourseClass } = require("../models/Course_Class");

// Get Classrooms by teacher id
const getClassroomsByTeacherId = async (req, res) => {
  try {
    const { teacherId } = req.params;

    // Get sessions by teacher and populate classroom
    const sessions = await Session.find({ teacher: teacherId })
      .populate({
        path: "classRoom",
        populate: [
          { path: "levelId" },
          { path: "studyPeriodId" },
          { path: "schoolId" },
        ],
      })
      .populate("subject")
      .populate("roomId")
      .populate("weeklySchedule");

    // Build classrooms with sessions grouped
    const classroomMap = {};

    sessions.forEach((session) => {
      const classRoom = session.classRoom;

      if (!classRoom) return; // skip if classroom is missing

      const classRoomId = classRoom._id.toString();

      if (!classroomMap[classRoomId]) {
        classroomMap[classRoomId] = {
          ...classRoom.toObject(),
          sessions: [],
        };
      }

      classroomMap[classRoomId].sessions.push(session);
    });

    const classrooms = Object.values(classroomMap);

    res.status(200).json(classrooms);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
// get courses by teacher id
const getCoursesByTeacherId = async (req, res) => {
  try {
    const { teacherId } = req.params;

    const sessions = await Session.find({ teacher: teacherId });
    const classRoomsIds = sessions.map((session) => session.classRoom);
    const uniqueClassRoomsIds = [...new Set(classRoomsIds)];
    const courseClass = await CourseClass.find({
      class: { $in: uniqueClassRoomsIds },
    })
      .populate({ path: "course", populate: { path: "school" } })
      .populate({
        path: "class",
        populate: [
          { path: "levelId" },
          { path: "studyPeriodId" },
          { path: "schoolId" },
        ],
      });

    res.status(200).json(courseClass);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getClassroomsByTeacherId,
  getCoursesByTeacherId,
};
