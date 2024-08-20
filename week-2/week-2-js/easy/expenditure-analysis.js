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

  //Initializing empty to accumulate unique categories
  const uniqueCategories = {};

  //Iterating through given transactions array and accumulate the total price spent for each category
  transactions.forEach((transaction)=>{
    if (uniqueCategories[transaction.category]){
      uniqueCategories[transaction.category] += transaction.price;
    }else{
      uniqueCategories[transaction.category] = transaction.price
    }
  })

  //Getting the keys of unique categories objects
  const uniqueCategories_Keys =  Object.keys(uniqueCategories);


  //Returning the unique categories and total price spent for each category
  return uniqueCategories_Keys.map((key) => {
    return {
      category: key,
      totalSpent: uniqueCategories[key]
    }
  });
}

module.exports = calculateTotalSpentByCategory;
