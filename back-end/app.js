const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
const cors = require('cors')
const app = express();
const passport = require('passport')
const logger = require('morgan')
// Connect Database
connectDB();
//config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))



app.use(userRoute);
app.use(passport.initialize())
require('./security/passport')(passport)
require('./security/google_oauth')(passport)
// parse application/json
app.get('/', (req, res) => res.send('Hello world!'));

// app.use(bookRoutes)

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));