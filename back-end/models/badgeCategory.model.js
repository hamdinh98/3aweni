const mongoose = require ('mongoose');

const badgeCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    minimumAmount:{
        type:Number,
        required:true
    },

    logo:{
        path:String
    }
},
{
    timestamps:true
}
);

module.exports = BadgeCategory = mongoose.model('BadgeCategory',badgeCategorySchema);