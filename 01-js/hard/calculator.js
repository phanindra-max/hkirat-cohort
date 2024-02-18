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

  NOTES: 
  1. Make sure the logic is capable to handle errors in input like division by zero
  2. Handle calculations with decimal numbers
*/

class Calculator {
  constructor() {
    this.result = 0;
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
      throw new Error('Division by zero');
    }
    this.result = this.result / num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // remove all spaces
    expression = expression.replace(/\s/g, '');
    // check for invalid characters \d for digits, \. for decimal, \+ for addition, \- for subtraction, \* for multiplication, \/ for division, \( for opening bracket, \) for closing bracket
    if (/[^\d\.?\+\-\*\/\(\)]/.test(expression)) {
      throw new Error('Invalid expression');
    }
    // check for division by zero
    if (expression.includes('/0')) {
      throw new Error('Division by zero');
    }
    // evaluate the expression
    this.result
      = eval
        (expression
          .replace(/\(/g, '(')
          .replace(/\)/g, ')')
          .replace(/\+/g, '+')
          .replace(/\-/g, '-')
          .replace(/\*/g, '*')
          .replace(/\//g, '/')
        );

  }

}

// test your code
const calculator = new Calculator();
calculator.add(10);
calculator.subtract(5);
calculator.multiply(2);
calculator.divide(2);
console.log(calculator.getResult()); // 5
calculator.clear();
module.exports = Calculator;
