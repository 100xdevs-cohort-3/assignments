// Recursive descent parser: expression -> term -> factor.
// Parsing explicitly avoids executing arbitrary JavaScript with eval.
class Calculator {
  constructor() {
    this.result = 0;
  }
  number(value) {
    if (typeof value !== 'number' || !Number.isFinite(value))
      throw new Error('Expected a finite number');
    return value;
  }
  add(value) {
    this.result = this.number(this.result + this.number(value));
  }
  subtract(value) {
    this.result = this.number(this.result - this.number(value));
  }
  multiply(value) {
    this.result = this.number(this.result * this.number(value));
  }
  divide(value) {
    this.number(value);
    if (value === 0) throw new Error('Division by zero');
    this.result = this.number(this.result / value);
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(source) {
    if (typeof source !== 'string') throw new Error('Expected an expression');
    const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+)|[^\s]/g) || [];
    let index = 0;
    const factor = () => {
      const token = tokens[index++];
      if (token === '+' || token === '-') return (token === '-' ? -1 : 1) * factor();
      if (token === '(') {
        const value = expression();
        if (tokens[index++] !== ')') throw new Error('Unbalanced parentheses');
        return value;
      }
      if (!token || !/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) throw new Error('Invalid expression');
      return this.number(Number(token));
    };
    const term = () => {
      let value = factor();
      while (tokens[index] === '*' || tokens[index] === '/') {
        const operator = tokens[index++];
        const right = factor();
        if (operator === '/' && right === 0) throw new Error('Division by zero');
        value = this.number(operator === '*' ? value * right : value / right);
      }
      return value;
    };
    const expression = () => {
      let value = term();
      while (tokens[index] === '+' || tokens[index] === '-') {
        const operator = tokens[index++];
        const right = term();
        value = this.number(operator === '+' ? value + right : value - right);
      }
      return value;
    };
    const value = expression();
    if (index !== tokens.length) throw new Error('Unexpected token');
    this.result = this.number(value);
    return this.result;
  }
}
module.exports = Calculator;
