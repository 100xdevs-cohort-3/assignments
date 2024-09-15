function findLargestElement(numbers) {
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max)
        max = numbers[i];
    }
 // console.log(max)
    return max;
  }
  //console.log(findLargestElement([-4,-5,-6,-8]));
module.exports = findLargestElement;