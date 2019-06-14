var usersRoom //= ['кухня', 'спальня', 'ванная', 'гостинная', 'гостевая', 'детская'];
var userAuth = false;//запрашивается с сервака пользователь авторизован или нет
var devices = [];

import { renderLogin } from "./gen.js"

window.onload= function(){
    
    if(userAuth){
        getRooms();
    }
    else{
        renderLogin();
        //sign_In вот тут по идее
       
    }

}

// function passwordCheck(){
//     console.log(userLogin.value);//проверяем правильность пароля
//     //alert(userLogin.value);
    
//     if(userLogin.value=='admin' && userPassword.value=='123'){
//         userAuth=true;
//         //удалить вход
//         var wBlock = document.querySelector('.whiteSmBlock');
//          console.log(wBlock);
//          wBlock.remove();//удаляем блок входа
//         //alert('вхожу');
//         getRooms();//достаем комнаты и рендерим их
//     }

// return false
// }

function getRooms(){
    //можно использовать такой роут localhost:3000/getrooms
    fetch('rooms.json').then(res => {
        if(res.ok){
            console.log('i get rooms');
            return res.json();
        }
        else{
            console.log('er get rooms :(');
            throw new Error ('er');
        }
    }).then(json=>{
        console.log('almost success');
        var usersRoom = json.rooms.split(',');
        console.log(json.rooms);
        console.log(json.rooms.split(','));
        render(usersRoom);
        updateData();
    })//.then(json=> usersRoom //наполняем массив инфой с json)
}

function getDevices(selectedRoom){
    alert('im work');
    console.log(selectedRoom);
    fetch('devices.json').then(res => {
        if(res.ok){
            console.log('i get devices');
            return res.json();
        }
        else{
            console.log('er get devices :(');
            throw new Error ('er');
        }
    }).then(json=>{
        console.log('almost success');
        var usersDevices
        if(selectedRoom=='livingroom'){
            console.log(json.livingroom);
            console.log(json.livingroom.split(','));
            usersDevices = json.livingroom.split(',');
        }
        else if(selectedRoom=='childroom'){
            console.log(json.childroom);
            console.log(json.childroom.split(','));
            usersDevices = json.childroom.split(',');
        }
        //очистить страницу
        cleanPage();
        renderDevices(usersDevices);
        // updateData();
    })
}

function cleanPage(){
    var roomsRow = document.querySelector('.row');
    roomsRow.remove();
}

function updateData(){

    var tempKitchen = document.getElementById('tempKitchen');
    if(tempKitchen!=undefined){

        const getTime = ()=>(new Date()).getSeconds();//функция делает одно действие и возвращает его результат афтоматически
        
        setInterval(() => {
            tempKitchen.textContent=getTime()+String.fromCharCode(176)+'C';//обновляем значение в html
        }, 1000);
        
        var tempBedroom = document.getElementById('tempBedroom');
        var tempChildroom = document.getElementById('tempChildroom');
    //запрос файла с температурой и другими датчиками
    fetch('data.json').then((response)=>{
        console.log('One');
        if(response.ok){
            console.log('Okkk');
            return response.json();
        }
        else{
            console.log('er');
            throw new Error ('er');
        }
    }).then((json)=>{
        console.log('gogod');
        //выгрузка в HTML значений температуры
        // console.log(tempBedroom.textContent);
        // tempBedroom.textContent=json.tempBed+String.fromCharCode(176)+'C';
        //tempChildroom.textContent=json.tempChild+String.fromCharCode(176)+'C';
    
    
        //_________
        $.ajax({  
            url: "transfer/temp-1.php",  
            cache: false,  
            success: function(html){  
                $("#tempBedroom").html(html); 
            }
         }); 
       $.ajax({  
            url: "transfer/temp-2.php",  
            cache: false,  
            success: function(html){  
                $("#tempChildroom").html(html); 
            }
         }); 
    })
    }

}

