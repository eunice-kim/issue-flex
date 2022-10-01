// variable declarations
var superMessage = document.getElementById("supermarket-message");
var nav = document.getElementById("nav");
var coffee = document.getElementById("coffee");
var beefImage = document.getElementById("beef-image");
var eggImage = document.getElementById("egg-image");
var sushiImage = document.getElementById("sushi-image");
var arrow = document.getElementById("arrow");
var slideShow = document.getElementById("slideshow");

function showMessage() {
    superMessage.classList.add("show");
}

function hideMessage() {
  superMessage.classList.remove("show");
}

function toggleNav() {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
  else {
    nav.classList.add("show");
  }
}

function showBeef() {
  beefImage.classList.add("show");
  coffee.style.visibility="hidden";
}

function hideBeef() {
  beefImage.classList.remove("show");
  coffee.style.visibility="visible";
}

function showEgg() {
  eggImage.classList.add("show");
  coffee.style.visibility="hidden";
}

function hideEgg() {
  eggImage.classList.remove("show");
  coffee.style.visibility="visible";
}

function showSushi() {
  sushiImage.classList.add("show");
  coffee.style.visibility="hidden";
}

function hideSushi() {
  sushiImage.classList.remove("show");
  coffee.style.visibility="visible";
}

function nextSlide() {
  if (slideShow.classList.contains("animateLeft")) {
    slideShow.classList.add("animateLeft2");
    arrow.classList.remove("show");
  }
  else {
    slideShow.classList.add("animateLeft");
  }
}
