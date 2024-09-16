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

transactions = [{ // dummy input
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
   id: 2,
   timestamp: 165326076800000,
   price: 188,
   category: 'Food',
   itemName: 'HKirat',
 }]


function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  for (let i = 0; i < transactions.length; i++){
    
    if (categoryTotals[transactions[i].category]) { // if category exists, add it with the previous value
      categoryTotals[transactions[i].category] += transactions[i].price;
    } else { //if category does not exist, create it with the current value
      categoryTotals[transactions[i].category] = transactions[i].price;
    }
  }
  // once a {Food:100} object is obtained, we need to convert it into an array of objects
  return Object.entries(categoryTotals).map(([category, totalSpent]) => ({category, totalSpent}))

}



module.exports = calculateTotalSpentByCategory;
