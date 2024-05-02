// calculator.js
let operator = "";
let operand1 = "";
let operand2 = "";

function appendNumber(number) {
  if (operator === "") {
    operand1 += number;
  } else {
    operand2 += number;
  }
  document.getElementById("result").value = operand1 + operator + operand2;
}

function appendOperator(op) {
  operator = op;
  document.getElementById("result").value = operand1 + operator + operand2;
}

function calculate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(operand1) + Number(operand2);
      break;
    case "-":
      result = Number(operand1) - Number(operand2);
      break;
    case "*":
      result = Number(operand1) * Number(operand2);
      break;
  }
  document.getElementById("result").value = result;
  operator = "";
  operand1 = String(result);
  operand2 = "";
}

function clearResult() {
  operator = "";
  operand1 = "";
  operand2 = "";
  document.getElementById("result").value = "";
}
