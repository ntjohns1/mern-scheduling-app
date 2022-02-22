const { Schema, model } = require('mongoose');
const addressSchema = new Schema({
    street1: {
        type: String,
        required: false,
      },
    street2: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    zip: {
        type: String,
        required: false,
    },
    phone1: {
        type: String,
        required: false,
    },
    phone2: {
        type: String,
        required: false,
    },
    parentGuardian1: {
        type: String,
        required: false,
    },
    parentGuardian2: {
        type: String,
        required: false,
    },
});

const Address = model('Address', addressSchema);
module.exports = Address;