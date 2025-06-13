const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  site_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Site',
    required: true
  },
  colors: {
    primary: { type: String, default: '#000000' },
    secondary: { type: String, default: '#ffffff' },
    accent: { type: String, default: '#000000' },
    background: { type: String, default: '#ffffff' },
    text: { type: String, default: '#000000' }
  },
  fonts: {
    heading: { type: String, default: 'Arial' },
    body: { type: String, default: 'Arial' }
  },
  logo_url: {
    type: String,
    trim: true
  },
  favicon_url: {
    type: String,
    trim: true
  },
  social_links: {
    type: Map,
    of: String,
    default: {}
  },
  analytics: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: {}
  },
  seo: {
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    keywords: [{ type: String, trim: true }]
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
siteSettingsSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Ensure each site has only one settings document
siteSettingsSchema.index({ site_id: 1 }, { unique: true });

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);

module.exports = { SiteSettings };