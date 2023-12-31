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
const operator = prompt(' For task 5 Enter operator ( either +, -, * or / ): ');

// // take the operand input
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

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

  const passwordBOx = document.getElementById('Password');
  const length = 12;
  const upperCases ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const symboll = '!@#$%^&*()?><';
  const numberForpass ='0123456789';
  const totalPassword = upperCases + lowerCase + symboll + numberForpass;

  function createPassword(){
    let password ='';
    password += upperCases[Math.floor(Math.random() * upperCases.length) ];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length) ];
    password += symboll[Math.floor(Math.random()* symboll.length) ];
    password += numberForpass[Math.floor(Math.random()* numberForpass.length) ];

    while(length>password){
        password +=totalPassword[Math.floor(Math.random()* totalPassword.length) ];  
    }
    passwordBOx.value = password;
  }
    
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

let arrOfNum =[14,58,89,67,8,97,86,96,99,98,59];
 
const newArrOfNum = arrOfNum.sort((a,b)=>a-b).reverse();

console.log(newArrOfNum[1]);
