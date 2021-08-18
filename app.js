function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('calc-input').value;
    const success = document.getElementById('notify-success')
    const failed = document.getElementById('notify-failed')
    if (pin == typedNumber) {
        success.style.display = 'block';
        failed.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        failed.style.display = 'block';
    }
}