const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

// Connect Database
connectDB();

// Init Middleware

app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
