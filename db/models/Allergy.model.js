const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for the allergy collection
const allergySchema = new Schema({
    allergyid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['food', 'environmental', 'medication', 'other'],
        required: true
    }
});

// Create a model based on the schema
const Allergy = mongoose.model('Allergy', allergySchema);

module.exports = Allergy;