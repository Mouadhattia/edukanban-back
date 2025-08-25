// Presence controller
const Presence = require("../models/Presence");

// get all presences
const getAllPresences = async (req, res) => {
  const { sessionId } = req.query;
  try {
    const presences = await Presence.find({ session: sessionId });
    res.status(200).json(presences);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a presence by id
const getPresenceById = async (req, res) => {
  try {
    const { id } = req.params;
    const presence = await Presence.findById(id);
    res.status(200).json(presence);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a presence
const createPresence = async (req, res) => {
  try {
    const presence = await Presence.create(req.body);
    res.status(201).json(presence);
  } catch (error) {
    res.status(500).json(error);
  }
};
// update a presence
const updatePresence = async (req, res) => {
  try {
    const { id } = req.params;
    const presence = await Presence.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(presence);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a presence
const deletePresence = async (req, res) => {
  try {
    const { id } = req.params;
    await Presence.findByIdAndDelete(id);
    res.status(200).json("Presence deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// export modules
module.exports = {
  getAllPresences,
  getPresenceById,
  createPresence,
  updatePresence,
  deletePresence,
};
