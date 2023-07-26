// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

  function reverseStringWithoutMethod(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
 const result = reverseStringWithoutMethod("hello world");
  console.log(result);

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

    

