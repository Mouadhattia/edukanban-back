const { Classroom } = require("../models/ClassRoom");
const Level = require("../models/Level");
const { School } = require("../models/School");
const Session = require("../models/Session");
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
    const classroom = await Classroom.findById(id).populate("schoolId");

    if (!classroom) {
      return res.status(404).json({ error: "Classroom not found" });
    }

    res.status(200).json(classroom);
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

module.exports = {
  createClassroom,
  getAllClassrooms,
  getClassroomById,
  updateClassroom,
  deleteClassroom,
  createFullClassroom,
};
