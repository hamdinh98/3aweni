const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    creationDate: {
        type: Date,
        default: new Date()
    },

    askedAmount: {
        type: Number,
        default: 0
    },

    Founder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

},
    {
        timestamps: true,
    }
)

/*const Project = mongoose.model('Project',projectSchema);
export default Project;*/

module.exports = Project = mongoose.model('Project', projectSchema);