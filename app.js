const numButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete");
const allClearButton = document.querySelector("[data-allclear]");
const previousOperand = document.querySelector("[data-previous");
const currentOperand = document.querySelector("[data-current]");

class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
  }

  // clear out the different vars
  clear() {}

  // removing a single number
  delete() {}

  // every time a user clicks a number
  appendNumber(number) {}

  // every time a user clicks on an operation
  chooseOperation(operation) {}

  // take our values and compute a single value to display
  compute() {}

  // updates the values inside of the output
  updateDisplay() {}
}
