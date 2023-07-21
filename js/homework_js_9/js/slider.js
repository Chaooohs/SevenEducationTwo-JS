//===========================================================

const $ = (el) => document.querySelector(el)
let dot = 0

$('#next').onclick = () => {
  dot += 256
  if (dot > 1024) {
    dot = 0
  }
  $('.slider__line').style.left = - dot + 'px'
}

$('#prev').onclick = () => {
  dot -= 256
  if (dot < 0) {
    dot = 1024
  }
  $('.slider__line').style.left = - dot + 'px'
}

