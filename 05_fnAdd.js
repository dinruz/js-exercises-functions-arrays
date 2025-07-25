// I. Function 'add(num1, num2)'  - only returning the result

function add(num1, num2) {
  return num1 + num2;
}
add(5,37);

console.log (`But it could be printed in console like this: `, add(5,37));


// II. Function 'addStore(num3,num4) - storing the result in var 'total' - print it to the console

function addStore(num3,num4){
    let total = num3+num4;
    console.log(`Total is: ${total}`); 
    console.log(`...or print the result without storing in new variable: `,num3+num4)
 
}
addStore(25,98);

// III. Function 'addArrow(num5,num6)' - arrow function

let addArrow = (num5, num6) => console.log(num5 + num6);

addArrow(68,71);










// Call the 'add' function with the numbers 7 and 4,
// and store the returned result in a new variable named 'total'.


// Print the value of the 'total' variable to the console.
// Expected output: 11

// You can also call the function and log its result directly:
console.log(add(7, 4)); // Expected output: 11

// --- Shorter version using an arrow function (modern JavaScript syntax) ---

// Define an arrow function named 'addNumbers' that takes two parameters.
// This version directly logs the sum to the console instead of returning it.
// Note: If you need to return the value for further use, the first example is better.


// Call the arrow function.
addNumbers(7, 4); // Expected output: 11