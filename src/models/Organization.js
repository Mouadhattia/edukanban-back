const mongoose = require('mongoose');


const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  SUSPENDED:'suspended'
}

const organizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  organizationWebsite: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[\/\w\-]*$/i.test(v);
      },
      message: props => `${props.value} is not a valid website URL!`
    }
  },
  status:{
    type: String,
    enum: Object.values(STATUS),
    default: STATUS.PENDING
  },
  organizationType: {
    type: String,
    required: true,
    trim: true
  },
  primarySubjectAreas: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = { Organization };