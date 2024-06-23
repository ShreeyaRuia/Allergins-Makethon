const Reaction = require('../db/models/Reaction.model');


const createReaction = (req, res) => {

    const newReaction = new Reaction(req.body);

    newReaction.save()
        .then(savedReaction => {
            res.status(201).json(savedReaction);
        })
        .catch(error => {
            console.error('Error saving reaction:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const getAllReactions = (req, res) => {
    Reaction.find()
        .then(reactions => {
            res.json(reactions);
        })
        .catch(error => {
            console.error('Error fetching reactions:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const getReactionById = (req, res) => {
    const reactionId = req.params.reactionId;

    Reaction.findById(reactionId)
        .then(reaction => {
            if (!reaction) {
                return res.status(404).json({ error: 'Reaction not found' });
            }
            res.json(reaction);
        })
        .catch(error => {
            console.error('Error fetching reaction by ID:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const updateReaction = (req, res) => {
    const reactionId = req.params.reactionId;
    const updates = req.body;

    Reaction.findByIdAndUpdate(reactionId, updates, { new: true })
        .then(updatedReaction => {
            if (!updatedReaction) {
                return res.status(404).json({ error: 'Reaction not found' });
            }
            res.json(updatedReaction);
        })
        .catch(error => {
            console.error('Error updating reaction:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

const deleteReaction = (req, res) => {
    const reactionId = req.params.reactionId;

    Reaction.findByIdAndDelete(reactionId)
        .then(deletedReaction => {
            if (!deletedReaction) {
                return res.status(404).json({ error: 'Reaction not found' });
            }
            res.json({ message: 'Reaction deleted successfully' });
        })
        .catch(error => {
            console.error('Error deleting reaction:', error.message);
            res.status(500).json({ error: 'Server error' });
        });
};

module.exports = { getAllReactions, getReactionById , updateReaction, deleteReaction, createReaction}