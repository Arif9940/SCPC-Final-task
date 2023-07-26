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


