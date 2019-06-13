

function render(usersRoom){
    
    var place = document.querySelector('.row');
    console.log('kitchen');
    usersRoom.forEach(element => {
        if(element=='кухня'){
            place.insertAdjacentHTML('beforeend', kitchen);
        }
        else if(element=='спальня'){
            place.insertAdjacentHTML('beforeend', bedroom);
        }
        else if(element=='ванная'){
            place.insertAdjacentHTML('beforeend', bathroom);
        }
        else if(element=='детская'){
            place.insertAdjacentHTML('beforeend', childroom);
        }
        else if(element=='гостевая'){
            place.insertAdjacentHTML('beforeend', boysroom);
        }
        else if(element=='гостинная'){
            place.insertAdjacentHTML('beforeend', livingroom);
        }
    });
    
}

function renderLogin(){
    var place = document.querySelector('.container');
    place.insertAdjacentHTML('beforeend', login);

}

function renderDevices(usersDevices){
    var placeForDevices = document.querySelector('.container');
    usersDevices.forEach(element =>{
        if(element=='termostat'){
            console.log('termostat gen');
            placeForDevices.insertAdjacentHTML('afterbegin', termostat);
        }
        else if(element=='elCounter'){
            console.log('el Counter gen')
        }
        else if(element=='hygrometer'){
            console.log('hygrometer gen')
        }
        else if(element=='light'){
            console.log('light gen')
        }
    })
    
}



//в ссылках будет не html, а гет запрос на роут который высылает данные для рендера старницы с устройствами
const kitchen = `<div class="item">
<a href="kitchenDevices.html">
    <img src="images/kitchen.png" alt="" srcset="">
    <span>
        <div id="tempKitchen" class="temp dark">22</div>
        <i class="fas fa-thermometer-half dark"></i>
    </span>
</a>
<div class="shadow">Кухня</div>
</div>`;

const bedroom = `<div class="item">
<a href="">
    <img src="images/bedroom.png" alt="" srcset="">
    <span>
            <div id="tempBedroom" class="temp">22</div>
            <i class="fas fa-thermometer-half dark"></i>
        </span>
</a>
<div class="shadow">Спальня</div>
</div>`;

const bathroom = `<div class="item">
<a href="">
    <img src="images/bathroom.png" alt="" srcset="">
    <span>
            <div class="temp">22 &degC</div>
            <i class="fas fa-thermometer-half dark"></i>
        </span>
</a>
<div class="shadow">Ванная</div>
</div>`;

const childroom = `<div class="item">

<button onclick="getDevices('childroom')">
    <img src="images/childroom.png" alt="" srcset="">
    <span>
        <div id="tempChildroom" class="temp dark">22&degC</div> 
        <i class="fas fa-thermometer-half dark dark"></i>
    </span>
    </button>

<div class="shadow">Детская</div>
</div>`;

const boysroom = `<div class="item">
<a href="">
    <img src="images/boysroom.png" alt="" srcset="">
</a>
<div class="shadow">Гостевая</div>
</div>`;

const livingroom = `<div class="item">

<button onclick="getDevices('livingroom')">
    <img src="images/livingroom.png" alt="" srcset="">
    <span>
            <div class="temp">22 &degC</div>
            
            <i class="fas fa-thermometer-half dark"></i>
        </span>
        </button>

<div class="shadow">Гостинная</div>
</div>`;

// компонент входа
const login = `<div class="whiteSmBlock">
<h1>Вход</h1>
<hr>
<div class="smContainer">
    <div class="pa05"></div>
    <form id="loginForm" onsubmit="return false;">
    <input type="text" name="" id="userLogin" placeholder="Логин">
    <!-- <span class="errorLog">Неправильное имя полльзователя</span> -->
    <input type="password" autocomplete="on | off" name="" id="userPassword" placeholder="Пароль">
    <!-- <span class="errorLog">Неверный пароль</span> -->
    <div class="row">
        <a href="registration.html">Регистрация</a>
        <a href=""> Забыли пароль?</a>

        <button class="orangeBtn" id="btnSubmitLog" onclick="passwordCheck(); return false;">
            Вход
        </button>
    </div>
    </form>
        
    
</div>

</div>`;

// компоненты устройств
const termostat = `<div class="block">
<div class="blockHead"> Термостат</div>
<div class="row">
    <div class="smBlock pa">
        <i class="fas fa-thermometer-half fa-5x"></i>
    </div>
    <div class="smBlock pa">
        <p>
            выберете температуру регулирования  
        </p>
        <button id="tReg1" class="tempBtn tBtnL">t=22</button>
        <button id="tReg2" class="tempBtn tBtnR">t=11</button>
    </div>
    <div class="smBlock pa">
            <p>
                включить термостат  
            </p>
            <!-- button переключатель -->
            <form id="led">
                <label class="switch">
                <input id="termSwitch"  name="status" type="checkbox">
                <span class="slider round"></span>
                </label>
            </form>
    </div>
    <div class="smBlock pa">
            <p>
                состояние котла  
            </p>
            <i class="fab fa-gripfire fa-3x orange"></i>
        </div>
</div>
<hr>
<div class="row">
    <div class="smBlock pa textL">Кухня</div>
    <div id="content" class="smBlock pa textL">23</div>
</div>
<hr>
<div class="row">
        <div class="smBlock pa textL">Спальня</div>
        <div id="content-1" class="smBlock pa textL">23</div>
</div>
<hr>
<div class="row">
        <div class="smBlock pa textL">LED State</div>
        <div id="content-3" class="smBlock pa textL"></div>
</div>
<div class="row">
                        <a href="tempSettings.html">
                                <button class="tempBtn tBtn ma">Настройки</button>
                        </a>
                </div>
            </div>`;