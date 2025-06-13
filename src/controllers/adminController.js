const { User } = require('../models/User');
const { School } = require('../models/School');
const { Organization } = require('../models/Organization');
const { Template } = require('../models/Template');
const { Standard } = require('../models/Standard');
const moment = require('moment');

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
    if (role && role!=='undefined') {
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
    const { schoolName, schoolDistrict, schoolType,schoolWebsite } = req.body;
    const school = new School({
      schoolName,
      schoolDistrict,
      schoolType,
      schoolWebsite
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
    const { page=1 , limit=2 , search, organizationType } = req.query;
    const query = {};


    // Search filter
    if (search) {
      query.$or = [
        { organizationName: { $regex: search, $options: 'i' } },
        { organizationWebsite: { $regex: search, $options: 'i' } }
      ];
    }

    // Organization type filter
    if (organizationType && organizationType!='undefined') {
      query.organizationType = organizationType;
    }

    const totalOrganizations = await Organization.countDocuments(query);
    const organizations = await Organization.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();


    // Enhance each organization with userCount and admin
    const enhancedOrganizations = await Promise.all(
      organizations.map(async (org) => {
        const userCount = await User.countDocuments({ organizationIds: org._id });
        const admin = await User.findOne({
          organizationIds: org._id,
          role: 'organization-admin'
        }).select('-password'); // Don't return password

        return {
          ...org.toObject(),
          userCount,
          admin,
        };
      })
    );

    res.json({
      organizations: enhancedOrganizations,
      totalPages: Math.ceil(totalOrganizations / limit),
      currentPage: parseInt(page),
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
    const { organizationName, organizationWebsite, organizationType, primarySubjectAreas,status } = req.body;
  
    
    const organization = new Organization({
      organizationName,
      organizationWebsite,
      organizationType,
      primarySubjectAreas,
      status
    });
    await organization.save();

    const userCount = await User.countDocuments({ organizationIds: organization._id });
    const admin = await User.findOne({
      organizationIds: organization._id,
      role: 'organization-admin'
    }).select('-password'); 


    res.status(201).json({
      message: 'Organization created successfully',
     organization: {...organization._doc,userCount,admin}
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
    const userCount = await User.countDocuments({ organizationIds: organization._id });
    const admin = await User.findOne({
      organizationIds: organization._id,
      role: 'organization-admin'
    }).select('-password'); 
    res.json({
      message: 'Organization updated successfully',
      organization:{...organization._doc,userCount,admin}
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

// Template Management
const getTemplates = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, status } = req.query;
    const query = {};

    // Search filter
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    // Status filter
    if (status) {
      query.status = status;
    }

    const totalTemplates = await Template.countDocuments(query);
    const templates = await Template.find(query)
    .populate({
      path: 'createdBy',
      select: 'fullName email organizationIds',
      populate: {
        path: 'organizationIds',
        select: 'organizationName' 
      }
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.json({
      templates,
      totalPages: Math.ceil(totalTemplates / limit),
      currentPage: page,
      totalTemplates
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching templates', error: error.message });
  }
};

const getTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id)
      .populate('createdBy', 'fullName email');
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(template);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching template', error: error.message });
  }
};

const createTemplate = async (req, res) => {
  try {
    const { name, status } = req.body;

    const template = new Template({
      name,
      status,
      createdBy: req.user.userId
    });

    await template.save();
    const populatedTemplate = await Template.findById(template._id)
      .populate('createdBy', 'fullName email');

    res.status(201).json({
      message: 'Template created successfully',
      template: populatedTemplate
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating template', error: error.message });
  }
};

const updateTemplate = async (req, res) => {
  try {
    const { name, status } = req.body;
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    if (name) template.name = name;
    if (status) template.status = status;

    await template.save();
    const updatedTemplate = await Template.findById(template._id)
      .populate('createdBy', 'fullName email');

    res.json({
      message: 'Template updated successfully',
      template: updatedTemplate
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating template', error: error.message });
  }
};

const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findByIdAndDelete(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json({ message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting template', error: error.message });
  }
};

// Standard Management
const getStandards = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, status } = req.query;
    const query = {};

    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { region: { $regex: search, $options: 'i' } }
      ];
    }

    // Status filter
    if (status) {
      query.status = status;
    }

    const totalStandards = await Standard.countDocuments(query);
    const standards = await Standard.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.json({
      standards,
      totalPages: Math.ceil(totalStandards / limit),
      currentPage: page,
      totalStandards
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching standards', error: error.message });
  }
};

const getStandard = async (req, res) => {
  try {
    const standard = await Standard.findById(req.params.id);
    if (!standard) {
      return res.status(404).json({ message: 'Standard not found' });
    }
    res.json(standard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching standard', error: error.message });
  }
};

const createStandard = async (req, res) => {
  try {
    const { name, category, region, status } = req.body;

    const standard = new Standard({
      name,
      category,
      region,
      status
    });

    await standard.save();
    res.status(201).json({
      message: 'Standard created successfully',
      standard
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating standard', error: error.message });
  }
};

const updateStandard = async (req, res) => {
  try {
    const standard = await Standard.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!standard) {
      return res.status(404).json({ message: 'Standard not found' });
    }
    res.json({
      message: 'Standard updated successfully',
      standard
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating standard', error: error.message });
  }
};

const deleteStandard = async (req, res) => {
  try {
    const standard = await Standard.findByIdAndDelete(req.params.id);
    if (!standard) {
      return res.status(404).json({ message: 'Standard not found' });
    }
    res.json({ message: 'Standard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting standard', error: error.message });
  }
};

// Analytics
const getUserGrowth = async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const startDate = moment().subtract(days, 'days').startOf('day');

    const users = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate.toDate() }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          users: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          date: '$_id',
          users: 1
        }
      },
      { $sort: { date: 1 } }
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user growth data', error: error.message });
  }
};

const getUserDistribution = async (req, res) => {
  try {
    const distribution = await User.aggregate([
      {
        $group: {
          _id: '$role',
          value: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          role: '$_id',
          value: 1
        }
      }
    ]);

    res.json(distribution);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user distribution data', error: error.message });
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
  deleteOrganization,
  // Template Management
  getTemplates,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
  // Standard Management
  getStandards,
  getStandard,
  createStandard,
  updateStandard,
  deleteStandard,
  // Analytics
  getUserGrowth,
  getUserDistribution
};