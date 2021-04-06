const services = require("../services/service.js");

async function getCustomersByEmail(emailList) {
    var customerList = []
    var customerListEnriched = []
    var accountsList = []
    var accountsIdListArray = []
    var accountsIdList = []
    services.customers()
      .then((results) => {
          results.data.map((result) => {
          
          if(emailList.includes(result.email)){
            customerList.push(result)
          }
        });

       
        customerList.map(item => {
            accountsIdListArray.push(item.accounts)
            let accountsIdListTemp = [].concat(...accountsIdListArray)
            accountsIdList = accountsIdListTemp
            return accountsIdList
        });
        

        //console.log(customerList)
      // console.log(accountsList)
     // return accountsList
        //console.log(customerList[0].accounts);

        services.accounts()
        .then((accountsResults) => {
          //console.log(accountsIdList)
            accountsResults.data.map((accountsResult) => {
                
                // for (let i=0; i<accountsList.length; i++) {
                //     for(let j=0; j<result.length; j++) {
                //         if(accountsList.includes(result.))
                //     }
                // }
                
                // accountsList.push(accountsResult.account_id)
                //console.log(accountsIdList)
                if(accountsIdList.includes(accountsResult.account_id)){
                  console.log("true")
                  accountsList.push(accountsResult)
                }
                console.log(accountsList)
              });
        })
        .catch((err) => {
            console.log(err);
          });
              
      })
      .catch((err) => {
        console.log(err);
      });

      //console.log(accountsList)
      // services.accounts()
      //   .then((accountsResults) => {
      //       accountsResults.data.map((accountsResult) => {
                
      //           // for (let i=0; i<accountsList.length; i++) {
      //           //     for(let j=0; j<result.length; j++) {
      //           //         if(accountsList.includes(result.))
      //           //     }
      //           // }
      //           // console.log(accountsIdList)
      //           accountsList.push(accountsResult.account_id)
      //           // console.log(accountsList)
      //           if(accountsIdList.includes(accountsResult.account_id)){
      //             console.log("true")
      //             accountsList.push(accountsResult)
      //           }
      //           // console.log(accountsList)
      //         });
      //   })
      //   .catch((err) => {
      //       console.log(err);
      //     });

  }

//   async function getCustomersEnrichedWithAccounts(customerList) {
//       var customerListEnriched = []
//       var accountsList = customerList.map(item => {
//         return item.accounts
//       });
//       console.log(customerList)
//       console.log(accountsList)
//   }

module.exports = { getCustomersByEmail }