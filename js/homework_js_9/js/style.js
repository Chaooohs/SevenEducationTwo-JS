//=============================================================
// 3.

const $ = (el) => document.querySelector(el);

const input = document.createElement("input");
const button = document.createElement("input");
const validateTel = /\d{3}-\d{3}-\d{2}-\d{2}/;

input.setAttribute("placeholder", "000-000-00-00");
button.setAttribute("type", "button");
button.value = "Save";

$("section").append(input);
$("section").append(button);

button.onclick = () => {
  const userTel = $("input").value;
  if (!validateTel.test(userTel)) {
    const div = document.createElement("div");
    div.innerText = "Error";
    div.style.color = "red";
    $("section").prepend(div);
  } else {
    document.location.assign("https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg");
  }
};

//=================================================================================================
// 1.

