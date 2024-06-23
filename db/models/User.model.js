const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the user collection
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    healthid: {
        type: String,
        required: true,
        unique: true  // Assuming health IDs are unique
    },
    address: {
        pincode: String,
        state: String,
        country: String,
        city: String,
        location: String
    },
    profilephoto: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);
module.exports = User;