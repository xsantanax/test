var invalidTransactions = function (transactions) {
  var invalid = [];
  for (var i = 0; i < transactions.length; i++) {
    console.log(transactions[i]);
    var transaction = transactions[i];
    if (transaction.amount < 0) {
      invalid.push(transaction);
    }
  }
  return invalid;
};

let transactions = ["alice,20,800,mtv", "alice,50,1200,mtv"];
invalidTransactions(transactions);
