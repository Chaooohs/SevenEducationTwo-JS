// -n1 -------------------------------------

var userName = prompt('What is your name?'),
    userSurName = prompt('What is your surname?'),
    userAge = parseInt(prompt(' What is your age?')) ;

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

var x = 6,
  y = 14,
  z = 4;
var two = z = --x - y * 5;

// *, -, =;

var x = 6,
  y = 14,
  z = 4;
var three = y /= x + (5 % z);

// %, +, /=;

var x = 6,
  y = 14,
  z = 4;
var four = z - x++ + y * 5;

// *, - , +;

var x = 6,
  y = 14,
  z = 4;
var five = x = y - x++ * z;

// *, -, =;

document.write(` <h3> ${one} </h3> `);
document.write(` <h3> ${two} </h3> `);
document.write(` <h3> ${three} </h3> `);
document.write(` <h3> ${four} </h3> `);
document.write(` <h3> ${five} </h3> `);
