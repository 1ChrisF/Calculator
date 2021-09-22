let numB = "";
let numA = 0;
let operator = [];
let displayResult = 0;
let ans = 0;

const numbers = document.querySelectorAll(".number")
numbers.forEach(element => element.addEventListener('click', addNumToString));
const operators = document.querySelectorAll('.operator');
operators.forEach(element => element.addEventListener('click', putOperator));
const equalButton = document.getElementById("=");
equalButton.addEventListener('click', equals);

function addNumToString() {
    if (this.id == "." && numB == "" || this.id == "." && numB.indexOf(".") != -1) return;
    numB += this.id;
    displayInput(numB)
}
function displayInput(num){
    const inputDisplay = document.getElementById('input');
    inputDisplay.innerText = `Input:${num}`;
}

const displayRunningTotal = document.getElementById('result');
function runningUpdate(num) {
    displayRunningTotal.innerText = `Total:${num}`;
}
function putOperator() {
    if (numB.length === 0) return;
    if (operator.length === 0) {
        operator[0] = this.id;
        numB = parseFloat(numB);
        numA += numB;
        numB = "";
        runningUpdate(numA);
    } else {
        numB = parseFloat(numB);
        operate(operator[0], numA, numB);
        numB = "";
        runningUpdate(numA);
        operator[0] = this.id;
    };
    displayInput(0);
}
function lastNum() {
    return;
};
function operate(operator, a, b) {

    switch (operator) {
        case "plus":
            numA = a + b;
            break;
        case "-":
            numA = a - b
            break;
        case "*":
            numA = a * b
            break;
        case "/":
            numA = a / b;
    }
}
function equals() {
    if(numB === "")return runningUpdate(0);
    operate(operator[0], numA, parseFloat(numB));    
    numB = "";
    operator = [];
    runningUpdate(numA);
    displayInput(0);
    numA = 0;
}
//operators

/* window.addEventListener('keydown', function(e){
    console.log(e.key);
}) */