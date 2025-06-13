const mongoose = require('mongoose');

// Section content schemas for different types
const heroContentSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  ctaText: String,
  ctaLink: String,
  backgroundImage: String
}, { _id: false });

const headingContentSchema = new mongoose.Schema({
  text: String,
  level: Number
}, { _id: false });

const featuresContentSchema = new mongoose.Schema({
  title: String,
  items: [{
    title: String,
    description: String
  }]
}, { _id: false });

const testimonialsContentSchema = new mongoose.Schema({
  title: String,
  testimonials: [{
    quote: String,
    author: String,
    role: String
  }]
}, { _id: false });

const ctaContentSchema = new mongoose.Schema({
  title: String,
  description: String,
  buttonText: String,
  buttonLink: String
}, { _id: false });

const staffDirectoryContentSchema = new mongoose.Schema({
  title: String,
  staff: [{
    name: String,
    position: String,
    image: String
  }]
}, { _id: false });

const calendarContentSchema = new mongoose.Schema({
  title: String,
  events: [{
    date: String,
    title: String,
    description: String
  }]
}, { _id: false });

const contactContentSchema = new mongoose.Schema({
  text: String,
  src: String,
  alt: String,
  caption: String
}, { _id: false });

// Map section types to their content schemas
const contentSchemaMap = {
  hero: heroContentSchema,
  heading: headingContentSchema,
  features: featuresContentSchema,
  testimonials: testimonialsContentSchema,
  cta: ctaContentSchema,
  staff_directory: staffDirectoryContentSchema,
  calendar: calendarContentSchema,
  contact: contactContentSchema
};

const sectionSchema = new mongoose.Schema({
  page_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'hero',
      'heading',
      'paragraph',
      'features',
      'testimonials',
      'cta',
      'staff_directory',
      'calendar',
      'contact',
      'image',
      'gallery',
      'video',
      'faq',
      'Header',
      'Hero'
    ]
  },
  label: {
    type: String,
    trim: true
  },
  order_index: {
    type: Number,
    default: 0
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function(content) {
        const contentSchema = contentSchemaMap[this.type];
        if (!contentSchema) return true; // For types without specific schema
        
        try {
          const model = mongoose.model(`${this.type}Content`, contentSchema);
          const doc = new model(content);
          const error = doc.validateSync();
          return !error;
        } catch (err) {
          return false;
        }
      },
      message: 'Invalid content structure for section type'
    }
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
sectionSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Maintain order index uniqueness per page
sectionSchema.index({ page_id: 1, order_index: 1 }, { unique: true });

const Section = mongoose.model('Section', sectionSchema);

module.exports = { Section };