const express = require('express');
const router = express.Router();
const reactionController = require('../controllers/reaction.controller')


// POST request to create a new reaction
router.post('/', reactionController.createReaction);

// GET request to fetch all reactions
router.get('/', reactionController.getAllReactions);

// GET request to fetch a single reaction by ID
router.get('/:reactionId', reactionController.getReactionById);

// PUT request to update a reaction by ID
router.put('/:reactionId', reactionController.updateReaction);

// DELETE request to delete a reaction by ID
router.delete('/:reactionId', reactionController.deleteReaction);

module.exports = router