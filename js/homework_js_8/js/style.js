//===========================================================================
// 1.

// const circleSum = +prompt("Enter circle quantity:");

// for (let i = 0; i < circleSum; i++) {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.innerText = i + 1;
//   circle.style.backgroundColor = `rgb(${randomColorCircle(255)},${randomColorCircle(255)},${randomColorCircle(255)})`
//   document.querySelector('.circle-background').append(circle);
//   circle.onclick = () => circle.remove();
// }

// function randomColorCircle (max) {
//   return Math.floor(Math.random() * (max + 1))
// }

//===============================================================================
// 2.

document.querySelector("#taskTwoButton").onclick = myClick;

function myClick() {
  let textOne = document.querySelector("#inputOne").value;
  let textTwo = document.querySelector("#inputTwo").value;

  document.querySelector("#inputTwo").value = textOne;
  document.querySelector("#inputOne").value = textTwo;
}

//=====================================================================================
// 3.

divs = document.getElementsByTagName("div");

const arr = [...divs];

arr.forEach((item) => {
  item.style.backgroundColor = `rgb(${randomColorCircle(255)},${randomColorCircle(255)},${randomColorCircle(255)})`;
});

function randomColorCircle(max) {
  return Math.floor(Math.random() * (max + 1));
}

//=========================================================================================
// 4.

document.querySelector("#taskFourButton").addEventListener('click', clickFour);
function clickFour() {
  const textFour = document.querySelector("#inputFour").value;
  const div = document.createElement("div");
  div.innerHTML = textFour;
  document.querySelector(".task_four").append(div);

  const res = document.querySelector("#inputFour")
  res.value = "";
}

//=========================================================================================
// 5.


