const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  region: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'pending', 'suspended'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
standardSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Standard = mongoose.model('Standard', standardSchema);

module.exports = { Standard };