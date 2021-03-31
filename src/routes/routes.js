const customers = require('../controllers/customers');

module.exports = app => {
  app.route('/customers').get(customers.getList);
}