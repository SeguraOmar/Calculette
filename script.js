let firstvalue = document.querySelector('#firstvalue');
let operandes = document.querySelector('#operandes');
let secondvalue = document.querySelector('#secondvalue');
let result = document.querySelector('#result');
let screen = firstvalue

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('myvalue')) {
        screen.value += e.target.value;
    }
    if (e.target.classList.contains('operandes')) {
        operandes.value = e.target.value;

        screen = secondvalue

    }
    if (e.target.classList.contains('result')) {
       
        if (operandes.value == '+') {
            result.value = parseFloat(firstvalue.value) + parseFloat(secondvalue.value);
        }
        if (operandes.value == '-') {
            result.value = parseFloat(firstvalue.value) - parseFloat(secondvalue.value);
        }
        if (operandes.value == '*') {
            result.value = parseFloat(firstvalue.value) * parseFloat(secondvalue.value);
        }
        if (operandes.value == '/') {
            result.value = parseFloat(firstvalue.value) / parseFloat(secondvalue.value);
        }
        
    }
    if (e.target.classList.contains('clear')) {
        firstvalue.value = '';
        operandes.value = '';
        secondvalue.value = '';
        result.value = '';
        screen = firstvalue
    }
    if(e.target.classList.contains('virgule') {
        screen.value = e.target.value;
    }
 
});

