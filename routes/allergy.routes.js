// routes/allergy.js
const express = require('express');
const router = express.Router();
const AllergyController = require('../controllers/allergy.controller');

// POST request to create a new allergy
router.post('/', AllergyController.createAllergy);

// GET request to fetch all allergies
router.get('/', AllergyController.getAllAllergies);

// GET request to fetch a single allergy by ID
router.get('/:allergyId', AllergyController.getAllergyById);

// PUT request to update an allergy by ID
router.put('/:allergyId', AllergyController.updateAllergy);

// DELETE request to delete an allergy by ID
router.delete('/:allergyId', AllergyController.deleteAllergy);

module.exports = router;
