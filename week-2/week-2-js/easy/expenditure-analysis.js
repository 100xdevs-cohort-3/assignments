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
  const totals = {};
  for (const transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;

    if (!totals[category]) {
      totals[category] = 0;
    }

    totals[category] += price;
  }

  const ans = [];
  for (let key in totals) {
    ans.push({
      category: key,
      totalSpent: totals[key],
    },);
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
