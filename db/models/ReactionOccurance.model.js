// models/ReactionOccurrence.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for reaction occurrence
const reactionOccurrenceSchema = new Schema({
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
    occurrences: [{
        severity: {
            type: String,
            enum: ['mild', 'moderate', 'severe'],
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    }]
});

// Create a model based on the schema
const ReactionOccurrence = mongoose.model('ReactionOccurrence', reactionOccurrenceSchema);

module.exports = ReactionOccurrence;
