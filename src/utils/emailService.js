const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { User } = require("../models/User");

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Generate random token
const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Send verification email
const sendVerificationEmail = async (user) => {
  const token = generateToken();
  const verificationLink = `http://localhost:5000/api/template/mail-verified/${token}`;

  // Update user with verification token

  user.emailVerificationToken = token;
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  user.emailVerificationExpires = expiresAt;

  await user.save();

  // Send email
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: user.email,
    subject: "Verify Your Email",
    html: `
      <h1>Email Verification</h1>
      <p>Hello ${user.fullName},</p>
      <p>Please click the link below to verify your email address:</p>
      <a href="${verificationLink}">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
    `,
  });
};

// Send password reset email
const sendPasswordResetEmail = async (user) => {
  const token = generateToken();
  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

  // Update user with reset token
  user.resetPasswordToken = token;
  const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000);
  user.resetPasswordExpires = expiresAt;
  await user.save();

  // Send email
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: user.email,
    subject: "Password Reset Request",
    html: `
      <h1>Password Reset</h1>
      <p>Hello ${user.fullName},</p>
      <p>You requested to reset your password. Click the link below to reset it:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  });
};

// Verify email token
const verifyEmailToken = async (token) => {
  const user = await User.findOne({
    emailVerificationToken: token,
    emailVerificationExpires: { $gt: Date.now() },
  });

  if (!user) {
    return "Invalid or expired verification token";
  }
  if (!user.isEmailVerified) {
    user.isEmailVerified = true;
    user.status = "active";
    await user.save();
  }

  return user;
};

// Verify password reset token
const verifyResetToken = async (token) => {
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  return user;
};
// send contact email
const sendContactEmail = async (from, to, subject, name, message) => {
  // Send email
  await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: `
    <h1>${subject}</h1>
    <p>Name: ${name}</p>
    <p>Email: ${from}</p>
    <p>${message}</p>
    `,
  });
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
  verifyEmailToken,
  verifyResetToken,
  sendContactEmail,
};
