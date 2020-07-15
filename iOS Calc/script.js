let firstBuffer = [];
let secondBuffer = [];
let modBuffer = 0;
let resultScreen;
let firstValue;
let secondValue;

function displayValue() {

    let idValue = event.srcElement.id;
    if (modBuffer == 0) {
        firstBuffer.push(parseInt(idValue));
        firstValue = firstBuffer.join('');
        document.getElementById("result").innerHTML = firstValue;
    } else {
        secondBuffer.push(parseInt(idValue));
        secondValue = secondBuffer.join('');
        resultScreen = secondValue;
        document.getElementById("result").innerHTML = secondValue;
    };
};

function doPercent() {
    if (modBuffer == 0) {
        firstValue /= 100;
        document.getElementById("result").innerHTML = firstValue;
    } else {
        secondValue /= 100;
        document.getElementById("result").innerHTML = secondValue;
    };
};

function doOpposite() {
    if (firstValue !== 0 && modBuffer == 0) {
        firstValue = -firstValue;
        document.getElementById("result").innerHTML = firstValue;
    } else if (secondValue !== 0 && modBuffer !== 0) {
        secondValue = -secondValue;
        document.getElementById("result").innerHTML = secondValue;
    }
};

function storeMod() {
    let idValue = event.srcElement.id;
    if (idValue == "+") {
        modBuffer = "add";
    } else if (idValue == "-") {
        modBuffer = "minus";
    } else if (idValue == "/") {
        modBuffer = "divide";
    } else if (idValue == "*") {
        modBuffer = "multiply";
    };
};

function clearAll() {
    firstBuffer = [];
    secondBuffer = [];
    modBuffer = 0;
    document.getElementById("result").innerHTML = 0;
};

function calculate() {
    let computed = 0;
    if (modBuffer == "add") {
        computed = parseInt(firstValue) + parseInt(secondValue);
    } else if (modBuffer == "minus") {
        computed = firstValue - secondValue;
    } else if (modBuffer == "divide") {
        computed = firstValue / secondValue;
    } else if (modBuffer == "multiply") {
        computed = firstValue * secondValue;
    }
    document.getElementById("result").innerHTML = computed;
    firstValue = computed;
    secondBuffer = [];
    modBuffer = 0;
};