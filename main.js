// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

  function reverseStringWithoutMethod(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
 const newString = reverseStringWithoutMethod("hello world");
  console.log(newString);

//   Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


const sumPositveNum =(arr)=>{
    let negatives = [];
   let sum =0;
   for(let i = 0; i<arr.length; i++){
    if(arr[i] < 0) {
        negatives.push(arr[i]);
      }else{
        sum += arr[i];
      }
   }
   return sum;
}
const totalOfAllPositiveNum = sumPositveNum([12,-2,-3,4])
console.log(totalOfAllPositiveNum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const numbers= [2, 2, 2, 3, 3, 5, 6, 7, 8, 8]

function mostOFNumber(arr) {
    const store = {}
    arr.forEach((num) => store[num] ? store[num] += 1 : store[num] = 1)
    return Object.keys(store).sort((a, b) => store[b] - store[a])[0]
  }

console.log(mostOFNumber(numbers))

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);



    

