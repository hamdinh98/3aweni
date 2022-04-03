const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const projectRoute = require('./routes/project.route');
const badgeCategoryRoute = require('./routes/badgeCategory.route');
const ledgerBookRoute = require ('./routes/LedgerBook.route');
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
app.use(projectRoute);
app.use(badgeCategoryRoute);
app.use(ledgerBookRoute);
require('./security/passport')(passport)
require('./security/google_oauth')(passport)
// parse application/json
app.get('/', (req, res) => res.send('Hello world!'));







app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));