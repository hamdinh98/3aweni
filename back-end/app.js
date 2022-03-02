const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/BookApi')
const app = express();

const cors  = require('cors')
// Connect Database
connectDB();
app.use(cors)
app.get('/', (req, res) => res.send('Hello world!'));

app.use(bookRoutes)

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));