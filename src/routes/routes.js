const customers = require('../controllers/customers');
const express = require('express')
const router = express.Router();

router.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });
router.post('/customers', customers.getCustomers)
router.get('/customers', customers.getCustomers)

module.exports = router;
// module.exports = app => {
//   app.route('/test').post(customers.getCustomers);
  // app.route('/customers').get(customers);
  // app.route('/accounts').get(accounts);
  // app.route('/transactions').get(transactions);
  // app.route('/customers').get(customers);
  // app.route('/customers-enriched').get(customers-enriched);
  // app.route('/customers-enriched').post(customers-enriched);
