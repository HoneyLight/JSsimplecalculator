function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function modulus(x, y) {
    return x % y;
}

function simpleCalc() {
    var operator = prompt("CALCULATOR \n Choose your operator: e.g +, -, *, /, %");
    var x = Number(prompt("CALCULATOR \n Insert your first number:"));
    var y = Number(prompt("CALCULATOR \n Insert your second number:"));
    var result = 0;

    if (operator == "+") {
        result = add(x, y);
        alert(x + "+" + y);
    }
    else if(operator == "-") {
        result = subtract(x, y);
        alert(x + "-" + y);
    }
    else if(operator == "*") {
        result = multiply(x, y);
        alert(x + "*" + y);
    }
    else if(operator == "/") {
        result = divide(x, y);
        alert(x + "/" + y);
    }
    else if(operator == "%") {
        result = modulus(x, y);
        alert(x + "%" + y);
    }
    else {
        alert("Insert a valid operator or number");
    }
    alert(result);
}
simpleCalc();