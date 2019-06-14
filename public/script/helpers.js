

export function showHint(widget, str) {
    widget.innerHTML = str;
    // widget.className = 'hint active';
    widget.classList.toggle('errorLogOn');
}

export function hideHint(widget) {
    widget.innerHTML = '';
    // widget.className = 'hint';
    widget.classList.toggle('errorLogOn');
}


export function errorHandler(serverError, err) {
    showHint(serverError, err)
}