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

