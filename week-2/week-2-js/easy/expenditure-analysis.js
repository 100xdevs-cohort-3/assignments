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
  const categories = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (!categories[category]) {
      categories[category] = 0;
    }

    categories[category] += price;
  }

  const result = [];

  for (const category in categories) {
    result.push({ category: category, totalSpent: categories[category] });
  }
  console.log(result);
  return result;
}

module.exports = calculateTotalSpentByCategory;
