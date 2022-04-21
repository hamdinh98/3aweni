const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    enable: {
        type: Number,
        default: 1
    },

    askedAmount: {
        type: Number,
        required: true
    },

    Founder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
    hasLedger: { type: mongoose.Schema.Types.ObjectId, ref: 'LedgerBook' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

},
    {
        timestamps: true,
    }
)



module.exports = Project = mongoose.model('Project', projectSchema);