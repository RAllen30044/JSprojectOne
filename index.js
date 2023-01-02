var rs = require("readline-sync");

let total;
let operation = rs.question("What operation math would you like to perform? +  -  /  *  : ");
while((operation !== '*') && (operation !== '+') && (operation !== '-') && (operation !== '/')){
    operation = rs.question("You may ony select one of the following operators +, -, /, *. Try again: ");
    
}
console.log(`Your operation is ${operation}`);

let numberOne = rs.questionInt('Please enter the first number: ',{limit: /\.txt$/i,
limitMessage: 'This is not a number.'});
let numberTwo = rs.questionInt('Please enter the Second number: ',{limit: /\.txt$/i,
limitMessage: 'This is not a number.'});

function math(operator){

switch (operator) {
    case '+':
       total = numberOne + numberTwo; 
        break;
    case '-':
       total = numberOne - numberTwo; 
        break;
    case '/':

    total =  numberOne / numberTwo;
if ( (numberOne % numberTwo) !== 0){

        let mod = numberOne % numberTwo; 
        let result= (numberOne-mod)/numberTwo;
        total =  result + ' with a remainder of ' + mod; 
}
        break;
    case '*':
       total = numberOne * numberTwo; 
        break;

default:
   
        break;
}
console.log(`The result is ${total}.`);
}

math(operation);
