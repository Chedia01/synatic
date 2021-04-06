// // import axios from 'axios';
// import { config } from 'dotenv/types';
require('dotenv').config({ path: '../../.env' });
const config = require('../config/index')
const axios = require('axios');

//axios functions to retrieve api data

async function customers() {
  return axios({
          baseURL: process.env.BASE_URL + "/customers",
          auth: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
          },
          method: 'GET',
        })
        .then(res => {
                return res
              })
                .catch(err => {
                        console.log(err);
                      });
};

async function getCustomersByEmail(emailList) {
  customers()
    .then((results) => {
        results.data.map((result) => {
        
        if(emailList.includes(result.email)){
          customerList.push(result)
        }
      });
      console.log(customerList);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function accounts() {
  return axios({
          baseURL: process.env.BASE_URL + "/accounts",
          auth: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
          },
          method: 'GET',
        })
        .then(res => {
                const data = res.data.map(result => {
                  console.log(result)
                  return result
                });
                
              })
                .catch(err => {
                        console.log(err);
                      });
}

async function transactions() {
  return axios({
          baseURL: process.env.BASE_URL + "/transactions",
          auth: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
          },
          method: 'GET',
        })
        .then(res => {
                const data = res.data.map(result => {
                  console.log(result)
                  return result
                });
                
              })
                .catch(err => {
                        console.log(err);
                      });
}

async function getEnrichedCustomers() {
  return axios({
          baseURL: process.env.BASE_URL + "/enriched-customers",
          auth: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
          },
          method: 'GET',
        })
        .then(res => {
                const data = res.data.map(result => {
                  console.log(result)
                  return result
                });
                
              })
                .catch(err => {
                        console.log(err);
                      });
}

async function postEnrichedCustomers() {
  return axios({
          baseURL: process.env.BASE_URL + "/enriched-customers",
          auth: {
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD
          },
          method: 'GET',
        })
        .then(res => {
                const data = res.data.map(result => {
                  console.log(result)
                  return result
                });
                
              })
                .catch(err => {
                        console.log(err);
                      });
}

module.exports = { customers, getCustomersByEmail, accounts, transactions, getEnrichedCustomers, postEnrichedCustomers}











// async function customerEmailList() {
//   return axios({
//           baseURL: "https://rest.synatic.com/thiren/interview" + "/customers",
//           auth: {
//             username: "chedia",
//             password: "rXiQlEe9hW4zls1SL2ScfGG8qZaOf2N2Ut5L27iphV7XFwnvxRcmsVkxZ4DKW"
//           },
//           method: 'GET',
//         })
//         .then(res => {
//                 const data = res.data.map(result => {
//                   return result.email
//                 });
//                 console.log(data)
//               })
//                 .catch(err => {
//                         console.log(err);
//                       });
// }
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

// customerEmailList();
