// src/controllers/courseController.js

const Course = require("../models/Courses");

const createCourse = async (req, res) => {
  const { name, description, school, price, duration, image, video } = req.body;
  try {
    const course = await Course.create({
      name,
      description,
      school,
      price,
      duration,
      image,
      video,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all courses  by school  and pagination

const getAllCourses = async (req, res) => {
  const { schoolId, page, limit, search } = req.query;

  try {
    const courses = await Course.find({
      school: schoolId,
      name: { $regex: search, $options: "i" },
    })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      courses,
      total: courses.length,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//get course by id

const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update course by id

const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { name, description, school, price, duration, image, video } = req.body;

  let updatedCourse = {};
  if (name) updatedCourse.name = name;
  if (description) updatedCourse.description = description;
  if (school) updatedCourse.school = school;
  if (price) updatedCourse.price = price;
  if (duration) updatedCourse.duration = duration;
  if (image) updatedCourse.image = image;
  if (video) updatedCourse.video = video;
  try {
    const course = await Course.findByIdAndUpdate(id, updatedCourse, {
      new: true,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete course by id

const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    await Course.findByIdAndDelete(id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
