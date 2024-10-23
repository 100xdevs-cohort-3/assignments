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

function calculateTotalSpentByCategory(transactions = []) {
  let obj = new Map()
  transactions.map((dat) => {
    if (!obj.has(dat.category)) {
      obj.set(dat.category, dat.price)
    } else {
      const price = obj.get(dat.category) + dat.price
      obj.set(dat.category, price)
    }
  })
  let res = []
  obj.forEach((value, key) => {
    res.push({ category: key, totalSpent: value })
  })
  console.log(res)
  return res

}

let res = calculateTotalSpentByCategory( [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
])
console.log(res);

module.exports = calculateTotalSpentByCategory;
