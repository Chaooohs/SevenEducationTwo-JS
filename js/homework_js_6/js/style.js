//=========================================

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    console.log(this.rate * this.days);
  }
}

const worker1 = new Worker("Jon", "Ivanov", 100, 5);
const worker2 = new Worker("Ivan", "Ivanov", 200, 3);
const worker3 = new Worker("Ivan", "Petrov", 10, 10);
worker1.getSalary();
worker2.getSalary();
worker3.getSalary();

//==================================================

class MyString {
  constructor(string) {
    this.string = string;
  }
  reverse() {
    console.log(this.string.split("").reverse().join(""));
  }
  ucFirst() {
    console.log(this.string[0].toUpperCase() + this.string.slice(1));
  }
  ucWords() {
    console.log(
      this.string
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ")
    );
  }
}

const string = new MyString("java script");

string.reverse();
string.ucFirst();
string.ucWords();

//===================================================

class Phone {
  constructor(number, model, weight) {
    this.number = number;
    this.model = model;
    this.weight = weight;
  }
  receiveCall(nameCall) {
    return "Телефонує " + nameCall;
  }
  getNumber(receiveCall) {
    return receiveCall + this.number;
  }
}

const phone1 = new Phone("0974557512", "Nokia", 200);
const phone2 = new Phone("0974226512", "Samsung", 300);
const phone3 = new Phone("0977899512", "Iphone", 400);

console.log(phone1);
console.log(phone2);
console.log(phone3);

console.log(phone1.getNumber(phone1.receiveCall("Jon: ")));
console.log(phone1.getNumber(phone1.receiveCall("Ivan: ")));
console.log(phone1.getNumber(phone1.receiveCall("Petro: ")));

//==========================================================

const starWar = data.results;

starWar.forEach((item, index) => {
  const table = `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.height}</td><td>${
    item.mass
  }</td><td><a href="${item.url}">site</a></td></tr>`;
  add(table);
});

function add(el) {
  document.querySelector("#tbody").innerHTML += el;
}

//================================================================
