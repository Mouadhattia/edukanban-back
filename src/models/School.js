const mongoose = require('mongoose');

const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  SUSPENDED:'suspended'
}
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
  },
  status:{
    type: String,
    enum: Object.values(STATUS),
    default: STATUS.PENDING
  },
  schoolWebsite: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true
});

const School = mongoose.model('School', schoolSchema);

module.exports = { School };