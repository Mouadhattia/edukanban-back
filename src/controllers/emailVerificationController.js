const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail, generateVerificationToken } = require('../utils/emailService');

// Verify email
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Find user by ID
   
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if user is already verified
    if (user.isEmailVerified) {
      return res.status(400).json({ message: 'Email is already verified.' });
    }

    // Update user verification status
    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    user.status = 'active';
    
    await user.save();

    res.json({ message: 'Email verified successfully.' });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(400).json({ message: 'Verification link has expired.' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid verification link.' });
    }
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Error verifying email.', error: error.message });
  }
};

// Resend verification email
const resendVerificationEmail = async (req, res) => {
  try {
    
    
    const { email } = req.body;
   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if user is already verified

    if (user.isEmailVerified) {
      return res.status(400).json({ message: 'Email is already verified.' });
    }

    // Generate new verification token
    const verificationToken = generateVerificationToken(user._id);
    user.emailVerificationToken = verificationToken;
    user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    
    await user.save();

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    res.json({ message: 'Verification email sent successfully.' });
  } catch (error) {

    console.error('Error resending verification email:', error);
    res.status(500).json({ 
      message: 'Error resending verification email.', 
      error: error.message 
    });
  }
};

module.exports = {
  verifyEmail,
  resendVerificationEmail
};