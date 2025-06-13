const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  schoolId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  domain: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['published', 'draft'],
    default: 'draft'
  },
  image_url: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

// Update timestamps on save
siteSchema.pre('save', function(next) {
  const now = new Date();
  this.updated_at = now;
  this.last_updated = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

const Site = mongoose.model('Site', siteSchema);

module.exports = { Site };