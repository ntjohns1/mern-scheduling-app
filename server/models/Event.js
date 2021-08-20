const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// date, content, user
const eventSchema = new Schema({
    year: {
        type: Number,
        required: true, 
    },
    month: {
        type: Number,
        required: true, 
    },
    day: {
        type: Number,
        required: true, 
    },
    hour: {
        type: Number,
        required: true, 
    },
    summary: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    calendar_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
});

const Event = model('Event', eventSchema);
module.exports = Event;