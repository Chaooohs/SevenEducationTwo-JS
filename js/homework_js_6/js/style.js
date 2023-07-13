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

// engine -------------------------------------------------------------
class Engine {
  constructor(manufacturer, power) {
    this.manufacturer = manufacturer;
    this.power = power;
  }
  get engineInfo() {
    return `
    company: ${this.manufacturer}
    power: ${this.power}`;
  }
}

// driver -------------------------------------------------------------
class Driver {
  constructor(pib, drivingExperience) {
    this.pib = pib;
    this.drivingExperience = drivingExperience;
  }
  get driverInfo() {
    return `
    pib: ${this.pib}
    drivingExperience: ${this.drivingExperience}`;
  }
  set driverInfo(newPib) {
    this.pib = newPib;
  }
}

// car -------------------------------------------------------------------
class Car {
  constructor(brand, carClass, weight, driver, engine) {
    this.brand = brand;
    this.carClass = carClass;
    this.weight = weight;
    this.driver = driver;
    this.engine = engine;
  }
  start(startPrint) {
    document.write(`<h1>${startPrint}</h1>`);
  }
  stop(stopPrint) {
    document.write(`<h1>${stopPrint}</h1>`);
  }
  turnRight(turnRightPrint) {
    document.write(`<h1>${turnRightPrint}</h1>`);
  }
  turnLeft(turnLeftPrint) {
    document.write(`<h1>${turnLeftPrint}</h1>`);
  }
  toString() {
    return `
    марка автомобіля: ${this.brand} 
    клас автомобіля: ${this.carClass} 
    вага автомобіля: ${this.weight}
    водій: ${this.driver}
    мотор: ${this.engine}`;
  }
}

// lorry --------------------------------------------------------------
class Lorry extends Car {
  constructor(brand, carClass, weight, driver, engine, cargoCapacity) {
    super(brand, carClass, weight, driver, engine);
    this.cargoCapacity = cargoCapacity;
  }
  get lorryInfo() {
    return `
    cargoCapacity: ${this.cargoCapacity}`;
  }
}

// SportCar -------------------------------------------------------------
class SportCar extends Car {
  constructor(brand, carClass, weight, driver, engine, maxSpeed) {
    super(brand, carClass, weight, driver, engine);
    this.maxSpeed = maxSpeed;
  }
  get sportCarInfo() {
    return `
    maxSpeed: ${this.maxSpeed}`;
  }
}

// values ----------------------------------------------------------------
const engineOne = new Engine("bmv", 300);
const engineTwo = new Engine("mercedes", 400);

const driverOne = new Driver("Ivan Petrov", 15);
const driverTwo = new Driver("Ivan Sidorov", 20);
driverOne.driverInfo = "Dave Murray";

const carOne = new Car("bmv", "passenger", 700, driverOne.pib, engineOne.power);
const carTwo = new Car("audi", "passenger", 500, driverTwo.pib, engineTwo.power);

const lorry = new Lorry("bmv", "truck", 1500, driverOne.pib, engineOne.power, 1000);
const sportCar = new SportCar("audi", "sportcar", 500, driverTwo.pib, engineTwo.power, 350);

// console --------------------------------------------------------------------
console.log(engineOne.engineInfo);
console.log(engineTwo.engineInfo);

console.log(driverOne.driverInfo);
console.log(driverTwo.driverInfo);

console.log(carOne.toString());
console.log(carTwo.toString());

console.log(lorry.lorryInfo);
console.log(sportCar.sportCarInfo);

// print ---------------------------------------------------------------------------
// print(carOne.start("Поїхали"));
// print(carOne.stop("Зупиняємося"));
// print(carOne.turnRight("Поворот праворуч"));
// print(carOne.turnLeft("Поворот ліворуч"));

//========================================
