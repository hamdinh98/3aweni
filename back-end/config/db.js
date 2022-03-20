const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
// ajouter url de DB dans le fichier .env que vous devez créer 
const dbURL = process.env.DB_URL

const connectDB = async () => {
    // console.log(dbURL);
    try {
        await mongoose.connect(
            dbURL,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};



module.exports = connectDB;