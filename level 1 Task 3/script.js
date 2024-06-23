let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (firstOperand !== null) {
        calculateResult();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    const secondOperand = currentInput;
    const result = evaluate(firstOperand, secondOperand, operator);
    updateDisplay(result);
    currentInput = result;
    firstOperand = null;
    operator = '';
}

function evaluate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    if (isNaN(num1) || isNaN(num2)) return '';
    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return num2 !== 0 ? (num1 / num2).toString() : 'Error';
        default:
            return '';
    }
}

function updateDisplay(value) {
    display.textContent = value;
}
