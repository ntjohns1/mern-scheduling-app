const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: 'You need to leave a message!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  messageAuthor: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Message = model('Message', messageSchema);

module.exports = Message;