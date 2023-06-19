/* 

1. Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.

2. У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число (У першу, другу, третю або четверту).
3. Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1', то змінну result запишемо 'зима', якщо має значення '2' – 'весна' тощо. Розв'яжіть завдання через switch-case.
4. Використовуючи цикли та умовні конструкції намалюйте ялинку
          *
         * *
        * * *
       * * * *
      * * * * *
          *
         * *
        * * *
       * * * *
      * * * * *

5. Використовуючи умовні конструкції перевірте вік користувача, якщо користувачеві буде від 18 до 35 років переведіть його на сайт google.com через 2 секунди, якщо вік користувача буде від 35 до 60 років, переведіть його на сайт https://www.uz.gov.ua/, якщо користувачеві буде до 18 років покажіть йому першу серію лунтика з ютубу

6. Використовуючи циклічні конструкції, пробіли (&nbsp;) та зірки (*) намалюйте:
Порожній 
- прямокутник 

Заповнений 
- Рівнобедрений трикутник 
- Трикутник прямокутний
- Ромб

*/

// -n1 ---------------------------------

let variable = parseInt(prompt("Ведiть число:"))

if (variable === 10) {
  document.write(` <h3> Вірно </h3> `);
} else {
  document.write(` <h3> Невiрно </h3> `);
}

// -n2 ------------------------------------

let min = parseInt(prompt("Ведiть число вiд 0 до 59"));
let result;

if (min >= 0 && min < 15) {
  result = "Перша";
} else if (min >= 0 && min < 30) {
  result = "Друга";
} else if (min >= 0 && min < 45) {
  result = "Третя";
} else if (min >= 0 && min < 60) {
  result = "Четверта";
} else {
  result = "Помилка";
}

document.write(` <h3> ${result} </h3> `);

// -n3 --------------------------------------

let num = prompt("Ведiть число 1, 2, 3 або 4");
let time;

switch (num) {
  case '1':
    time = 'Зима';
    break;
  case '2':
    time = 'Весна';
    break;
  case '3':
    time = 'Лiто';
    break;
  case '4':
    time = 'Осiнь';
    break;
  default:
    time = 'Невiрно';
}

document.write(` <h3> ${time} </h3> `)

// -n4 ----------------------------------------------------

for (let i = 0; i < 10; i = i + 2) {
  for (let a = i; a < 10; a++) {
    document.write("&nbsp;");
  }
  for (let b = 1 + i; b > 0; b--) {
    document.write("*");
  }
  document.write("<br>");
}

for (let i = 0; i < 10; i = i + 2) {
  for (let a = i; a < 10; a++) {
    document.write("&nbsp;");
  }
  for (let b = 1 + i; b > 0; b--) {
    document.write("*");
  }
  document.write("<br>");
}

// -m5 -----------------------------------------------------

const age = +prompt("Ведiть свiй рik");

if (age > 0 && age < 18) {
  document.write(`<meta http-equiv="refresh" content="0; url=https://www.youtube.com/watch?v=icdSZKq9-sM">`);
} else if (age > 0 && age < 35) {
  document.write(`<meta http-equiv="refresh" content="2; url=https://www.google.com.ua/">`);
} else if (age > 0 && age < 60) {
  document.write(`<meta http-equiv="refresh" content="0; url=https://www.uz.gov.ua/">`);
} else {
  document.write(`<meta http-equiv="refresh" content="0; url=https://rozetka.com.ua/">`);
}

// -n6 ------------------------------------------------------

//  прямокутник

for (let i = 0; i < 5; i++) {
  for (let a = 0; a < 5; a++) {
    document.write("*");
    if (i > 0 && i < 4) {
      break;
    }
  }

  if (i > 0 && i < 4) {
    for (let a = 0; a < 8; a++) {
      document.write("&nbsp;");
    }
  }

  for (let i = 0; i < 1; i++) {
    document.write("*");
    break;
  }
  document.write("<br>");
}

document.write("<br>");

// Рівнобедрений трикутник

for (let i = 0; i < 9; i = i + 2) {
  for (let a = i; a < 9; a++) {
    document.write("&nbsp;");
  }
  for (let b = 1 + i; b > 0; b--) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");

// Трикутник прямокутний

for (let i = 0; i < 7; i = i + 1) {
  for (let a = 1 + i; a > 0; a--) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");

// ромб

for (let i = 0; i < 10; i = i + 2) {
  for (let a = i; a < 10; a++) {
    document.write("&nbsp;");
  }
  for (let b = 1 + i; b > 0; b--) {
    document.write("*");
  }
  document.write("<br>");
}

for (let i = 0; i < 11; i = i + 2) {
  for (let a = i; a > 0; a--) {
    document.write("&nbsp;");
  }
  for (let b = i; b < 11; b++) {
    document.write("*");
  }
  document.write("<br>");
}
