const express = require('express');
const router = express.Router();
const reactionOccuranceController = require('../controllers/reactionOccurance.controller')


router.get('/:healthId',reactionOccuranceController.getReactionOccurance )

router.post('/', reactionOccuranceController.createReactionOccurance)

module.exports = router