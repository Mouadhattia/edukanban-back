const { User } = require('../models/User');
const { School } = require('../models/School');
const { Organization } = require('../models/Organization');

// User Management
const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, role } = req.query;
    const query = {};

    // Search filter
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } }
      ];
    }

    // Role filter
    if (role) {
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
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, role, fullName, schoolId, organizationId } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    const user = new User({
      email,
      password,
      role,
      fullName,
      schoolId,
      organizationId
    });

    await user.save();
    const userResponse = await User.findById(user._id).select('-password');
    res.status(201).json({
      message: 'User created successfully',
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, role, fullName, active, schoolId, organizationId } = req.body;
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      user.email = email;
    }

    if (role) user.role = role;
    if (fullName) user.fullName = fullName;
    if (typeof active === 'boolean') user.active = active;
    if (schoolId) user.schoolId = schoolId;
    if (organizationId) user.organizationId = organizationId;

    await user.save();
    const updatedUser = await User.findById(userId).select('-password');
    res.json({
      message: 'User updated successfully',
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

// School Management
const getSchools = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, schoolType } = req.query;
    const query = {};

    // Search filter
    if (search) {
      query.$or = [
        { schoolName: { $regex: search, $options: 'i' } },
        { schoolDistrict: { $regex: search, $options: 'i' } }
      ];
    }

    // School type filter
    if (schoolType) {
      query.schoolType = schoolType;
    }

    const totalSchools = await School.countDocuments(query);
    const schools = await School.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.json({
      schools,
      totalPages: Math.ceil(totalSchools / limit),
      currentPage: page,
      totalSchools
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schools', error: error.message });
  }
};

const getSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching school', error: error.message });
  }
};

const createSchool = async (req, res) => {
  try {
    const { schoolName, schoolDistrict, schoolType } = req.body;
    const school = new School({
      schoolName,
      schoolDistrict,
      schoolType
    });
    await school.save();
    res.status(201).json({
      message: 'School created successfully',
      school
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating school', error: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json({
      message: 'School updated successfully',
      school
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating school', error: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json({ message: 'School deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting school', error: error.message });
  }
};

// Organization Management
const getOrganizations = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, organizationType } = req.query;
    const query = {};

    // Search filter
    if (search) {
      query.$or = [
        { organizationName: { $regex: search, $options: 'i' } },
        { organizationWebsite: { $regex: search, $options: 'i' } }
      ];
    }

    // Organization type filter
    if (organizationType) {
      query.organizationType = organizationType;
    }

    const totalOrganizations = await Organization.countDocuments(query);
    const organizations = await Organization.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.json({
      organizations,
      totalPages: Math.ceil(totalOrganizations / limit),
      currentPage: page,
      totalOrganizations
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organizations', error: error.message });
  }
};

const getOrganization = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organization', error: error.message });
  }
};

const createOrganization = async (req, res) => {
  try {
    const { organizationName, organizationWebsite, organizationType, primarySubjectAreas } = req.body;
    const organization = new Organization({
      organizationName,
      organizationWebsite,
      organizationType,
      primarySubjectAreas
    });
    await organization.save();
    res.status(201).json({
      message: 'Organization created successfully',
      organization
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating organization', error: error.message });
  }
};

const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json({
      message: 'Organization updated successfully',
      organization
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating organization', error: error.message });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting organization', error: error.message });
  }
};

module.exports = {
  // User Management
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  // School Management
  getSchools,
  getSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  // Organization Management
  getOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization
};