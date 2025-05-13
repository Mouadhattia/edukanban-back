const mongoose = require('mongoose');
const { ROLES } = require('./User');

const invitationCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  // Keep single ID fields for backward compatibility
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School'
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization'
  },
  // New array fields for future use
 
 
  role: {
    type: String,
    enum: [ROLES.TEACHER, ROLES.STUDENT, ROLES.CURRICULUM_DESIGNER],
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  usedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  usedAt: {
    type: Date,
    default: null
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
});

// Index for faster lookups
invitationCodeSchema.index({ code: 1 });
invitationCodeSchema.index({ schoolId: 1 });
invitationCodeSchema.index({ organizationId: 1 });
invitationCodeSchema.index({ expirationDate: 1 });

// Custom validation to ensure proper IDs are present
invitationCodeSchema.pre('save', function(next) {
  // For new invitations using arrays
  if (this.isNew) {
    if (this.role === ROLES.CURRICULUM_DESIGNER) {
      if ((!this.organizationId && (!this.organizationIds || this.organizationIds.length === 0))) {
        return next(new Error('Organization ID is required for curriculum designer invitations'));
      }
      if (this.schoolId || (this.schoolIds && this.schoolIds.length > 0)) {
        return next(new Error('School ID should not be set for curriculum designer invitations'));
      }
      // If organizationId is set but organizationIds is not, initialize it
      if (this.organizationId && (!this.organizationIds || this.organizationIds.length === 0)) {
        this.organizationIds = [this.organizationId];
      }
    } else {
      if ((!this.schoolId && (!this.schoolIds || this.schoolIds.length === 0))) {
        return next(new Error('School ID is required for teacher and student invitations'));
      }
      if (this.organizationId || (this.organizationIds && this.organizationIds.length > 0)) {
        return next(new Error('Organization ID should not be set for teacher and student invitations'));
      }
      // If schoolId is set but schoolIds is not, initialize it
      if (this.schoolId && (!this.schoolIds || this.schoolIds.length === 0)) {
        this.schoolIds = [this.schoolId];
      }
    }
  }
  next();
});

// Method to check if code is valid
invitationCodeSchema.methods.isValid = function() {
  return this.active && 
         this.expirationDate > new Date() && 
         !this.usedBy;
};

// Method to mark code as used
invitationCodeSchema.methods.markAsUsed = async function(userId) {
  this.active = false;
  this.usedBy = userId;
  this.usedAt = new Date();
  await this.save();
};

const InvitationCode = mongoose.model('InvitationCode', invitationCodeSchema);

module.exports = InvitationCode;