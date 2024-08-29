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
  const result = [];

  transactions.forEach(transaction => {
    // Find if the category already exists in the result array
    const existingCategory = result.find(item => item.category === transaction.category);
    
    if (existingCategory) {
      // If the category exists, update the totalSpent
      existingCategory.totalSpent += transaction.price;
    } else {
      // If the category does not exist, add a new entry
      result.push({
        category: transaction.category,
        totalSpent: transaction.price
      });
    }
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
