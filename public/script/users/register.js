import { showHint, hideHint, errorHandler } from "../helpers.js"


document.addEventListener('DOMContentLoaded', start);

function start() {
    const serverError = document.querySelector(".serverError")

    const email = document.getElementById('email');
    const password = document.querySelector('#password')
    const repassword = document.getElementById("repassword")
    const submitBtn = document.querySelector("#submit")


    email.addEventListener('input', () => {
        console.log("e"); 
    });

    password.addEventListener('input', () => {
        console.log("p"); 
    });

    repassword.addEventListener('input', () => {
        console.log("r"); 
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
