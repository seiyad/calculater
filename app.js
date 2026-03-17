// app.js

import logResult, { add, subtract, multiply, divide } from './math.js';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const resultBox = document.getElementById("result");
const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const op = operator.value;


  if (num1.value === "" || num2.value === "") {
    resultBox.innerText = "Please enter both numbers";
    return;
  }

  let result;


  switch (op) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      result = "Invalid operator";
  }

  resultBox.innerText = result;

  logResult(result);
});