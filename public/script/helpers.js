

export function showHint(widget, str) {
    widget.innerHTML = str;
    widget.className = 'errorLogOn';
    //widget.classList.toggle('errorLogOn');
}

export function hideHint(widget) {
    widget.innerHTML = '';
    widget.className = 'erroeLogOff';
    // widget.classList.toggle('errorLogOn');
}


export function errorHandler(serverError, err) {
    showHint(serverError, err)
}

//обработчик почты
// export function emailErrorHandler(){
//     if(!(/.*@.*\.[A-z]/.test(email.value))){
//         //ошибка
//         email.classList.add('errorInput');
//         errorHandler(emailError, 'Введите, пожалуйста, правильный email')
//     }
//     else{
//         email.classList.remove('errorInput');
//         hideHint(emailError);
//     }
// }

//задержка обработчиков
Function.prototype.delayed = function (delay) { // копипаст с хабра
    var timer = 0;
    var callback = this;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
};