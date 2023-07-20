//======================================================================
let mill = 0,
  sec = 0,
  min = 0,
  intervalMill,
  intervalSec,
  intervalMin;

const $ = (id) => document.querySelector(id);

$("#startBtn").onclick = () => {
  document.querySelector(".container-stopwatch").classList.add("green");
  clearInterval(intervalMill);
  clearInterval(intervalSec);
  clearInterval(intervalMin);
  intervalMill = setInterval(millisec, 100);
  intervalSec = setInterval(second, 1000);
  intervalMin = setInterval(minute, 60000);
};

$("#stopBtn").onclick = () => {
  document.querySelector(".container-stopwatch").classList.remove("green");
  document.querySelector(".container-stopwatch").classList.add("red");
  clearInterval(intervalMill);
  clearInterval(intervalSec);
  clearInterval(intervalMin);
};

$("#resetBtn").onclick = () => {
  document.querySelector(".container-stopwatch").classList.remove("green");
  document.querySelector(".container-stopwatch").classList.remove("red");
  document.querySelector(".container-stopwatch").classList.add("silver");

  mill = 0;
  sec = 0;
  min = 0;

  $("#milliseconds").textContent = "00";
  $("#seconds").textContent = "00";
  $("#minutes").textContent = "00";
};

const millisec = () => {
  mill++;
  if (mill > 9) {
    mill = 0;
  }
  $("#milliseconds").textContent = mill < 10 ? "0" + mill : mill;
};

const second = () => {
  sec++;
  if (sec > 59) {
    sec = 0;
  }
  $("#seconds").textContent = sec < 10 ? "0" + sec : sec;
};

const minute = () => {
  min++;
  if (min > 59) {
    min = 0;
  }
  $("#minutes").textContent = min < 10 ? "0" + min : min;
};