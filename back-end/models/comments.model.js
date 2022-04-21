const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
})

module.exports = mongoose.model('Comment', commentsSchema)