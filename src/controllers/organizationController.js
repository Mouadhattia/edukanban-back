const InvitationCode = require('../models/InvitationCode');
const { Organization } = require('../models/Organization');
const { User, ROLES } = require('../models/User');


// Organization Management

function generate8DigitCode() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}
const updateOrganization = async (req, res) => {
  try {
    const { organizationIds } = req.user;
    const organizationId = organizationIds[0]; // Use first organization for now
    const { organizationName, organizationType, organizationWebsite, primarySubjectAreas } = req.body;

    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    // Update fields if provided
    if (organizationName) organization.organizationName = organizationName;
    if (organizationType) organization.organizationType = organizationType;
    if (organizationWebsite) organization.organizationWebsite = organizationWebsite;
    if (primarySubjectAreas) organization.primarySubjectAreas = primarySubjectAreas;

    await organization.save();
    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Error updating organization', error: error.message });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const { organizationIds } = req.user;
    const organizationId = organizationIds[0]; // Use first organization for now

    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    // Delete associated users
    await User.updateMany(
      { organizationIds: organizationId },
      { $pull: { organizationIds: organizationId } }
    );
    
    // Delete associated invitation codes
    await InvitationCode.deleteMany({ organizationId });
    
    // Delete the organization
    await Organization.findByIdAndDelete(organizationId);

    res.json({ message: 'Organization and associated data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting organization', error: error.message });
  }
};

// User Management
const getOrganizationUsers = async (req, res) => {
  try {
    const { organizationIds } = req.user;
    const organizationId = organizationIds[0]; // Use first organization for now
    const { page , limit , role, search } = req.query;
    
    const query = { organizationIds: organizationId };
    
    if (role) {
      query.role = role;
    }
    
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } }
      ];
    }

    const totalUsers = await User.countDocuments(query);
    const users = await User.find(query)
      .select('-password')
      .limit(Number(limit) * 1)
      .skip((page - 1) * Number(limit))
      .exec();

    res.json({
      users,
      totalPages: Math.ceil(totalUsers / Number(limit)),
      currentPage: page,
      totalUsers
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organization users', error: error.message });
  }
};

// Invitation Management
const generateInvitation = async (req, res) => {
  try {
   

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const role= user.role;
    const organizationIds = user.organizationIds.map(id => id.toString());
  
 
    const organizationId = organizationIds[0]; // Use first organization for now
    const { expirationDays = 7 } = req.body;


    // Verify user has organization admin role
    if (role !== ROLES.ORGANIZATION_ADMIN) {
      return res.status(403).json({ message: 'Only organization admins can generate invitation codes' });
    }

    const invitationCode = new InvitationCode({
      organizationId,
      role:ROLES.CURRICULUM_DESIGNER, // Using role from the authenticated user
      expirationDate: new Date(Date.now() + expirationDays * 24 * 60 * 60 * 1000),
      createdBy: req.user.userId,
      code : generate8DigitCode()
    });

    await invitationCode.save();
    res.json(invitationCode);
  } catch (error) {
    res.status(500).json({ message: 'Error generating invitation code', error: error.message });
  }
};

const listInvitationCodes = async (req, res) => {
  try {
    const { organizationIds } = req.user;
    const organizationId = organizationIds[0]; // Use first organization for now
    const invitationCodes = await InvitationCode.find({ 
      organizationId,
      active: true,
      expirationDate: { $gt: new Date() }
    });
    res.json(invitationCodes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invitation codes', error: error.message });
  }
};

const revokeInvitationCode = async (req, res) => {
  try {
    const { organizationIds } = req.user;
    const organizationId = organizationIds[0]; // Use first organization for now
    const { codeId } = req.params;

    const invitationCode = await InvitationCode.findOne({ 
      _id: codeId,
      organizationId
    });

    if (!invitationCode) {
      return res.status(404).json({ message: 'Invitation code not found' });
    }

    invitationCode.active = false;
    await invitationCode.save();

    res.json({ message: 'Invitation code revoked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error revoking invitation code', error: error.message });
  }
};

module.exports = {
  updateOrganization,
  deleteOrganization,
  getOrganizationUsers,
  generateInvitation,
  listInvitationCodes,
  revokeInvitationCode
};