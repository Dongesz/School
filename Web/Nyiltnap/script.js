let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = "";

function appendNumber(number) {
    if (!operation) {
        firstNumber += number;
        updateDisplay(firstNumber);
    } else {
        secondNumber += number;
        updateDisplay(secondNumber);
    }
}

function setOperation(op) {
    if (firstNumber) {
        operation = op;
    }
}

function calculate() {
    if (firstNumber && secondNumber && operation) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        if (operation === "+") {
            result = firstNumber + secondNumber;
        } else if (operation === "-") {
            result = firstNumber - secondNumber;
        } else if (operation === "*") {
            result = firstNumber * secondNumber;
        } else if (operation === "/") {
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                result = "Hiba: 0-val osztás!";
            }
        }

        updateDisplay(result);
        resetCalculator(result.toString()); // Az eredményt alapnak használjuk a további műveletekhez
    }
}

function clearDisplay() {
    resetCalculator();
    updateDisplay("");
}

function updateDisplay(value) {
    document.getElementById("display").value = value;
}

function resetCalculator(resetValue = "") {
    firstNumber = resetValue;
    secondNumber = "";
    operation = "";
    result = "";
}
