const customers = require('../controllers/customers');
const router = express.Router();
const express = require('express')

router.get('/', function(req, res, next) {
 console.log("HI THERE")
});
router.post('/customers', customers.getCustomers)
router.get('/customers', customers.getCustomers)

module.exports = router;
// module.exports = app => {
//   app.route('/customers').post(customers.getCustomers);
//   // app.route('/customers').get(customers);
//   // app.route('/accounts').get(accounts);
//   // app.route('/transactions').get(transactions);
//   // app.route('/customers').get(customers);
//   // app.route('/customers-enriched').get(customers-enriched);
//   // app.route('/customers-enriched').post(customers-enriched);
// }