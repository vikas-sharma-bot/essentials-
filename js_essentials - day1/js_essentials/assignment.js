const operator = prompt('Enter operator to perform the calculation ( either +, -, *, / ,%,> or <): ');

const a = parseFloat(prompt('Enter the first number: '));
const b = parseFloat(prompt('Enter the second number: '));


sum = a + b
diff = a - b
mul = a * b
div = a / b
mod = a % b
greater = a > b
less = a < b


let result;   


if (operator == '+') { 
    result = a + b;
}
else if (operator == '-') { 
    result = a - b;
}
else if (operator == '*') { 
    result = a * b;
}
else if (operator == '/'){
    result = a / b; 
}
else if (operator == '%'){
    result = a % b;
}
else if (operator == '>'){
    result = a > b;
}
else {
    result = a < b;
}





window.alert(" Result is" + result);