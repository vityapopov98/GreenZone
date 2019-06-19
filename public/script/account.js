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
var kitchen = document.getElementById('kitchen');
var balcony = document.getElementById('balcony');
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

//отобразить имеющееся
fetch('/getUserRooms').then(response=>{
  console.log(response)
  if(response.ok){
    console.log('i get users rooms');
    return response.json();
  }
  else{
      console.log('er get rooms :(');
      throw new Error ('jio[hfhf');
  }
}).then(json=>{
  console.log(json);
    bathroom.checked = json.bathroom;
    bedroom.checked = json.bedroom;
    kitchen.checked = json.kitchen;
    childroom.checked = json.childroom;
    balcony.checked = json.balcony;
    userRoom0.checked = json.userRoom0;
    userRoom1.checked = json.userRoom1;
    userRoom2.checked = json.userRoom2;

})

//сохранить изменения
saveBtn.addEventListener('click', (event) => {
  const options = {
      method:"post",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "bathroom": bathroom.checked,
          "bedroom": bedroom.checked,
          "kitchen": kitchen.checked,
          "childroom": childroom.checked,
          "balcony": balcony.checked,
          "userRoom0": userRoom0.checked,
          "userRoom1": userRoom1.checked,
          "userRoom2": userRoom2.checked
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
