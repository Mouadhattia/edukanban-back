const Session = require("../models/Session");

// get all sessions
const getAllSessions = async (req, res) => {
  const { classRoomId, subjectId } = req.query;
  const query = {};
  if (classRoomId) {
    query.classRoom = classRoomId;
  }
  if (subjectId) {
    query.subject = subjectId;
  }
  try {
    const sessions = await Session.find(query);
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a session by id
const getSessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findById(id);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a session
const createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a session
const updateSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete a session
const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    await Session.findByIdAndDelete(id);
    res.status(200).json("Session deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
// export modules
module.exports = {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
};
