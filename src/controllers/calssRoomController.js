const { Classroom } = require("../models/ClassRoom");
const { CourseClass } = require("../models/Course_Class");
const Courses = require("../models/Courses");
const { School } = require("../models/School");
const Session = require("../models/Session");
const { StudentClass } = require("../models/Student_Class");
const { User } = require("../models/User");
const WeeklySchedule = require("../models/WeeklySchedule");

// Create a new classroom
const createClassroom = async (req, res) => {
  try {
    const { name, schoolId, description } = req.body;

    // Optional: Check if the school exists
    const schoolExists = await School.findById(schoolId);
    if (!schoolExists) {
      return res.status(404).json({ error: "School not found" });
    }

    const classroom = await Classroom.create({
      name,
      schoolId,
      description,
    });

    res.status(201).json(classroom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all classrooms
const getAllClassrooms = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      schoolId,
      fromDate,
      toDate,
    } = req.query;

    const query = {};

    // Search by name (case-insensitive)
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // Filter by schoolId
    if (schoolId) {
      query.schoolId = schoolId;
    }

    // Filter by createdAt date range
    if (fromDate || toDate) {
      query.createdAt = {};
      if (fromDate) query.createdAt.$gte = new Date(fromDate);
      if (toDate) query.createdAt.$lte = new Date(toDate);
    }

    const classrooms = await Classroom.find(query)
      .populate("schoolId")
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 })
      .populate("levelId");

    const total = await Classroom.countDocuments(query);

    // get all courses assigned to the classrooms

    res.status(200).json({
      classes: classrooms,
      totalClasses: total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a classroom by ID
const getClassroomById = async (req, res) => {
  try {
    const { id } = req.params;
    const classroom = await Classroom.findById(id)
      .populate("schoolId")
      .populate("levelId")
      .populate("studyPeriodId");
    // get all courses assigned to the classroom
    const courses = await CourseClass.find({ class: classroom._id }).populate({
      path: "course",
      populate: { path: "school" },
    });

    // get all sessions assigned to the classroom
    const sessions = await Session.find({ classRoom: classroom._id })
      .populate("subject")
      .populate("teacher")
      .populate("roomId")
      .populate("weeklySchedule");

    const students = await StudentClass.find({ class: classroom._id }).populate(
      "student"
    );

    classroom.courses = courses;

    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }

    res.status(200).json({
      ...classroom._doc,
      courses: courses.map((course) => course.course),
      sessions: sessions,
      students: students,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a classroom
const updateClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;

    const classroom = await Classroom.findByIdAndUpdate(
      id,
      { name, description, status },
      { new: true, runValidators: true }
    );

    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }

    res.status(200).json(classroom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a classroom
const deleteClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Classroom.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Classroom not found" });
    }

    res.status(200).json({ message: "Classroom deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create a full class room with session

const createFullClassroom = async (req, res) => {
  try {
    const {
      name,
      schoolId,
      description,
      courseName,
      subjectId,
      teacherId,
      weeklySchedule,
      levelId,
      roomId,
      studyPeriodId,
    } = req.body;

    // check if  all the data is provided
    if (
      !name ||
      !schoolId ||
      !courseName ||
      !subjectId ||
      !teacherId ||
      !weeklySchedule ||
      !levelId ||
      !roomId ||
      !studyPeriodId
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // create classroom
    const classroom = await Classroom.create({
      name,
      schoolId,
      description,
      levelId,
      studyPeriodId,
    });

    // create weekly schedule
    const newWeeklySchedule = await WeeklySchedule.create({
      weeklySchedule,
    });

    // create session
    const session = await Session.create({
      title: courseName,
      classRoom: classroom._id,
      subject: subjectId,
      teacher: teacherId,
      weeklySchedule: newWeeklySchedule._id,
      studyPeriod: studyPeriodId,
      roomId,
    });
    const newClassroom = await Classroom.findById(classroom._id).populate(
      "levelId"
    );

    res.status(201).json(newClassroom);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
// assign a course to a class room
const assignCourseToClassroom = async (req, res) => {
  try {
    const { classroomId, courseId } = req.body;

    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }
    const course = await Courses.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    await CourseClass.create({
      class: classroomId,
      course: courseId,
    });
    res
      .status(200)
      .json({ course, message: "Course assigned to classroom successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
// remove a course from a class room
const removeCourseFromClassroom = async (req, res) => {
  try {
    const { classroomId, courseId } = req.body;
    const courseClass = await CourseClass.findOne({
      class: classroomId,
      course: courseId,
    });
    if (!courseClass) {
      return res.status(404).json({ error: "Course not found in classroom" });
    }
    await CourseClass.findByIdAndDelete(courseClass._id);
    res
      .status(200)
      .json({ message: "Course removed from classroom successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// assign a student to a class room
const assignStudentToClassroom = async (req, res) => {
  try {
    const { classRoomId, studentId, status } = req.body;

    const classroom = await Classroom.findById(classRoomId);
    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }
    const student = await User.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    await StudentClass.create({
      class: classRoomId,
      student: studentId,
      status,
    });
    res
      .status(200)
      .json({ message: "Student assigned to classroom successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
// remove a student from a class room
const removeStudentFromClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const studentClass = await StudentClass.findByIdAndDelete(id);
    if (!studentClass) {
      return res.status(404).json({ error: "Student not found in classroom" });
    }
    res
      .status(200)
      .json({ message: "Student removed from classroom successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// get all class  related to  course
const getAllClassroomsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { studentId } = req.query;

    if (!courseId || !studentId) {
      return res
        .status(400)
        .json({ error: "courseId and studentId are required" });
    }

    const classrooms = await CourseClass.find({ course: courseId }).populate({
      path: "class",
      populate: [
        { path: "levelId", model: "Level" },
        { path: "studyPeriodId", model: "StudyPeriod" },
      ],
    });

    const studentClass = await StudentClass.findOne({
      student: studentId,
      class: { $in: classrooms.map((c) => c.class._id) }, // use only IDs
    });

    if (studentClass) {
      return res.status(200).json([]); // student already assigned
    }

    return res.status(200).json(classrooms.map((c) => c.class));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
// get all class rooms by student id
const getAllClassroomsByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params;

    const classrooms = await StudentClass.find({ student: studentId }).populate(
      {
        path: "class",
        populate: [
          { path: "studyPeriodId", model: "StudyPeriod" },
          { path: "levelId", model: "Level" },
          { path: "schoolId", model: "School" },
        ],
      }
    );

    // for evry class room get the course and retuned iside class room object
    const populatedClassrooms = await Promise.all(
      classrooms.map(async (c) => {
        const sessions = await Session.find({
          classRoom: c.class._id,
        })
          .populate("weeklySchedule")
          .populate("teacher")
          .populate("subject");

        return {
          ...c.class._doc,
          sessions,
        }; // return all courses
      })
    );
    res.status(200).json(populatedClassrooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createClassroom,
  getAllClassrooms,
  getClassroomById,
  updateClassroom,
  deleteClassroom,
  createFullClassroom,
  assignCourseToClassroom,
  removeCourseFromClassroom,
  assignStudentToClassroom,
  removeStudentFromClassroom,
  getAllClassroomsByCourse,
  getAllClassroomsByStudentId,
};
