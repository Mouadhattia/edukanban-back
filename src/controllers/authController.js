const { User, ROLES } = require('../models/User');
const InvitationCode = require('../models/InvitationCode');
const { School } = require('../models/School');
const { Organization } = require('../models/Organization');
const { validationResult } = require('express-validator');
const { OAuth2Client } = require('google-auth-library');
const {  sendVerificationEmail,  verifyResetToken, sendPasswordResetEmail } = require('../utils/emailService');







// genrate password 
function generatePassword(
  length = 12,
  options = { uppercase: true, lowercase: true, numbers: true, symbols: true }
){
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const syms = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  let chars = "";
  if (options.uppercase) chars += upper;
  if (options.lowercase) chars += lower;
  if (options.numbers) chars += nums;
  if (options.symbols) chars += syms;

  if (!chars) throw new Error("At least one character type must be selected");

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }

  return password;
}
// Register new user
const register = async (req, res) => {

      
  
  try {
    const { email, password, fullName, invitationCode } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Case 1 & 5: School Admin or Organization Admin registration
    if (req.body.role === ROLES.SCHOOL_ADMIN || req.body.role === ROLES.ORGANIZATION_ADMIN) {
      if (req.body.role === ROLES.SCHOOL_ADMIN) {
       
        const { schoolName, schoolDistrict, schoolType } = req.body;
        
        // Create school first
        const school = new School({
          schoolName,
          schoolDistrict,
          schoolType
        });
        await school.save();

        // Create school admin
        const user = new User({
          email,
          password,
          role: ROLES.SCHOOL_ADMIN,
          fullName,
          schoolIds: [school._id]
        });
       

        const token = user.generateAuthToken();
 
      await user.save();
      await sendVerificationEmail(user.email, verificationToken);



     

        return res.status(201).json({
          message: 'School and school admin registered successfully',
          token,
          user: {
            _id: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
            schoolId: user.schoolId
          },
          school
        });
      } else {
        const { organizationName, organizationWebsite, organizationType, primarySubjectAreas } = req.body;
    
        // Create organization first
        const organization = new Organization({
          organizationName,
          organizationWebsite,
          organizationType,
          primarySubjectAreas
        });
        await organization.save();

        // Create organization admin
        const user = new User({
          email,
          password,
          role: ROLES.ORGANIZATION_ADMIN,
          fullName,
          organizationIds: [organization._id]
        });
        await user.save();

        const token = user.generateAuthToken();
        return res.status(201).json({
          message: 'Organization and organization admin registered successfully',
          token,
          user: {
            _id: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
            organizationId: user.organizationId
          },
          organization
        });
      }
      
    }

    // Cases 2, 3, & 4: Registration with invitation code
    if (invitationCode) {
      const code = await InvitationCode.findOne({ code: invitationCode });
   
      
      if (!code) {
        return res.status(400).json({ message: 'Invitation code not found.' });
      }
      
      if (!code.active) {
        return res.status(400).json({ message: 'Invitation code is inactive.' });
      }
      
      if (code.expirationDate <= new Date()) {
        return res.status(400).json({ message: 'Invitation code has expired.' });
      }
      
      if (code.usedBy) {
        return res.status(400).json({ message: 'Invitation code has already been used.' });
      }

      // Validate role matches invitation code
      if (code.role !== req.body.role) {
        return res.status(400).json({ 
          message: 'Role mismatch with invitation code.' 
        });
      }

      // Create user with proper association
      const userData = {
        email,
        password,
        role: code.role,
        fullName
      };

      // Add proper organization or school association
      if (code.role === ROLES.CURRICULUM_DESIGNER) {
        userData.organizationIds = [code.organizationId];
      } else {
        userData.schoolIds = [code.schoolId];
      }

      const user = new User(userData);
      // Generate email verification token
      const verificationToken = generateVerificationToken(user._id);
      user.emailVerificationToken = verificationToken;
      user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
      
      await user.save();

      // Mark invitation code as used
      await code.markAsUsed(user._id);
      
      // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

      const token = user.generateAuthToken();
      return res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
          fullName: user.fullName,
          schoolId: user.schoolId,
          organizationId: user.organizationId
        }
      });
    }

    // If we reach here, it's an invalid registration attempt
    return res.status(400).json({ 
      message: 'Invalid registration request. Please provide valid credentials and follow the registration process for your role.' 
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Server error during registration.', error: error.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Check if user is active and email is verified
    if (!user.active) {
      return res.status(401).json({ message: 'Account is deactivated. Please contact administrator.' });
    }
    
    if (!user.isEmailVerified) {
      return res.status(401).json({ 
        message: 'Please verify your email address before logging in.',
        needsVerification: true
      });
    }

    // Verify password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = user.generateAuthToken();

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
        schoolId: user.schoolId,
        organizationId: user.organizationId
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login.', error: error.message });
  }
};

// Get current user profile
const getCurrentUser = async (req, res) => {
  try {

    
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    // const currentUser =  await User.findById(user.userId)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching user profile.', error: error.message });
  }
};

// Initialize Google OAuth client
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

// Google login handler
const googleLogin = async (req, res) => {
  try {
    const { token,invitationCode,role } = req.body;
  
  
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { email, name } = ticket.getPayload();
    

    // Check if user exists
    let user = await User.findOne({ email });
    if(!user && !invitationCode) {
      return res.status(400).json({ message: 'User not found. Please register first.' });
    }

    if (!user && invitationCode && role) {

      const code = await InvitationCode.findOne({ code: invitationCode });
   
      
      if (!code) {
        return res.status(400).json({ message: 'Invitation code not found.' });
      }
      
      if (!code.active) {
        return res.status(400).json({ message: 'Invitation code is inactive.' });
      }
      
      if (code.expirationDate <= new Date()) {
        return res.status(400).json({ message: 'Invitation code has expired.' });
      }
      
      if (code.usedBy) {
        return res.status(400).json({ message: 'Invitation code has already been used.' });
      }

      // Validate role matches invitation code
      if (code.role !== req.body.role) {
        return res.status(400).json({ 
          message: 'Role mismatch with invitation code.' 
        });
      }

      // Create user with proper association
      const userData = {
        email,
        password:generatePassword(12),
        role: role,
        fullName:name
      };

      // Add proper organization or school association
      if (code.role === ROLES.CURRICULUM_DESIGNER) {
        userData.organizationIds = [code.organizationId];
      } else {
        userData.schoolIds = [code.schoolId];
      }
      // Create new user if doesn't exist
       user = new User(userData);
      await user.save();

      // Mark invitation code as used
      await code.markAsUsed(user._id);
    }

    // Generate JWT token
    const authToken = user.generateAuthToken();

    res.json({
      message: 'Google login successful',
      token: authToken,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
  
        schoolIds: user.schoolIds,
        organizationIds: user.organizationIds,
        status: user.status
      }
    });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({
      message: 'Error during Google authentication',
      error: error.message
    });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // For security reasons, don't reveal if user exists
      return res.status(200).json({
        message: 'If a user with this email exists, a password reset link will be sent'
      });
    }

    // Send password reset email
    await sendPasswordResetEmail(user);

    res.status(200).json({
      message: 'If a user with this email exists, a password reset link will be sent'
    });
  } catch (error) {
    console.error('Password reset request error:', error);
    res.status(500).json({
      message: 'Error processing password reset request'
    });
  }
};

// Reset password
const resetPassword = async (req, res) => {
  try {
    const { password, token } = req.body;

    // Verify reset token and get user
    let user;
    try {
      user = await verifyResetToken(token);
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Invalid or expired reset token'
      });
    }

    // Update password and clear reset token
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      message: 'Password reset successful'
    });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({
      message: 'Error resetting password'
    });
  }
};
module.exports = {
  register,
  login,
  getCurrentUser,
  googleLogin,
  resetPassword,
  requestPasswordReset
};