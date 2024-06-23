const express = require('express')
const User = require('../db/models/User.model');

const createUser = (req, res) => {

    console.log(req.body);
    const userData = new User(req.body);

    userData.save()
        .then((result) => {
            res.send({ user: result, message: "User Created", status: 200 })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send({ message: "User not created", status: 400 })
        })
}


const getUser = (req, res) => {
    const healthIdParam = req.params.healthId;
    User.findOne({ healthid: healthIdParam })
        .then(user => {
            if (user) {
                console.log('User found:', user);
                res.status(200).send(user);
            } else {
                res.status(400).send({ message: "User not found", status: 400 })
                console.log('User not found');
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Internal Error", status: 500 })
            console.error('Error finding user:', err);
        });
}

const updateUser = (req, res) => {
    const userId = req.params.userId;
    const updates = req.body; // Data to update

    // Find user by ID and update
    User.findByIdAndUpdate(userId, updates, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(updatedUser); // Send updated user object as response
        })
        .catch(error => {
            console.error('Error updating user:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const deleteUser = (req, res) => {
    const userId = req.params.userId;

    // Find user by ID and delete
    User.findByIdAndDelete(userId)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        })
        .catch(error => {
            console.error('Error deleting user:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

module.exports = { createUser, getUser, updateUser, deleteUser }