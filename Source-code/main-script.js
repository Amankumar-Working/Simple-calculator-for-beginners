var inputValue = "";    // To store values entered by the users
var isPeriodUsed = false;
var operator = "";
var result = "_";   // Result to show

function pressedNum(which) {
    inputValue += which;
    document.getElementById('input').value = inputValue;
}

function pressedPeriod() {
    if (!isPeriodUsed && inputValue.length != 0) {
        inputValue += ".";
        isPeriodUsed = true;
        document.getElementById('input').value = inputValue;
    }
}

function pressedBack() {
    if (inputValue.length != 0) {
        if (inputValue.charAt(inputValue.length - 1) == '.') {
            isPeriodUsed = false;
        }
        inputValue = inputValue.substring(0, inputValue.length - 1);
        document.getElementById('input').value = inputValue;
    }
}

function pressedClear() {
    inputValue = "";
    isPeriodUsed = false;
    result = "_";
    document.getElementById('input').value = inputValue;
    document.getElementById('result').innerHTML = result;
}

function pressedAdd() {
    if (inputValue.length != 0) {
        if (result == "_") {
            result = parseFloat(inputValue);
        } else {
            result += parseFloat(inputValue);
        }

        operator = "+";
        inputValue = "";
        isPeriodUsed = false;
        document.getElementById('input').value = inputValue;
        document.getElementById('result').innerHTML = result + " " + operator;
    }
}

function pressedMinus() {
    if (inputValue.length != 0) {
        if (result == "_") {
            result = parseFloat(inputValue);
        } else {
            result -= parseFloat(inputValue);
        }

        operator = "-";
        inputValue = "";
        isPeriodUsed = false;
        document.getElementById('input').value = inputValue;
        document.getElementById('result').innerHTML = result + " " + operator;
    }
}

function pressedMultiply() {
    if (inputValue.length != 0) {
        if (result == "_") {
            result = parseFloat(inputValue);
        } else {
            result *= parseFloat(inputValue);
        }

        operator = "x";
        inputValue = "";
        isPeriodUsed = false;
        document.getElementById('input').value = inputValue;
        document.getElementById('result').innerHTML = result + " " + operator;
    }
}

function pressedDivide() {
    if (inputValue.length != 0) {
        if (result == "_") {
            result = parseFloat(inputValue);
        } else {
            result /= parseFloat(inputValue);
        }

        operator = "/";
        inputValue = "";
        isPeriodUsed = false;
        document.getElementById('input').value = inputValue;
        document.getElementById('result').innerHTML = result + " " + operator;
    }
}

function pressedEquals() {
    if (inputValue.length != 0) {
        if (result == "_") {
            result = parseFloat(inputValue);
        } else {
            if (operator == "+") {
                result += parseFloat(inputValue);
            } else if (operator == "-") {
                result -= parseFloat(inputValue);
            } else if (operator == "x") {
                result *= parseFloat(inputValue);
            } else if (operator == "/") {
                result /= parseFloat(inputValue);
            }
        }
    }

    operator = "";
    inputValue = "";

    document.getElementById('input').value = inputValue;
    document.getElementById('result').innerHTML = result + operator;

    disableAllNonClearButtons();
}

function pressedReset() {
    pressedClear();
    enableAllNonClearButtons();
}

function enableAllNonClearButtons() {
    document.getElementById('zero').disabled = false;
    document.getElementById('one').disabled = false;
    document.getElementById('two').disabled = false;
    document.getElementById('three').disabled = false;
    document.getElementById('four').disabled = false;
    document.getElementById('five').disabled = false;
    document.getElementById('six').disabled = false;
    document.getElementById('seven').disabled = false;
    document.getElementById('eight').disabled = false;
    document.getElementById('nine').disabled = false;

    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('multiply').disabled = false;
    document.getElementById('divide').disabled = false;

    document.getElementById('decimal-point').disabled = false;
    document.getElementById('equals').disabled = false;
    document.getElementById('back').disabled = false;
    document.getElementById('clear').disabled = false;
}

function disableAllNonClearButtons() {
    document.getElementById('zero').disabled = true;
    document.getElementById('one').disabled = true;
    document.getElementById('two').disabled = true;
    document.getElementById('three').disabled = true;
    document.getElementById('four').disabled = true;
    document.getElementById('five').disabled = true;
    document.getElementById('six').disabled = true;
    document.getElementById('seven').disabled = true;
    document.getElementById('eight').disabled = true;
    document.getElementById('nine').disabled = true;

    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('multiply').disabled = true;
    document.getElementById('divide').disabled = true;

    document.getElementById('decimal-point').disabled = true;
    document.getElementById('equals').disabled = true;
    document.getElementById('back').disabled = true;
    document.getElementById('clear').disabled = true;
}
