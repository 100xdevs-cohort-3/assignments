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
    output = [...output, {
      category: transactions[i].category,
      price: transactions[i].price
    }]
  }

  return output;
}

console.log(calculateTotalSpentByCategory([{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza'
},

{
  id: 2,
  timestamp: 1656076800000,
  price: 100,
  category: 'Stationary',
  itemName: 'Books'
},

{
  id: 3,
  timestamp: 1656076800000,
  price: 103,
  category: 'Travel',
  itemName: 'Petrol'
}
]))


module.exports = calculateTotalSpentByCategory;
