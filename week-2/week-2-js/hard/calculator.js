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

class Calculator {
  constructor() {
    this.result = 0; // Initialize result variable
  }

  // Adds the provided number to the result
  add(number) {
    this.result += number;
  }

  // Subtracts the provided number from the result
  subtract(number) {
    this.result -= number;
  }

  // Multiplies the result by the provided number
  multiply(number) {
    this.result *= number;
  }

  // Divides the result by the provided number
  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero"); // Handling division by zero
    }
    this.result /= number;
  }

  // Resets the result to 0
  clear() {
    this.result = 0;
  }

  // Returns the current value of result
  getResult() {
    return this.result;
  }

  // Evaluates a string expression containing arithmetic operations
  calculate(expression) {
    try {
      // Remove spaces from the expression and validate it
      let sanitizedExpression = expression.replace(/\s+/g, '');

      // Check if the expression contains only valid characters (numbers and arithmetic operators)
      if (!/^[0-9+\-*/().]+$/.test(sanitizedExpression)) {
        throw new Error("Invalid expression");
      }

      // Check for division by zero by using a regular expression
      if (/\/0(?![0-9])/.test(sanitizedExpression)) {
        throw new Error("Cannot divide by zero");
      }

      // Evaluate the expression and update the result
      this.result = eval(sanitizedExpression);

      // if (this.result === Infinity || this.result === -Infinity) {
      //   throw new Error("Cannot divide by zero");
      // }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

// // Example Usage
// const calc = new Calculator();

// calc.add(10);               // Adds 10 to the result (result = 10)
// calc.subtract(3);           // Subtracts 3 (result = 7)
// calc.multiply(4);           // Multiplies by 4 (result = 28)
// calc.divide(2);             // Divides by 2 (result = 14)
// console.log(calc.getResult());  // Outputs 14

// calc.clear();               // Resets result to 0
// calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
// console.log(calc.getResult());  // Outputs the result of the expression


module.exports = Calculator;
