console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'.
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return "Hello, " + name + "!";
}//end helloName
// Remember to call the function to test
console.log('Test - should say "Hello, Dane!"', helloName("Dane"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  //return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}//end addNumbers
//call the function to test
console.log('Test - should say "10"', addNumbers(4, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
let answer = num1 * num2 * num3
return answer;
}
//call the function to test
console.log('Test - should say "27"', multiplyThree(3,3,3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }//end if
  else {
    return false;
  }  //end else
}//end isPositive

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
array = ["dog", "cat", "horse", "chicken", "cow"];
function getLast( array ) {
if (array.length === 0) {
  return undefined;
}//end if
else {
  return array[array.length - 1];
}//end else
}//end getLast

//call the function to test
console.log('Test - should say "cow"', getLast( array ));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
array = [9, 10, 26, 105, 15, 19, 8];
function find( value, array ) {
  let status = "false";
for (i=0; i<array.length; i++) {
  if (value === array[i]) {
    status = "true";
    }// end if
  }//end for
  return status;
}//end find

console.log('Test - should say "true"', find( 8, array ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
let status = false;
if (letter === string.charAt(0)) {
  status = true;
  }//end if
  return status;
}//end isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let array2 = [5, 6, 7];
function sumAll( array2 ) {
  let sum = 0;
  for (i=0; i<array2.length; i++) {
    sum = sum + array2[ i ];
  }//end for
  // TODO: loop to add items
  return sum;
}//end sumAll
console.log('Test - should say "18"', sumAll( array2 ));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let inputarray = [1, -2, 3, -4, 5];
let outputarray = [];
function positiveArray( inputarray ) {
  for (i=0; i<array.length; i++) {
      if (inputarray[i] > 0) {
        outputarray.push(inputarray[i]);
      }//end if
  }//end for
  return outputarray;
}//end positiveArray
console.log('Test - should say "[1, 3, 5]"', positiveArray( inputarray ));



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//write a function that converts hours to seconds
function hoursToSeconds( hours ) {
seconds = ( hours * 3600)
return seconds;
}//end hoursToSeconds
console.log('Test - should say "10800"', hoursToSeconds(3));
