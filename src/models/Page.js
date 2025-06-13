const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  site_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true
  },
  is_homepage: {
    type: Boolean,
    default: false
  },
  order_index: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
pageSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Ensure unique slug per site
pageSchema.index({ site_id: 1, slug: 1 }, { unique: true });

// Ensure only one homepage per site
pageSchema.index(
  { site_id: 1, is_homepage: 1 },
  { 
    unique: true,
    partialFilterExpression: { is_homepage: true }
  }
);

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };