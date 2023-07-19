//===========================================================================
// 1.

document.querySelector("#taskOneButton").onclick = clickOne;

function clickOne() {
  const circleSum = parseInt(document.querySelector("#input").value);

  if (circleSum > 24) return;

  for (let i = 0; i < circleSum; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.innerText = i + 1;
    circle.style.backgroundColor = `rgb(${randomColorCircle(255)},${randomColorCircle(255)},${randomColorCircle(255)})`;
    document.querySelector(".circle-background").append(circle);
    circle.onclick = () => circle.remove();
  }
}

function randomColorCircle(max) {
  return Math.floor(Math.random() * (max + 1));
}

//===============================================================================
// 2.

document.querySelector("#taskTwoButton").onclick = clickTwo;

function clickTwo() {
  let textOne = document.querySelector("#inputOne").value;
  let textTwo = document.querySelector("#inputTwo").value;

  document.querySelector("#inputTwo").value = textOne;
  document.querySelector("#inputOne").value = textTwo;
}

//=====================================================================================
// 3.

const [...divs] = document.getElementsByTagName("div");

divs.forEach((item) => {
  item.style.backgroundColor = `rgb(${randomColorCircle(255)},${randomColorCircle(255)},${randomColorCircle(255)})`;
});

function randomColorCircle(max) {
  return Math.floor(Math.random() * (max + 1));
}

//=========================================================================================
// 4.

document.querySelector("#taskFourButton").addEventListener("click", clickFour);

function clickFour() {
  const textFour = document.querySelector("#inputFour").value;
  const div = document.createElement("div");
  div.innerHTML = textFour;
  document.querySelector("#formTaskFour").append(div);

  const res = document.querySelector("#inputFour");
  res.value = "";
}

//=========================================================================================
// 5.

const imageList = [
  "https://itproger.com/img/courses/1476977240.jpg",
  "https://itproger.com/img/courses/1476977488.jpg",
  "http://surl.li/evmay",
];

const img = document.querySelector("#imgOne");
const taskFiveBtn = document.querySelector("#taskFiveButton");
img.src = imageList[0];
let num = 0;

taskFiveBtn.addEventListener("click", () => {
  num++;
  if (num >= imageList.length) {
    num = 0;
  }
  img.src = imageList[num];
});

//=========================================================================================
// 6.

for (let i = 0; i < 10; i++) {
  const elem = document.createElement("p");
  elem.innerText = 'Text ' + i;
  document.querySelector('#taskSix').append(elem);
  elem.onclick = () => elem.remove();
}

//========================================================================================







