const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
    }
)



module.exports = Category = mongoose.model('Category', categorieSchema);