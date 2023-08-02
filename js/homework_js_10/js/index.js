/*
 * У папці calculator дана верстка макета калькулятора.
 * Потрібно зробити цей калькулятор робочим.
 * При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
 * При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
 * Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
 * При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
 */

//============================================================================================

// essential_____________________________________________

const calc = {
  numOne: "",
  numTwo: "",
  sign: "",
  memory: "",
};

const key = (selector) => document.querySelector(selector);
const signs = ['+', '-', '*', '/']


// operations ___________________________________________

function calculate(a, b, c) {

  switch (c) {
    case "+": calc.numOne = (a + b)
      return
    case "-": calc.numOne = (a - b)
      return
    case "*": calc.numOne = (a * b)
      return
    case "/": (b !== 0) ? calc.numOne = (a / b) : `${clearAll()} ${showSpan('деление на ноль невозможно')}`
      return
  }
}

// memory ____________________________________________________

const memoryRec = () => {
  calc.memory = +key(".display > input").value;
  key(".display > input").value = "";

  if (calc.numOne !== '' && calc.numTwo !== '') { }
  else if (calc.memory !== '') calc.numOne = ''
  console.log(calc)
};

const memoryDel = () => {
  calc.memory = "";
  key(".display > input").value = "";
  console.log(calc)
};

const memoryShow = () => {
  if (calc.numOne === '' && calc.numTwo === '') calc.numOne = calc.memory
  else if (calc.numOne !== '' && calc.numTwo === '') calc.numTwo = calc.memory

  key(".display > input").value = calc.memory;
  console.log(calc)
}

function clearAll() {
  calc.sign = ""
  calc.numOne = ""
  calc.numTwo = ""
  calc.memory = ""
  show("");
  showSpan("");
}

// validation __________________________________________________________________

const validation = (pattern, value) => pattern.test(value)

// output ___________________________________________________________________________

const showSpan = (m) => (key(".display > span").innerText = m);
const show = (view) => (key(".display > input").value = view);

// distribution ___________________________________________________________________________

function cheking(symbol) {

  showSpan('')

  if (validation(/[0-9.]/, symbol)) {
    if (calc.numTwo === '' && calc.sign === '' || calc.numOne === '' && calc.numTwo === '' && calc.memory !== '') {
      calc.numOne += symbol;
      show(calc.numOne);
      console.log(calc)
    }
    else if (calc.numOne !== '' && calc.numTwo !== '') {
      calc.numTwo += symbol;
      show(calc.numTwo);
      console.log(calc)
    }
    else {
      calc.numTwo += symbol;
      show(calc.numTwo);
      key("#eq").removeAttribute("disabled");
      console.log(calc)
    }
  }

  if (signs.includes(symbol)) calc.sign = symbol;

  if (symbol === '=' || symbol === 'Enter') {
    calculate(+calc.numOne, +calc.numTwo, calc.sign)
    show(calc.numOne)
    calc.numTwo = ''
    console.log(calc)
  }

  if (symbol === 'C' || symbol === 'Delete') {
    clearAll()
    console.log(calc)
  }

  switch (symbol) {
    case "m+":
      memoryRec();
      showSpan(symbol);
      break;
    case "m-":
      memoryDel();
      showSpan(symbol);
      break;
    case "mrc":
      memoryShow();
      showSpan(symbol);
      break;
  }
};

// click ______________________________________________________________


key(".keys").addEventListener("click", (e) => cheking(e.target.value))
key("body").addEventListener("keydown", (e) => {cheking(e.key); e.preventDefault();})



