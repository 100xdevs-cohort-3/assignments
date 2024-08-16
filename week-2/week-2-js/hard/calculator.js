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
  constructor(res){
    this.res = 0 ; //Initialize the result
  }
  add(num){
    this.res += num;
    return this;
  }

  subtract(num){
    this.res -= num;
    return this;
  }
  multiply(num){
    this.res *= num;
    return this;
  }
  divide(num){
    if (num === 0){
      throw new Error('Cannot divide by zero')
    }
    this.res /= num;
    return this;
  }

  clear(){
    this.res = 0 // clear the value of res
    return this;
  }

  getResult(){
    return this.res;
  }
  calculate(expression = '10 / 0') {
    try {
      const cleanedExpression = expression.replace(/\s+/g, "");
      if (/[^0-9+\-*/().]/.test(cleanedExpression)) {
        throw new Error("Invalid characters in expression");
      }
      this.res = eval(cleanedExpression); 
      if (this.res === Infinity || this.res === -Infinity) {
        throw new Error("Cannot divide by zero");
      }
    } catch (error) {
      throw new Error("Invalid expression");
    }
    return this.res;
  }
  
}

// const c = new Calculator;
// c.add(4)
// c.subtract(2)
// c.divide(2)
// c.multiply(7)
// c.getResult()
// console.log(c.calculate())
module.exports = Calculator;
