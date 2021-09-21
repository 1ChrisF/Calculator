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
    numB += this.id;
    console.log(this.id, numB);
    runningUpdate(numB)
}
const displayRunningTotal = document.getElementById('result');
function runningUpdate(num) {
    displayRunningTotal.innerText = `Total:${num}`;
}
function putOperator() {
    if (numB.length === 0) return;
    if (operator.length === 0) {
        operator[0] = this.id;
        numB = parseInt(numB);
        numA += numB;
        numB = "";
        runningUpdate(numA);
    } else {
        numB = parseInt(numB);
        operate(operator[0], numA, numB);
        numB = "";
        operator[0] = this.id;
    };
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
    operate(operator[0], numA, parseInt(numB));
    numB = "";
    operator = [];
    runningUpdate(numA);
    numA = 0;
}
//operators

/* window.addEventListener('keydown', function(e){
    console.log(e.key);
}) */