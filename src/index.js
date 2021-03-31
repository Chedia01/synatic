const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//db connection
require('./database/database');

//routes

//listen 
app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;