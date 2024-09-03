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
  constructor(){
    this.result = 0;
  }
  add(n){
    this.result += n;
  }
  subtract(n){
    this.result -= n;
  }
  multiply(n){
    this.result *= n;
  }
  divide(n){
    if(n == 0){
      throw new Error('Invalid division by zero');
    }
    this.result /= n;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  helper(str){
    let stack = [];
    for(let i =0 ; i < str.length; i++){
      let s = str[i];
      if(s == "+" || s == "-" || s == "/" || s == "*"){
          if(st.size() < 2){
              return 0;
          }
          let op1 = stack.at(-1);
          stack.pop();
          let op2 = stack.at(-1);
          stack.pop();
          if(s == "+"){
              stack.push(op1 + op2);
          }
          else if(s == "/"){
              stack.push(op2/op1);
          }
          else if(s == "-"){
              stack.push(op2 - op1);
          }
          else{
              stack.push(op1 * op2);
          }
      }
      else{
          stack.push(parseInt(s[i]));
      }
    }
    this.result = stack.at(-1);
  }

 
  calculate(str){
    let stack = [];
    // making a valid string to process
    let expression = '';
    for(let i = 0; i < str.length; i++){
      if(str[i] == ' '){
        continue;
      }
      else if(isNaN(str[i]) && (str[i] != '+' || str[i] != '-' || str[i] != '*' || str[i] != '/' || str[i] != '(' || str[i] != ')')){
        throw new Error('Invalid Expression')
      }
      else{
        expression += str[i];
      }
    }

    // making use of stack and expression
    // helper(expression);
    this.result = eval(expression)
    return this.getResult()
}
}

module.exports = Calculator;
