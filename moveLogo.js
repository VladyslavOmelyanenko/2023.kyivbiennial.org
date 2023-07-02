const header = document.querySelector('header')
const fgElement1 = document.querySelector('#fgLayer1')
const fgElement2 = document.querySelector('#fgLayer2')
const fgElement3 = document.querySelector('#fgLayer3')
const fgElement4 = document.querySelector('#fgLayer4')
let w = window.innerWidth

window.onresize = function () {
  w = window.innerWidth
}

onmousemove = function (e) {
  let left = scale(e.clientX, w / 2, w, 0, 20)
  fgElement1.style.left = 50 + (-1 * left) / 3 + '%'
  fgElement2.style.left = 50 + left / 3 + '%'
  fgElement3.style.left = 50 + left + '%'
  fgElement4.style.left = 50 + -1 * left + '%'
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

header.addEventListener('scroll', function () {
  let scrollTop = header.scrollTop
  let scrollHeight = header.scrollHeight - header.clientHeight
  let scrollFraction = scrollTop / scrollHeight

  let left = scale(scrollFraction, 0, 1, -200, 200)
  fgElement1.style.left = 50 + left / 3 + '%'
  fgElement2.style.left = 50 - left / 3 + '%'
  fgElement3.style.left = 50 + left + '%'
  fgElement4.style.left = 50 - left + '%'
})
