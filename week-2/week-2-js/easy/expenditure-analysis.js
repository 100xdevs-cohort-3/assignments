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
  const categories = new Map();
  for (const transaction of transactions) {
    if (!categories.has(transaction.category)) {
      categories.set(transaction.category, transaction.price);
    } else {
      const price = categories.get(transaction.category) + transaction.price;
      categories.set(transaction.category, price);
    }
  }
  const ans = [];
  categories.forEach((value, key) => {
    ans.push({ category: key, totalSpent: value });
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
