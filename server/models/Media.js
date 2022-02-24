const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const mediaSchema = new Schema({
  title: {
    type: String,
    required: 'title is required'
  },
  description: {
    type: String,
  },
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  updatedAt: {
    type: Date
  }
});

const Media = model('Media', mediaSchema);

module.exports = Media;