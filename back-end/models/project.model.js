const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    askedAmount: {
        type: Number,
        required: true
    },

    Founder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }]

},
    {
        timestamps: true,
    }
)



module.exports = Project = mongoose.model('Project', projectSchema);