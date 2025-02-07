/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let output = [];
  
  for(i = 0; i < transactions.length; i++){

    const isIndex = output.findIndex(domain => domain.category === transactions[i].category)

    if(isIndex != -1){
      output[isIndex].totalSpent += transactions[i].price;
    }
    else{
      output.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price
      })
    }
  }

  return output;
}


module.exports = calculateTotalSpentByCategory;
