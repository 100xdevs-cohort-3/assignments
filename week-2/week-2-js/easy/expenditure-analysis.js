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
//Brute force
/* function calculateTotalSpentByCategory(transactions) {
	let totalSpent = []
	for (const transaction of transactions) {
		let flag = true;
		for(const category of totalSpent){
			if (transaction.category === category.category){
				category.totalSpent += transaction.price
				flag = false
			}
		}
		if (flag){
			const newCategory = {
				category: transaction.category,
				totalSpent: transaction.price
			}
			totalSpent.push(newCategory);
		}
	}
  	return totalSpent;
} */

//Optimized
function calculateTotalSpentByCategory(transactions){
	const categoryTotals = {}
	for(const transaction of transactions){
		categoryTotals[transaction.category] = (categoryTotals[transaction.category] || 0) + transaction.price
	}
	const result = [];
	for(const category in categoryTotals){
		result.push({
			category: category,
			totalSpent: categoryTotals[category]
		})
	}
	return result
}

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 149,
        category: "Food",
        itemName: "Dinner",
    },
    {
        id: 2,
        timestamp: 1656076800000,
        price: 110,
        category: "Food",
        itemName: "Lunch",
    },
    {
        id: 3,
        timestamp: 1656076800000,
        price: 459,
        category: "Entertainment",
        itemName: "Movie",
    },
    {
        id: 4,
        timestamp: 1656076800000,
        price: 30,
        category: "Food",
        itemName: "Snacks",
    },
    {
        id: 5,
        timestamp: 1656076800000,
        price: 20,
        category: "Transport",
        itemName: "Train",
    },
    {
        id: 6,
        timestamp: 1656076800000,
        price: 200,
        category: "Food",
        itemName: "Dinner",
    },
    {
        id: 7,
        timestamp: 1656076800000,
        price: 50,
        category: "Food",
        itemName: "Lunch",
    },
    {
        id: 8,
        timestamp: 1656076800000,
        price: 340,
        category: "Food",
        itemName: "Pizza",
    },
    {
        id: 9,
        timestamp: 1656076800000,
        price: 200,
        category: "Entertainment",
        itemName: "Movie",
    },
    {
        id: 10,
        timestamp: 1656076800000,
        price: 15,
        category: "Transport",
        itemName: "Train",
    },
    {
        id: 11,
        timestamp: 1656076800000,
        price: 15,
        category: "Transport",
        itemName: "Bus",
    },
    {
        id: 12,
        timestamp: 1656076800000,
        price: 249,
        category: "Entertainment",
        itemName: "Netflix",
    },
    {
        id: 13,
        timestamp: 1656076800000,
        price: 30,
        category: "Transport",
        itemName: "Auto",
    },
    {
        id: 14,
        timestamp: 1656076800000,
        price: 100,
        category: "Food",
        itemName: "Momos",
    },
];
console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
