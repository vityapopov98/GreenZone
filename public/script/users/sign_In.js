import { showHint, hideHint, errorHandler } from "../helpers.js"
console.log("p")
document.addEventListener('DOMContentLoaded', start);

function start() {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('.emailError');
    const passwordError = document.querySelector('.passwordError');
    const serverError = document.querySelector(".serverError")

    const password = document.querySelector('#password')
    const sendBtn = document.querySelector("#submit")

    
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
    //тут делей не писал. не понимаю почему, но это работает
    email.addEventListener('keydown', emailErrorHandler.delayed(2000));

    password.addEventListener('input', () => {
        console.log("p"); 

    });


    sendBtn.addEventListener('click', (event) => {
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
        fetch("/sign_In", options).then(response => {
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
}
