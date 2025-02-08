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
    this.result = 0; // Initialize the result variable
  }

  add(number) {
    this.result += number;
    return this; // Return `this` for method chaining
  }

  subtract(number) {
    this.result -= number;
    return this; // Return `this` for method chaining
  }

  multiply(number) {
    this.result *= number;
    return this; // Return `this` for method chaining
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero"); // Handle division by zero
    }
    this.result /= number;
    return this; // Return `this` for method chaining
  }

  clear() {
    this.result = 0; // Reset the result to 0
    return this; // Return `this` for method chaining
  }

  getResult() {
    return this.result; // Return the current value of result
  }

  calculate(expression) {
    try {
      // Remove all spaces and validate the expression for invalid characters
      const cleanedExpression = expression.replace(/\s+/g, "");

      if (/[^0-9+\-*/().]/.test(cleanedExpression)) {
        throw new Error("Invalid characters in expression");
      }

      // Evaluate the cleaned expression
      this.result = Function(`'use strict'; return (${cleanedExpression})`)();
      if (this.result === Infinity || this.result === -Infinity) {
        throw new Error("Cannot divide by zero");
      }
    } catch (error) {
      this.result = "Error";
    }
  }
}

const calc = new Calculator();

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = Array.from(document.querySelectorAll(".btn"));
  const clearButton = document.querySelector(".clear");
  const equalsButton = document.querySelector(".equals");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (value) {
        display.value += value; // Append button value to display
      }
    });
  });

  equalsButton.addEventListener("click", () => {
    try {
      calc.calculate(display.value);
      display.value = calc.getResult();
    } catch (error) {
      display.value = "Error";
    }
  });

  clearButton.addEventListener("click", () => {
    display.value = ""; // Clear the display
    calc.clear(); // Clear the calculator result
  });
});
