const Subject = require("../models/Subject");

// get all subjects
const getAllSubjects = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const skip = (page - 1) * limit;

    const query = {
      name: { $regex: search, $options: "i" },
    };

    const subjects = await Subject.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      subjects,
      total: subjects.length,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a subject by id
const getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findById(id);
    if (!subject) {
      return res.status(404).json("Subject not found");
    }
    res.status(200).json({
      success: true,
      subject,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new subject
const createSubject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const subject = await Subject.create({ name, description });
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a subject
const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    req.body;
    const subject = await Subject.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a subject
const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    await Subject.findByIdAndDelete(id);
    res.status(200).json("Subject deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// export the controllers
module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};
