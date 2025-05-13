const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  schoolDistrict: {
    type: String,
    required: true,
    trim: true
  },
  schoolType: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const School = mongoose.model('School', schoolSchema);

module.exports = { School };