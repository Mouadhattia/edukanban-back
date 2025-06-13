const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ROLES = {
  TEACHER: 'teacher',
  STUDENT: 'student',
  CURRICULUM_DESIGNER: 'curriculum-designer',
  SUPER_ADMIN: 'superAdmin',
  ORGANIZATION_ADMIN: 'organization-admin',
  SCHOOL_ADMIN: 'school-admin'
};
const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  DELETED: 'deleted',
  SUSPENDED:'suspended'
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  active: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  },
  schoolIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School'
  }],
  organizationIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  }],
  status: {
    type: String,
    enum: Object.values(STATUS),
    default: STATUS.PENDING
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, {
  timestamps: true
});

// Validate that either schoolIds or organizationIds is present and not empty
userSchema.pre('validate', function(next) {
  if (this.role !== ROLES.SUPER_ADMIN &&
      (!this.schoolIds || this.schoolIds.length === 0) &&
      (!this.organizationIds || this.organizationIds.length === 0)) {
    this.invalidate('schoolIds', 'Either schoolIds or organizationIds must be provided with at least one value');
    this.invalidate('organizationIds', 'Either schoolIds or organizationIds must be provided with at least one value');
  }
  next();
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT token
userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { 
      userId: this._id,
      role: this.role,
      organizationIds: this.organizationIds,
      schoolIds: this.schoolIds,
      email: this.email,
      fullName: this.fullName,
      status: this.status,
      schoolIds:this.schoolIds,
      organizationIds:this.organizationIds

    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Export ROLES object
module.exports.ROLES = ROLES;

// Export User model
module.exports.User = mongoose.model('User', userSchema);