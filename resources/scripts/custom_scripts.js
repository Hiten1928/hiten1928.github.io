new WOW().init()
window.particlesJS.load("particles-js", "css/particles.json", function() {
  console.log("callback - particles.js config loaded")
})

$(function() {
  var header = $("nav")
  $(window).scroll(function() {
    if ($(window).scrollTop() <= 30) {
      header.css(
        "box-shadow",
        "0px 0px " + $(window).scrollTop() + "px rgba(0, 0, 0, 0.4)"
      )
    } else {
      header.css("box-shadow", "0px 0px 30px rgba(0, 0, 0, 0.4)")
    }
  })
})

function openMenu(evt, menuName) {
  var i, x, tablinks
  x = document.getElementsByClassName("research")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablink")
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "")
  }
  document.getElementById(menuName).style.display = "block"
  evt.currentTarget.firstElementChild.className += " w3-dark-grey"
}
document.getElementById("myLink").click()
