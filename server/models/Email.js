const { Schema, model } = require('mongoose');


const emailSchema = new Schema({
  email: {
    type: String,
    required: false,
    trim: true,
  },
  senderName: {
    type: String,
    required: false,
    trim: true,
  },
  subject: {
    type: String,
    required: false,
    trim: true,
  },
  text: {
    type: String,
    required: false,
    trim: true,
  },
});

const Email = model('Email', emailSchema);

module.exports = Email;