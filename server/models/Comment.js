const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// date, content, user
const commentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;
