const { User, ROLES } = require('../models/User');
const { School } = require('../models/School');
const InvitationCode = require('../models/InvitationCode');
const crypto = require('crypto');

// Helper function to generate invitation code
const generateInvitationCode = async (schoolId, role, expirationDays = 7,createdBy) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);

  const code = new InvitationCode({
    code: crypto.randomBytes(6).toString('hex'),
    schoolId,
    role,
    expirationDate,
    active: true,
    createdBy
  });

  await code.save();
  return code;
};

// Get users within the same school (with pagination, filtering, and search)
const getSchoolUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, role } = req.query;
    const { schoolIds } = req.user; // Get schoolIds from authenticated user
    const schoolId = schoolIds[0]; // Use first school for now

    if (!schoolIds || schoolIds.length === 0) {
      return res.status(403).json({ message: 'Access denied. No schools associated.' });
    }

    const query = { schoolIds: schoolId };

    // Search filter
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } }
      ];
    }

    // Role filter (only teacher and student)
    if (role && [ROLES.TEACHER, ROLES.STUDENT].includes(role)) {
      query.role = role;
    }

    const totalUsers = await User.countDocuments(query);
    const users = await User.find(query)
      .select('-password')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.json({
      users,
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      totalUsers
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching school users', error: error.message });
  }
};

// Update school (only the school admin can update their own school)
const updateSchool = async (req, res) => {
  try {
    const { schoolIds } = req.user;
    const schoolId = schoolIds[0]; // Use first school for now
    const { schoolName, schoolDistrict, schoolType } = req.body;

    if (!schoolIds || schoolIds.length === 0) {
      return res.status(403).json({ message: 'Access denied. No schools associated.' });
    }

    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    if (schoolName) school.schoolName = schoolName;
    if (schoolDistrict) school.schoolDistrict = schoolDistrict;
    if (schoolType) school.schoolType = schoolType;

    await school.save();

    res.json({
      message: 'School updated successfully',
      school
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating school', error: error.message });
  }
};

// Generate invitation code for teachers or students
const generateInvitation = async (req, res) => {
  try {
    

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
   
    const schoolIds = user.schoolIds.map(id => id.toString());
    const schoolId = schoolIds[0]; // Use first school for now
    const createdBy=user._id;
    const {  expirationDays,role } = req.body;

    if (!schoolIds || schoolIds.length === 0) {
      return res.status(403).json({ message: 'Access denied. No schools associated.' });
    }

    if (![ROLES.TEACHER, ROLES.STUDENT].includes(role)) {
      return res.status(400).json({ message: 'Invalid role. Must be teacher or student.' });
    }

    const invitationCode = await generateInvitationCode(schoolId, role, expirationDays,createdBy);

    res.json({
      message: 'Invitation code generated successfully',
      invitationCode: {
        code: invitationCode.code,
        role: invitationCode.role,
        expirationDate: invitationCode.expirationDate,
        createdBy:invitationCode.createdBy
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating invitation code', error: error.message });
  }
};

// List all active invitation codes for the school
const listInvitationCodes = async (req, res) => {
  try {
    const { schoolIds } = req.user;
    const schoolId = schoolIds[0]; // Use first school for now

    if (!schoolIds || schoolIds.length === 0) {
      return res.status(403).json({ message: 'Access denied. No schools associated.' });
    }

    const invitationCodes = await InvitationCode.find({
      schoolId,
      active: true,
      expirationDate: { $gt: new Date() }
    }).select('-__v');

    res.json({
      message: 'Invitation codes retrieved successfully',
      invitationCodes
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invitation codes', error: error.message });
  }
};

// Revoke an invitation code
const revokeInvitationCode = async (req, res) => {
  try {
    const { schoolIds } = req.user;
    const schoolId = schoolIds[0]; // Use first school for now
    const { codeId } = req.params;

    if (!schoolIds || schoolIds.length === 0) {
      return res.status(403).json({ message: 'Access denied. No schools associated.' });
    }

    const invitationCode = await InvitationCode.findOne({
      _id: codeId,
      schoolId
    });

    if (!invitationCode) {
      return res.status(404).json({ message: 'Invitation code not found' });
    }

    invitationCode.active = false;
    await invitationCode.save();

    res.json({
      message: 'Invitation code revoked successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error revoking invitation code', error: error.message });
  }
};

module.exports = {
  getSchoolUsers,
  updateSchool,
  generateInvitation,
  listInvitationCodes,
  revokeInvitationCode
};