// controllers/allergyController.js
const Allergy = require('../db/models/Allergy.model');

// Controller functions for CRUD operations on Allergy
const createAllergy = (req, res) => {

    const newAllergy = new Allergy(req.body);

    newAllergy.save()
        .then(savedAllergy => {
            res.status(201).json(savedAllergy);
        })
        .catch(error => {
            console.error('Error saving allergy:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const getAllAllergies = (req, res) => {
    Allergy.find()
        .then(allergies => {
            res.json(allergies);
        })
        .catch(error => {
            console.error('Error fetching allergies:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const getAllergyById = (req, res) => {
    const allergyId = req.params.allergyId;

    Allergy.findById(allergyId)
        .then(allergy => {
            if (!allergy) {
                return res.status(404).json({ error: 'Allergy not found' });
            }
            res.json(allergy);
        })
        .catch(error => {
            console.error('Error fetching allergy by ID:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const updateAllergy = (req, res) => {
    const allergyId = req.params.allergyId;
    const updates = req.body;

    Allergy.findByIdAndUpdate(allergyId, updates, { new: true })
        .then(updatedAllergy => {
            if (!updatedAllergy) {
                return res.status(404).json({ error: 'Allergy not found' });
            }
            res.json(updatedAllergy);
        })
        .catch(error => {
            console.error('Error updating allergy:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const deleteAllergy = (req, res) => { 
    const allergyId = req.params.allergyId;

    Allergy.findByIdAndDelete(allergyId)
        .then(deletedAllergy => {
            if (!deletedAllergy) {
                return res.status(404).json({ error: 'Allergy not found' });
            }
            res.json({ message: 'Allergy deleted successfully' });
        })
        .catch(error => {
            console.error('Error deleting allergy:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

module.exports = {createAllergy, updateAllergy, getAllAllergies, getAllergyById, deleteAllergy}