import { showHint, hideHint, errorHandler } from "../helpers.js"


document.addEventListener('DOMContentLoaded', start);

function start() {
    const serverError = document.querySelector(".serverError")

    const emailError = document.querySelector('.emailError');
    const passwordError = document.querySelector('.passwordError');
    const repasswordError = document.querySelector('.repasswordError');

    const email = document.getElementById('email');
    const password = document.querySelector('#password')
    const repassword = document.getElementById("repassword")
    const submitBtn = document.querySelector("#submit")

    const name = document.querySelector("#userName")
    const surname = document.querySelector("#userSurname")

    //обработчики ошибок полей регистрации
    function emailErrorHandler(){
        if(!(/.*@.*\.[A-z]/.test(email.value))){
            //ошибка
            email.classList.add('errorInput');
            errorHandler(emailError, 'Введите, пожалуйста, правильный email')
        }
        else{
            email.classList.remove('errorInput');
            hideHint(emailError);
        }
    }

    function repasswordErrorHandler(){
        if(!(password.value === repassword.value)){
            password.classList.add('errorInput');
            repassword.classList.add('errorInput');
            errorHandler(passwordError, 'пароли не совпадают');
            errorHandler(repasswordError, 'пароли не совпадают');
        }
        else{
            password.classList.remove('errorInput');
            repassword.classList.remove('errorInput');
            hideHint(passwordError);
            hideHint(repasswordError);
        }
    }

    //задержка обработчиков
    Function.prototype.delayed = function (delay) { // копипаст с хабра
        var timer = 0;
        var callback = this;
        return function() {
            clearTimeout(timer);
            timer = setTimeout(callback, delay);
        };
    };

    email.addEventListener('keydown', emailErrorHandler.delayed(2000));
    
//ненужный как мне кажется
    password.addEventListener('input', () => {
        // if(!(password.value === repassword.value)){
        //     password.classList.add('errorInput');
        //     errorHandler(passwordError, 'пароли не совпадают');
        // }
    });

    repassword.addEventListener('keydown', repasswordErrorHandler.delayed(2000));

    submitBtn.addEventListener('click', () => {       
        if(password.value===repassword.value){//если пользователь ввел парольдва раза правильно
            console.log(email.value)
            console.log(password.value)
            // валидация на фронте пройдена, делаем запрос к серверу и смотрим на его ответ
                    console.log("запрос")
                
                    const options = {
                        method:"post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": email.value,
                            "password": password.value,
                            "name": name.value,
                            "surname": surname.value
                        })
                    }
                    
                    fetch("/register", options).then(response => {
                        if (response.ok) {
                            document.location.href = "/"
                        } else {
                            response.text().then(error => {
                                console.log(error)
                                errorHandler(serverError, error)
                            })
                        }
                    }).catch(err => {
                        console.error(err)
                    })
        }
    },
    false
);

}

