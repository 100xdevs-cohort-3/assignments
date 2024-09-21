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
  const map = new Map();
  const ans = [];
  transactions.forEach((element) => {
    if(!map.has(element.category)){
       map.set(element.category, ans.length)
       ans.push({
          category : element.category,
          totalSpent : element.price
       })
    }
    else{
        let idx = map.get(element.category)
        ans[idx]['totalSpent'] += element.price
    }
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
