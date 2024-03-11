var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.getElementById("greeting").textContent = greeting;

function fitToBrowser() {
  var content = document.getElementById("content");
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  content.style.width = viewportWidth + "px";
  content.style.height = viewportHeight + "px";
}

// Call fitToBrowser initially
fitToBrowser();

// Call fitToBrowser whenever the window is resized
window.addEventListener("resize", fitToBrowser);
