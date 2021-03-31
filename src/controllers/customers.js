const { customers } = require('../services/services.js');

// exports.getList = (req, res) => {
//   customerEmailList(
//     console.log('customers')
//   )
// }

getCustomers = (req, res) => {
  // var emailList = req.body.email
  // console.log(emailList)
  customers()
  
  // var enrichedCustomerData
}

//getCustomers()

module.exports = { getCustomers }