// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

  function reverseStringWithoutMethod(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
 const result = reverseStringWithoutMethod("Mozilla");
  console.log(result);