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

//добавить комнаты
var addBtn = document.querySelector('.addBtn');
var addRoomsList = document.querySelector('.addRooms');
var cancelBtn = document.querySelector('.cancelBtn');
var saveBtn = document.querySelector('.saveBtn');

//сами комнаты
var livingroom = document.getElementById('livingroom');
var bedroom = document.getElementById('bedroom');
var childroom = document.getElementById('childroom');
var bathroom = document.getElementById('bathroom');
var userroom1 = document.getElementById('userroom1');


addBtn.addEventListener('click', ()=>{
  addRoomsList.classList.toggle('invisible');
  addBtn.classList.toggle('invisible');  
})

cancelBtn.addEventListener('click',()=>{
  addRoomsList.classList.toggle('invisible');
  addBtn.classList.toggle('invisible'); 
})

saveBtn.addEventListener('click', (event) => {
  const options = {
      method:"post",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "livingroom": livingroom.value,
          "bedroom": bedroom.value,
          "bathroom": bathroom.value,
          "childroom": childroom.value,
          "userroom1": userroom1.value
      })
  }
  fetch("/addNewRooms", options).then(response => {
      if (response.ok) {
          document.location.href = "/"
      }
      else {
          response.text().then(error => {
              console.log(error)
              errorHandler(serverError, error)
          })
      }
  }).catch((err) => {
      console.error(err)
  })
      
},false);