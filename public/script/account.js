var devices = document.querySelectorAll(".device");
var titles = document. querySelectorAll(".title");

for (let index = 0; index < devices.length; index++) {
    titles[index].addEventListener("click", function(){
          devices[index].classList.toggle("open");
  })}

var button = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu-nav");
var header = document.querySelector("#header");

header.addEventListener("click", function(){
  button.classList.toggle("active");
  menu.classList.toggle("dropdown");
})