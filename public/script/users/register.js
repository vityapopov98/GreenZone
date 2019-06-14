import { showHint, hideHint, errorHandler } from "../helpers.js"


document.addEventListener('DOMContentLoaded', start);

function start() {
    const serverError = document.querySelector(".serverError")

    const passwordError = document.querySelector('.passwordError');
    const repasswordError = document.querySelector('.repasswordError');

    const email = document.getElementById('email');
    const password = document.querySelector('#password')
    const repassword = document.getElementById("repassword")
    const submitBtn = document.querySelector("#submit")


    email.addEventListener('input', () => {
        console.log("e"); 
        if(!(/.*@.*\.[A-z]/.test(email.value))){
            //ошибка
            errorHandler(email, 'Введите, пожалуйста, правильный email')
        }
    });

    password.addEventListener('input', () => {
        console.log("p"); 
        if(!(password.value === repassword.value)){
            errorHandler(passwordError, 'пароли не совпадают');
        }
    });

    repassword.addEventListener('input', () => {
        console.log("r"); 
        if(!(password.value === repassword.value)){
            errorHandler(repasswordError, 'пароли не совпадают');
        }
    });

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
                            "password": password.value
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
