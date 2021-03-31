const { customers, transactions, postEnrichedCustomers, accounts } = require("../services/services.js");

// exports.getList = (req, res) => {
//   customerEmailList(
//     console.log('customers')
//   )
// }

getCustomers = (req, res) => {
  var emailList = req.body;
  var customerList = {};
  var customerListEnriched = {};

  customers()
    .then((res) => {
      const data = res.data.map((result) => {
        customerList = result.filter((value) => emailList.includes(value.email))
        console.log(customerList)
        return customerList;
      });
      //console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  transactions()
  .then((res) => {
    const data = res.data.map((result) => {
      customerListEnriched = result.filter((value) => customerList.includes(value.account))
      console.log(customerList)
      return customerListEnriched;
    });
    //console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  createEnrichedCustomer = (req,res) => {
    var customerList = {};
    var accountsList = {};
    var accountsTransactionsList = {};
    var enrichedCustomers = {};

    accounts()
    .then((res) => {
      const data = res.data.map((result) => {
        accountsList = result
        return accountsList;
      });
    })
    .catch((err) => {
      console.log(err);
    });

    //merge account and transactions
    transactions()
    .then((res) => {
      const data = res.data.map((result) => {
        accountsList = result
        return accountsList;
      });
    })
    .catch((err) => {
      console.log(err);
    });

    //merge customers with accountsTransactionsList
    customers()
      .then((res) => {
        const data = res.data.map((result) => {
          customerList = result.filter((value) => emailList.includes(value.email))
          console.log(customerList)
          return enrichedCustomers;
        });
        //console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

      //accountsTransactionsList needs to be posted

      //accountsTransactionsList needs to be sent to mongodb
    }
};

//getCustomers()

module.exports = { getCustomers };
