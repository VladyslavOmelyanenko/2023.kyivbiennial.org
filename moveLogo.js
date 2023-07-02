const fgElement1 = document.querySelector('#fgLayer1')
const fgElement2 = document.querySelector('#fgLayer2')
const fgElement3 = document.querySelector('#fgLayer3')
const fgElement4 = document.querySelector('#fgLayer4')
let w = window.innerWidth

window.onresize = function () {
  w = window.innerWidth
}

onmousemove = function (e) {
  let left = scale(e.clientX, w / 1.5, w, 0, 100)
  fgElement1.style.right = left * 0.5 + 'px'
  fgElement2.style.left = left * 0.5 + 'px'
  fgElement3.style.left = left + 'px'
  fgElement4.style.right = left + 'px'
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
