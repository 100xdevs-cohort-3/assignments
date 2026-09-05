function findLargestElement(numbers) {
  if (numbers.length === 0) return undefined;
  let largest = -Infinity;
  for (const number of numbers) if (number > largest) largest = number;
  return largest;
}
module.exports = findLargestElement;
