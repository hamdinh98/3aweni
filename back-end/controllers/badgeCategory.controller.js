const badgeCategory = require('../models/badgeCategory.model')

const getBadgeCategory = (req,res) =>{
    res.send('badges category works!');
}

module.exports = {getBadgeCategory}