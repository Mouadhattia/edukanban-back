// study period controller
const StudyPeriod = require("../models/StudyPeriod");

// get all study periods
const getAllStudyPeriods = async (req, res) => {
  try {
    const { schoolId, search } = req.query;

    const query = {
      school: schoolId,
      name: { $regex: search, $options: "i" },
    };
    const studyPeriods = await StudyPeriod.find(query);

    res.status(200).json(studyPeriods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one study period
const getOneStudyPeriod = async (req, res) => {
  try {
    const { id } = req.params;
    const studyPeriod = await StudyPeriod.findById(id);
    res.status(200).json(studyPeriod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create study period
const createStudyPeriod = async (req, res) => {
  try {
    const { name, description, schoolId, startDate, endDate } = req.body;
    const studyPeriod = await StudyPeriod.create({
      name,
      description,
      school: schoolId,
      startDate,
      endDate,
    });
    res.status(201).json(studyPeriod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update study period
const updateStudyPeriod = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, schoolId, startDate, endDate } = req.body;
    const studyPeriod = await StudyPeriod.findByIdAndUpdate(id, {
      name,
      description,
      school: schoolId,
      startDate,
      endDate,
    });
    res.status(200).json(studyPeriod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete study period
const deleteStudyPeriod = async (req, res) => {
  try {
    const { id } = req.params;
    await StudyPeriod.findByIdAndDelete(id);
    res.status(200).json({ message: "Study period deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStudyPeriods,
  getOneStudyPeriod,
  createStudyPeriod,
  updateStudyPeriod,
  deleteStudyPeriod,
};
