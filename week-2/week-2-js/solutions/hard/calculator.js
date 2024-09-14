class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(number) {
      this.result += number;
    }
  
    subtract(number) {
      this.result -= number;
    }
  
    multiply(number) {
      this.result *= number;
    }
  
    divide(number) {
      if (number === 0) {
        throw new Error("Invalid expression: Division by zero");
      }
      this.result /= number;
    }
  
    clear() {
      this.result = 0;
    }
  
    getResult(){
          return this.result;
    }
    calculate(inputExpression) {
      const temp = inputExpression;
      const cleanedExpression = temp.replace(/\s+/g, '');
      const isValidExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression);
    
      if (!isValidExpression) {
        throw new Error("Invalid expression.");
      }
    
      try {
        this.result = eval(inputExpression);
      } catch (error) {
        throw new Error("Invalid expression.");
      }
    
      if (this.result === Infinity) {
        throw new Error("Cannot divide a number by 0.");
      }
    
      return this.result;
    }
    
  }
  
  module.exports = Calculator;
  