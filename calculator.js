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
    if (this.id == "." && numB == "")return;
    if (this.id == "." && numB.indexOf(".") != -1) return;
    if (numB.length > 14)return;        
    numB += this.id;
    displayInput(this.id)
}
function displayInput(expression) {
    const inputDisplay = document.getElementById('input');
    inputDisplay.innerText += `${expression}`;

}
function clearExpression(){
    document.getElementById('input').innerText = "Input:";
}

const displayRunningTotal = document.getElementById('result');
function runningUpdate(num) {
    displayRunningTotal.innerText = `Total:${num}`;
}
function putOperator() {
    if (numB.length === 0) return;
    if (operator.length === 0) {
        operator[0] = this.id;
        numB = Number(numB);
        numA += numB;
        numB = "";
        displayInput(this.id)       
    } else {
       
        numB = Number(numB);
        operate(operator[0], numA, numB);
        numB = "";
        clearExpression()
        runningUpdate(numA);
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
            break
        default: numA = b
    }
}
function equals() {
    operate(operator[0], numA, Number(numB));
    numB = "";
    operator = [];
    runningUpdate(+(numA.toFixed(15)));
    clearExpression();
    numA = 0;
}

/* window.addEventListener('keydown', function(e){
    console.log(e.key);
}) */