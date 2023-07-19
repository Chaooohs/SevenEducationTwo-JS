//=====================================================

const list = document.querySelector("#list");

let num = 0;

function selectFirstChild() {
  document.querySelector("li:first-child").classList.add("element");
  document.querySelector("li:last-child").classList.remove("element");
}

function selectLastChild() {
  document.querySelector("li:last-child").classList.add("element");
  document.querySelector("li:first-child").classList.remove("element");
}

function selectNextNode() {
  li[num].classList.remove("element");
  num++;
  if (num >= li.length) {
    num = 0;
  }
  li[num].classList.add("element");
}

function selectPrevNode() {
  li[num].classList.remove("element");
  num--;
  if (num < 0) {
    num = 4;
  }
  li[num].classList.add("element");
}

function createNewChild() {
  const elem = document.createElement("li");
  elem.innerText = "List Item ";
  document.querySelector("#list").append(elem);
}

function removeLastChild() {
  document.querySelector("li:last-child").remove();
}

function createNewChildAtStart() {
  li = document.querySelector("li:last-child");
  list.prepend(li);
}

let li = document.querySelectorAll("li");
