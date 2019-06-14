

export function showHint(widget, str) {
    widget.innerHTML = str;
    widget.className = 'errorLogOn';
    //widget.classList.toggle('errorLogOn');
}

export function hideHint(widget) {
    widget.innerHTML = '';
    widget.className = 'erroeLogOn';
    // widget.classList.toggle('errorLogOn');
}


export function errorHandler(serverError, err) {
    showHint(serverError, err)
}