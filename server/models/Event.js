const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// date, content, user
const eventSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

const Event = model('Event', eventSchema);
module.exports = Event;