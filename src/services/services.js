// // import axios from 'axios';
// import { config } from 'dotenv/types';
require('dotenv').config({ path: '../.env' });
const config = require('../config/index')
const axios = require('axios');


async function customerEmailList() {
  return axios({
          baseURL: "https://rest.synatic.com/thiren/interview" + "/customers",
          auth: {
            username: "chedia",
            password: "rXiQlEe9hW4zls1SL2ScfGG8qZaOf2N2Ut5L27iphV7XFwnvxRcmsVkxZ4DKW"
          },
          method: 'GET',
        })
        .then(res => {
                const data = res.data.map(result => {
                  return result.email
                });
                console.log(data)
              })
                .catch(err => {
                        console.log(err);
                      });
}
// module.exports.customerEmailList = () => {
//   console.log('services')
//   return new Promise((resolve, reject) => {
//     return axios({
//       baseURL: config.axios.baseURL + "/customers",
//       auth: {
//         username: config.axios.username,
//         password: config.axios.password
//       },
//       method: 'GET',
//     })
//     .then(res => {
//       const data = res.data.results.map(result => {
//         return result.email
//       });
//       resolve(data);
//       console.log(data)
//     })
//     .catch(err => {
//       reject(err);
//     });
//   });
// }

customerEmailList();
