
function calculateTotalSpentByCategory(transactions) {
    const categoryTotalMap = {};
    transactions.forEach((transaction) => {
      const { category, price } = transaction;
      if (category in categoryTotalMap) {
        categoryTotalMap[category] += price;
      } else {
        categoryTotalMap[category] = price;
      }
    });
    const result = [];
    for (const category in categoryTotalMap) {
      result.push({ category, totalSpent: categoryTotalMap[category] });
    }
    return result;
  }
  
  module.exports = calculateTotalSpentByCategory;