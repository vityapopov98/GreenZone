
var button = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu-nav");
var header = document.getElementById("header");

header.addEventListener("click", function(){
  button.classList.toggle("active");
  menu.classList.toggle("dropdown");
})