/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
const math = require("mathjs");

class Calculator {
  constructor(result) {
    this.result = result;
  }

  add(value) {
    this.result = this.result + value;
  }

  subtract(value) {
    this.result = this.result - value;
  }

  multiply(value) {
    this.result = this.result * value;
  }

  divide(value) {
    if (value === 0 || !value) throw new Error("Division not possible");
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    console.log(`The final result is: ${this.result}`);
  }

  calculate(str) {
    try {
      return math.evaluate(str);
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return null;
    }
  }
}

const result = new Calculator().calculate("2 * (3 + 4) - 5");
console.log(result);

module.exports = Calculator;
