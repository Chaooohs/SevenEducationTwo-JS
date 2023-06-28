//=====================================================================

// 1. Створіть об'єкт заробітної плати obj. Виведіть на екран зарплату Петі та Колі.

//=====================================================================

// const salary = {
//   Коля: "1000",
//   Вася: "500",
//   Петя: "200",
// };

// document.write(`<h3>Коля: ${salary.Коля} </h3>`);
// document.write(`<h3>Петя: ${salary.Петя} </h3>`);
// document.write("<hr>");

//=====================================================================

//  2. Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=11.01.2021. Для виводу використовуєте html таблиці та стилі. переберіть обєкти викортстовуючи властивість values.

//=====================================================================

// const tbody = document.getElementById("tbody");
// let table = "";
// for (let item of Object.values(data.exchangeRate)) {
//   table += `<tr><td>${data.exchangeRate.length}</td><td>${item.currency}</td><td>${item.saleRateNB.toFixed(2)}</td><td>${item.purchaseRateNB.toFixed(2)}</td></tr>`;
// }
// tbody.innerHTML = table;

//=====================================================================

// 3. Створіть об'єкт cryptoWallet. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, Ethereum, Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на сьогоднішній день день. Також в об'єкті гаманець є метод при виклику якого він приймає ім'я валюти та виводить на сторінку інформацію. "Доброго дня, ... ! На вашому балансі (Назва валюти та логотип) залишилося N монет, якщо ви сьогодні продасте їх те, отримаєте ...грн.

//=====================================================================

const cryptoWallet = {
  userName: 'Ingrid',
  Bitcoin: {
    name: 'Bitcoin',
    logo: "<img src = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'style='width:20px'>",
    coin: 1,
    rate: 30334.62,
  },
  Ethereum: {
    name: 'Ethereum',
    logo: "<img src ='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'style='width:20px'>",
    coin: 30,
    rate: 1857.00,
  },
  Stellar: {
    name: 'Stellar',
    logo: "<img src ='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png'style='width:20px'>",
    coin: 20,
    rate: 0.1044,
  },
  page: function (coinName) {
    document.write(`<h3> Доброго дня, ${this.userName} ! На вашому балансі ${this[coinName].name} ${this[coinName].logo} залишилося ${this[coinName].coin} монет, якщо ви сьогодні продасте їх те, отримаєте ${(this[coinName].coin * this[coinName].rate * 37).toFixed(2)}грн. </h3>`)
  }
}

// cryptoWallet.page(prompt('Bыберiть монету', 'Bitcoin, Ethereum, Stellar'));

//=====================================================================



//=====================================================================
