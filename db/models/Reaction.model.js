// models/Reaction.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for the reaction collection
const reactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    allergy: {
        type: Schema.Types.ObjectId,
        ref: 'Allergy',
        required: true
    },
    reactionType: {
        type: String,
        enum: ['mild', 'moderate', 'severe'],
        required: true
    },
    reactionDate: {
        type: Date,
        default: Date.now
    },
    seasonal: {
        type: Boolean,
        default: false
    },
    seasons: [{
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }],
    timeSensitive: {
        type: Boolean,
        default: false
    },
    startTime: Date,
    endTime: Date,
    notes: String
});

// Create a model based on the schema
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
