function screenSize() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth
  var size = Math.floor((screenWidth / 1920) * 20)
  console.log(size)
  document.body.style.fontSize = size + 'px'
}

screenSize()

window.onresize = function () {
  screenSize()
}
