let inputNumber = document.querySelector(".input");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let zero = document.querySelector(".zro");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let plus = document.querySelector(".plus");
let subtract = document.querySelector(".subtract");
let mult = document.querySelector(".mult");
let divide = document.querySelector(".divide");
let equals = document.querySelector(".equals");

let firstNumber = null, secondNumber = 0;
let operation = null;
let newCalc = false;
let needReset = false

plus.addEventListener("click", (event) => {
    firstNumber = inputNumber.innerText;
    operation = "add";
    newCalc = false;
    needReset = true;
});
subtract.addEventListener("click", (event) => {
    firstNumber = inputNumber.innerText;
    operation = "subtract";
    newCalc = false;
    needReset = true;
});
mult.addEventListener("click", (event) => {
    firstNumber = inputNumber.innerText;
    operation = "multiply";
    newCalc = false;
    needReset = true;

});
divide.addEventListener("click", (event) => {
    firstNumber = inputNumber.innerText;
    operation = "divide";
    newCalc = false;
    needReset = true;

});

equals.addEventListener("click", (event) => {
    secondNumber = inputNumber.innerText;

    if(operation === "add") {
        inputNumber.innerText = parseFloat(firstNumber) + parseFloat(secondNumber);
        operation = null;
        newCalc = true;
        isSecondNumber = false;
    } else if(operation === "subtract") {
        inputNumber.innerText = parseFloat(firstNumber) - parseFloat(secondNumber);
        operation = null;
        newCalc = true;
    } else if(operation === "multiply") {
        inputNumber.innerText = (parseFloat(firstNumber) * parseFloat(secondNumber));
        operation = null;
        newCalc = true;
    } else {
        inputNumber.innerText = parseFloat(firstNumber) / parseFloat(secondNumber)
        operation = null;
        newCalc = true;
    };
});


clearBtn.addEventListener("click", (event) => {
    inputNumber.innerText = 0;
});

deleteBtn.addEventListener("click", (event) => {
    if(inputNumber.innerText.length === 1) {
        inputNumber.innerText = 0;
    } else {
        inputNumber.innerText = inputNumber.innerText.substring(0, inputNumber.innerText.length - 1);
    }
});

zero.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0") {
        inputNumber.innerText = 0;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 0;
    } else if(operation) {
        inputNumber.innerText = 0;
    } else if(newCalc === true) {
        inputNumber.innerText = 0;
        newCalc = false;
    } else {
        inputNumber.innerText += 0;
    }
});
one.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 1;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 1;
    } else if(operation && needReset) {
        inputNumber.innerText = 1;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 1;
        newCalc = false;
    } else {
        inputNumber.innerText += 1;
    }
});
two.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 2;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 2;
    } else if(operation && needReset) {
        inputNumber.innerText = 2;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 2;
        newCalc = false;
    } else {
        inputNumber.innerText += 2;
    }
});
three.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 3;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 3;
    } else if(operation && needReset) {
        inputNumber.innerText = 3;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 3;
        newCalc = false;
    } else {
        inputNumber.innerText += 3;
    }
});
four.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 4;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 4;
    } else if(operation && needReset) {
        inputNumber.innerText = 4;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 4;
        newCalc = false;
    } else {
        inputNumber.innerText += 4;
    }
});
five.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 5;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 5;
    } else if(operation && needReset) {
        inputNumber.innerText = 5;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 5;
        newCalc = false;
    } else {
        inputNumber.innerText += 5;
    }
});
six.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0"){
        inputNumber.innerText = 6;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 6;
    } else if(operation && needReset) {
        inputNumber.innerText = 6;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 6;
        newCalc = false;
    } else {
        inputNumber.innerText += 6;
    }
});
seven.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0") {
        inputNumber.innerText = 7;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 7;
    } else if(operation && needReset) {
        inputNumber.innerText = 7;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 7;
        newCalc = false;
    } else {
        inputNumber.innerText += 7;
    }
});
eight.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0") {
        inputNumber.innerText = 8;
    } else if(inputNumber.innerText.length === 24){
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 8;
    } else if(operation && needReset) {
        inputNumber.innerText = 8;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 8;
        newCalc = false;
    } else {
        inputNumber.innerText += 8;
    }
});
nine.addEventListener("click", (event) => {
    if(inputNumber.innerText === "0") {
        inputNumber.innerText = 9;
    } else if(inputNumber.innerText.length === 24) {
        inputNumber.innerText = inputNumber.innerText.substring(1, inputNumber.innerText.length);
        inputNumber.innerText += 9;
    } else if(operation && needReset) {
        inputNumber.innerText = 9;
        needReset = false;
    } else if(newCalc === true) {
        inputNumber.innerText = 9;
        newCalc = false;
    } else {
        inputNumber.innerText += 9;
    }
});
