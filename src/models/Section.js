const mongoose = require("mongoose");

// Section content schemas for different types
const heroContentSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    ctaText: String,
    ctaLink: {
      pageId: String,
      link: String,
    },
    backgroundColor: String,
    backgroundImage: {
      hide: Boolean,
      src: String,
      alt: String,
    },
  },
  { _id: false }
);

const headingContentSchema = new mongoose.Schema(
  {
    backgroundColor: String,
    backgroundImage: {
      hide: Boolean,
      src: String,
      alt: String,
    },
    level: Number,
  },
  { _id: false }
);

const featuresContentSchema = new mongoose.Schema(
  {
    title: String,
    backgroundColor: String,
    items: [
      {
        title: String,
        description: String,
        icon: String,
      },
    ],
  },
  { _id: false }
);

const testimonialsContentSchema = new mongoose.Schema(
  {
    title: String,
    backgroundColor: String,
    backgroundImage: {
      hide: Boolean,
      src: String,
      alt: String,
    },
    testimonials: [
      {
        quote: String,
        author: String,
        role: String,
        image: String,
        rating: Number,
      },
    ],
  },
  { _id: false }
);

const ctaContentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    buttonText: String,
    buttonLink: {
      pageId: String,
      link: String,
    },
  },
  { _id: false }
);

const staffDirectoryContentSchema = new mongoose.Schema(
  {
    title: String,
    staff: [
      {
        name: String,
        position: String,
        image: String,
      },
    ],
  },
  { _id: false }
);

const calendarContentSchema = new mongoose.Schema(
  {
    title: String,
    events: [
      {
        date: String,
        title: String,
        description: String,
      },
    ],
  },
  { _id: false }
);

const contactContentSchema = new mongoose.Schema(
  {
    text: String,
    src: String,
    alt: String,
    caption: String,
  },
  { _id: false }
);

const coursesContentSchema = new mongoose.Schema(
  {
    title: String,
    courses: [
      {
        name: String,
        description: String,
        image: String,
        video: String,
        price: String,
        duration: String,
        image: String,
      },
    ],
    showAllButton: {
      show: Boolean,
      text: String,
      link: String,
    },
  },
  { _id: false }
);

// products content schema
const allProductsContentSchema = new mongoose.Schema(
  {
    title: String,
    products: [
      {
        name: String,
        description: String,
        image: String,
        video: String,
        price: String,
        duration: String,
        image: String,
      },
    ],
  },
  { _id: false }
);

// carousel content schema
const carouselContentSchema = new mongoose.Schema({
  backgroundColor: String,
  textPostion: {
    type: String,
    enum: ["left", "right"],
    default: "left",
  },
  items: [
    {
      title: String,
      descriptions: [String],
      image: String,

      buttons: [
        {
          text: String,
          link: String,
          pageId: String,
        },
      ],
    },
  ],
});
// contact form content schema
const contactFormContentSchema = new mongoose.Schema({
  backgroundColor: String,
  backgroundImage: {
    hide: Boolean,
    src: String,
    alt: String,
  },
  textPosition: {
    type: String,
    enum: ["left", "right", "center"],
    default: "left",
  },
  image: {
    hide: Boolean,
    src: String,
    alt: String,
  },
  title: String,
  address: String,
  email: String,
  phone: String,
  description: String,
  buttonText: String,
  buttonLink: {
    pageId: String,
    link: String,
  },
});

// video content schema
const videoContentSchema = new mongoose.Schema({
  backgroundColor: String,
  backgroundImage: {
    hide: Boolean,
    src: String,
    alt: String,
  },
  title: String,
  description: String,

  textPosition: {
    type: String,
    enum: ["left", "right", "center"],
    default: "left",
  },
  video: String,
});

// Map section types to their content schemas
const contentSchemaMap = {
  hero: heroContentSchema,
  heading: headingContentSchema,
  features: featuresContentSchema,
  testimonials: testimonialsContentSchema,
  cta: ctaContentSchema,
  staff_directory: staffDirectoryContentSchema,
  calendar: calendarContentSchema,
  contact: contactContentSchema,
  courses: coursesContentSchema,
  products: coursesContentSchema,
  carousel: carouselContentSchema,
  allProducts: allProductsContentSchema,
  contact_form: contactFormContentSchema,
  video: videoContentSchema,
};

const sectionSchema = new mongoose.Schema({
  page_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "hero",
      "heading",
      "paragraph",
      "features",
      "testimonials",
      "cta",
      "staff_directory",
      "calendar",
      "contact",
      "image",
      "gallery",
      "video",
      "faq",
      "Header",
      "Hero",
      "contact_form",
      "news",
      "signin",
      "signup",
      "courses",
      "products",
      "carousel",
      "allProducts",
    ],
  },
  label: {
    type: String,
    trim: true,
  },
  order_index: {
    type: Number,
    default: 0,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function (content) {
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
      message: "Invalid content structure for section type",
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
sectionSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

// Maintain order index uniqueness per page
sectionSchema.index({ page_id: 1, order_index: 1 }, { unique: true });

const Section = mongoose.model("Section", sectionSchema);

module.exports = { Section };
