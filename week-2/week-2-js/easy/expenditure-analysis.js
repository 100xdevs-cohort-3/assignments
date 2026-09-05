// Map preserves the order in which categories first appear.
function calculateTotalSpentByCategory(transactions) {
  const totals = new Map();
  for (const { category, price } of transactions) {
    totals.set(category, (totals.get(category) ?? 0) + price);
  }
  return Array.from(totals, ([category, totalSpent]) => ({ category, totalSpent }));
}
module.exports = calculateTotalSpentByCategory;
