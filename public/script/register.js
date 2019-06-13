document.addEventListener('DOMContentLoaded', start);

function start() {
    const emailError = document.querySelector('.emailError');
    const passwordError = document.querySelector('.passwordError');
    const repasswordError = document.querySelector('.repasswordError');
    const serverError = document.querySelector(".serverError")

    const email = document.getElementById('email');
    const password = document.querySelector('#password')
    const repassword = document.getElementById("repassword")
    const submitBtn = document.querySelector("#submit")



    submitBtn.addEventListener('click', () => {       
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
    },
    false
);

}
