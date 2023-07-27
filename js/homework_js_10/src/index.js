/*
 * У папці calculator дана верстка макета калькулятора.
 * Потрібно зробити цей калькулятор робочим.
 * При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
 * При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
 * Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
 * При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
 */

//============================================================================================

const calc = {
  numOne: "",
  numTwo: "",
  sign: "",
  result: "",
  memory: "",
};

const key = (selector) => document.querySelector(selector);

key(".keys").addEventListener("click", function (e) {

  if (/\d/.test(e.target.value) && calc.sign === "") {
    calc.numOne += e.target.value;
    show(calc.numOne);
  }
  else if (/[+-/*]/.test(e.target.value)) {
    calc.sign += e.target.value;
  }
  else if (/\d/.test(e.target.value)) {
    calc.numTwo += e.target.value;
    show(calc.numTwo);
    key("#eq").removeAttribute("disabled");
  }

  switch (e.target.value) {
    case "m+":
      memoryRec();
      spanShow(e.target.value);
      break;
    case "m-":
      memoryDel();
      spanShow(e.target.value);
      break;
    case "mrc":
      memoryShow();
      spanShow(e.target.value);
      break;
    case "C":
      del()
      break;
    case "=":
      calculate(parseFloat(calc.numOne), parseFloat(calc.numTwo), calc.sign)
      show(calc.result)
      break;
  }
});

// memory _____________________________________
const memoryRec = () => {
  calc.memory = +key(".display > input").value;
  key(".display > input").value = "";
};

const memoryDel = () => {
  calc.memory = "";
  key(".display > input").value = "";
};

const memoryShow = () => key(".display > input").value = calc.memory;

function del() {
  calc.sign = ""
  calc.numOne = ""
  calc.numTwo = ""
  calc.result = ""
  show("");
  spanShow("");
}

// operations ___________________________________________
function calculate(a, b, c) {

  switch (c) {
    case "+": calc.result = (a + b)
      return
    case "-": calc.result = (a - b)
      return
    case "*": calc.result = (a * b)
      return
    case "/": (b !== 0) ? calc.result = (a / b) : ` ${del()} ${key(".display > span").innerText = 'деление на ноль невозможно'}`
      return
  }
}

// output ____
const spanShow = (m) => (key(".display > span").innerText = m);
const show = (view) => (key(".display > input").value = view);
