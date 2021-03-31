const customerEmailList = require('../services/services.js').customerEmailList;

exports.getList = (req, res) => {
  customerEmailList(
    console.log('customers')
  )
}