// -n1 -------------------------------------

var userName = prompt("What is your name?"),
  userSurName = prompt("What is your surname?"),
  userAge = parseInt(prompt(" What is your age?"));

document.write(` <div>
                  <header></header>
                  <aside></aside>
                  <main>
                    <h2> User name: ${userName}</h2>
                    <h2> User surmane: ${userSurName}</h2>
                    <h2> User age: ${userAge}</h2>
                  </main>
                  <footer></footer>
                  </div> `);

// -n2 -------------------------------------------

var x = 6,
  y = 14,
  z = 4;
var one = (x += y - x++ * z);

// *, +, -;
/*
Постфиксный инкремент (16) = 6
Умножение (13) = 6 * 4 = 24
Вычитание (12) = 14 - 24 = -10
Присваивание (2) = -4
*/

var x = 6,
  y = 14,
  z = 4;
var two = (z = --x - y * 5);

// *, -, =;
/*
Постфиксный декремент (16) = 5
Умножение (13) = 14 * 5 = 70
Вычитание (12) = 5 - 70 = -65
Присваивание (2) = -65
*/

var x = 6,
  y = 14,
  z = 4;
var three = (y /= x + (5 % z));

// %, +, /=;
/* 
Остаток от деления (13) = 1 
Сложение (12) =6 + 1 = 7
Присваивание (2) = 2
*/

var x = 6,
  y = 14,
  z = 4;
var four = z - x++ + y * 5;

// *, - , +;
/* 
Постфиксный инкремент (16) = 6
Умножение (13) = 14 * 5 = 70
Вычитание (12) = 4 - 6 = -2
Сложение (12) = - 2 + 70 = 68
Присваивание (2) = 68
*/

var x = 6,
  y = 14,
  z = 4;
var five = (x = y - x++ * z);

// *, -, =;
/*
Постфиксный инкремент (16) = 6
Умножение (13) = 6* 4 = 24
Вычитание (12) = 14 - 24 = -10
Присваивание (2) = -10
*/

document.write(` <h3> ${one} </h3> `);
document.write(` <h3> ${two} </h3> `);
document.write(` <h3> ${three} </h3> `);
document.write(` <h3> ${four} </h3> `);
document.write(` <h3> ${five} </h3> `);
