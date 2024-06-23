const Reaction = require('./models/Reaction');
const ReactionOccurrence = require('./models/ReactionOccurrence');

// Example: Update ReactionOccurrence based on a new reaction
async function updateReactionOccurrence(userId, allergyId, severity, startDate, endDate) {
    try {
        // Check if ReactionOccurrence exists for the user and allergy
        let occurrence = await ReactionOccurrence.findOne({
            user: userId,
            allergy: allergyId
        });

        if (!occurrence) {
            // Create new ReactionOccurrence if it doesn't exist
            occurrence = new ReactionOccurrence({
                user: userId,
                allergy: allergyId,
                occurrences: [{
                    severity: severity,
                    startDate: startDate,
                    endDate: endDate
                }]
            });
        } else {
            // Add new occurrence to existing ReactionOccurrence
            occurrence.occurrences.push({
                severity: severity,
                startDate: startDate,
                endDate: endDate
            });
        }

        // Save or update ReactionOccurrence
        await occurrence.save();
        console.log('ReactionOccurrence updated successfully:', occurrence);
    } catch (error) {
        console.error('Error updating ReactionOccurrence:', error.message);
    }
}

const createReactionOccurance = (req, res) => {
    // find user document with healthId
    //find allergyId by allergyName
    console.log(req.body);

}

const getReactionOccurance = (req,res)=>{
    // find userId by healthId
    // find allergyId by allergyName
    //return occurances
}

modules.export = {createReactionOccurance, getReactionOccurance}

// Usage example
// const userId = 'user_id_here';
// const allergyId = 'allergy_id_here';
// const severity = 'moderate';
// const startDate = new Date('2024-06-01');
// const endDate = new Date('2024-06-10');
// updateReactionOccurrence(userId, allergyId, severity, startDate, endDate);
