//Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Cannot divide by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}

// Example usage:
const number1 = 10;
const operator = "+";
const number2 = 5;
const result = calculate(number1, operator, number2);
console.log(`Result: ${result}`);
