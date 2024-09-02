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


function isCategoryExists(transaction,output){
	for(const element of output){
		if(transaction.category == element.category)
			return true;
	}
	return false;
}

function calculateTotalSpentByCategory(transactions) {
	let output = [];
	for(const transaction of transactions){
		if(output.length == 0 || !isCategoryExists(transaction,output)){
			output.push({
				category: transaction.category,
				totalSpent: transaction.price
			});
		}
		else{
			for(const element of output){
				if(element.category == transaction.category){
					element.totalSpent += transaction.price;
				}
			}
		}
	}
	return output;
}

module.exports = calculateTotalSpentByCategory;
