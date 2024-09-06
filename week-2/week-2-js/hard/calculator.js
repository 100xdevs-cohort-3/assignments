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
    this.result = 0;
    this.operators = [];
    this.operands = [];
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by 0");
    }
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  solve(operator) {
    let firstNumber = Number(this.operands.pop());
    let secondNumber = Number(this.operands.pop());
    let result = 0;
    if (operator === "+") {
      result = secondNumber + firstNumber;
    }
    if (operator === "-") result = secondNumber - firstNumber;
    if (operator === "*") result = secondNumber * firstNumber;
    if (operator === "/") {
      if (firstNumber == 0) throw new Error("Cannot divide by zero");
      result = secondNumber / firstNumber;
    }
    this.operands.push(result);
  }
  check(char, lastOperator) {
    // if(char <= lastOperator)
    if (
      char === "+" &&
      lastOperator !== "(" &&
      lastOperator !== ")" &&
      lastOperator !== undefined
    )
      return true;
    if (
      char === "-" &&
      lastOperator !== "(" &&
      lastOperator !== ")" &&
      lastOperator !== undefined
    )
      return true;
    if (char === "*" && (lastOperator === "*" || lastOperator === "/"))
      return true;
    if (char === "/" && (lastOperator === "/" || lastOperator === "*"))
      return true;
    return false;
  }
  isValid(exp) {
    let bad = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let splitted = exp.split("");
    let flag = bad.some((item) => splitted.includes(item));
    return !flag;
  }
  calculate(exp) {
    if (this.isValid(exp) === false) {
      throw new Error("invalid input");
    }
    exp = exp
      .split("")
      .filter((char) => char !== " ")
      .join("");

    {
      // checking valid parenthesis
      let val = 0;
      for (let char of exp) {
        if (char === "(") val++;
        if (char === ")") val--;
        if (val < 0) {
          throw new Error("Invalid parenthesis");
        }
      }
      if (val != 0) throw new Error("Invalid parenthesis");
    }

    this.operators = [];
    this.operands = [];
    let f = true;
    for (let char of exp) {
      if (
        "+" === char ||
        "-" === char ||
        "*" === char ||
        "/" === char ||
        "(" === char ||
        char === ")"
      ) {
        if (char === ")") {
          let lastOperator = this.operators.pop();
          while (lastOperator != "(") {
            this.solve(lastOperator);
            lastOperator = this.operators.pop();
          }
        } else if (char === "(") {
          this.operators.push("(");
        } else {
          let lastOperator = this.operators.pop();
          if (lastOperator) {
            while (
              this.operators.length >= 0 &&
              this.check(char, lastOperator)
            ) {
              this.solve(lastOperator);

              lastOperator = this.operators.pop();
              if (!lastOperator) break;
            }
            if (lastOperator) {
              this.operators.push(lastOperator);
            }
          }
          this.operators.push(char);
        }
        f = true;
      } else {
        if (f === true) {
          this.operands.push(char);
        } else {
          let last = this.operands.pop();
          last += char;
          this.operands.push(last);
        }
        f = false;
      }
    }

    // after completition of pushing
    while (this.operators.length > 0) {
      let last = this.operators.pop();
      this.solve(last);
    }
    let ans = this.operands[0];
    this.operands = [];
    this.operators = [];
    this.result = ans;
  }
}
// let c = new Calculator();
// console.log(c.calculate("(2.5 + 1.5) * 3"));
module.exports = Calculator;
