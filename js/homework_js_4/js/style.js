//=========================================================================

// 6. Використовуючи CallBack function, створіть калькулятор, який буде від користувача приймати 2 числа і знак арефметичної операції. При введенні не числа або при розподілі на 0 виводити помилку.

//=========================================================================

let a = parseInt(prompt("Перше число:"));
let c = prompt("Арефметична операція: +, -, *, /");
let b = parseInt(prompt("Друге число:"));
let err = "Помилка";

function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function dev(a, b) {
  if (b === 0) {
    return err;
  }
  return a / b;
}

function res(callback) {
  let result = callback(a, b, err);
  document.write(`<h3> ${result} </h3>`);
}

if (c === "+") {
  res(summ);
} 
else if (c === "-") {
  res(diff);
} 
else if (c === "*") {
  res(mult);
} 
else if (c === "/") {
  res(dev);
}

//===============================================================================
