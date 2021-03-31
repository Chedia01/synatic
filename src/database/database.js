// import mongoose from 'mongoose';
// import config from '../config';
require('dotenv').config({ path: '../.env' });
const config = require('../config/index')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log(process.env.URI)
const connection = mongoose.connect(config.database.uri);

connection.then(db => {
  console.log(`Success connection established to MongoDB cluster in ${config.env} mode.`);
  return db;
})
.catch(err => {
  if(err.message.code === 'ETIMEDOUT') {
    console.log("Reestablishing connection");
    mongoose.connect(config.database.uri);
  } else {
    console.log("Error occured while attempting to connect to MongoDB")
    console.log(err);
  }
})

// export default connection
          

