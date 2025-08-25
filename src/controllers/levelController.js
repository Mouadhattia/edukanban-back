const Level = require("../models/Level");

// get all levels
const getAllLevels = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", schoolId } = req.query;
    const skip = (page - 1) * limit;

    const query = {
      name: { $regex: search, $options: "i" },
      school: schoolId,
    };
    if (!schoolId) {
      return res.status(400).json("School ID is required");
    }

    const levels = await Level.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    res.status(200).json({
      levels,
      total: levels.length,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a level by id
const getLevelById = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await Level.findById(id);
    if (!level) {
      return res.status(404).json("Level not found");
    }
    res.status(200).json(level);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new level
const createLevel = async (req, res) => {
  try {
    const { name, description, schoolId } = req.body;
    if (!schoolId) {
      return res.status(400).json("School ID is required");
    }
    const level = await Level.create({ name, description, school: schoolId });
    res.status(201).json(level);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
// update a level
const updateLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const level = await Level.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    res.status(200).json(level);
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete a level
const deleteLevel = async (req, res) => {
  try {
    const { id } = req.params;
    await Level.findByIdAndDelete(id);
    res.status(200).json("Level deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// export the controllers
module.exports = {
  getAllLevels,
  getLevelById,
  createLevel,
  updateLevel,
  deleteLevel,
};
