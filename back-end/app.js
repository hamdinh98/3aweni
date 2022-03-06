const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
const cors = require('cors')
const app = express();
// Connect Database
connectDB();
//config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(userRoute);

// parse application/json
app.get('/', (req, res) => res.send('Hello world!'));

// app.use(bookRoutes)

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));