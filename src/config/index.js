require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV || 'development',
  axios : {
    baseURL: process.env.BASE_URL,
    username: process.env.PASSWORD,
    password: process.env.USERNAME,
  },
  database: {
    uri: process.env.URI
  }
}