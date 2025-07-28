# Javascript Exercises: Functions and Arrays (basics)

## Table of Contents 📖

- [Overview](#overview)
- [Installation & Usage](#installation--usage)
- [Functions exercises](#functions-exercises)
  - [About Functions exercises](#about-functions-exercises)
  - [List of Functions exercises](#list-of-functions-exercises)
- [Array exercises](#array-exercises)
  - [About Array exercises](#about-array-exercises)
  - [List of Array exercises](#list-of-array-exercises)
- [Resources](#resources)

## Overview

This repository showcases my solutions for various JavaScript challenges and exercises during learning from The Odin Project, with a focus on fundamental concepts like **functions**, **array methods** and **string manipulation**. 

This repo will be continuously updated with new exercises from various sources.

## Installation & Usage ⚙️

<details>
  <summary><strong>1: Fork the repository</strong></summary>

 Begin by forking this repository to your own GitHub account. Click the 'Fork' button on the top right of this page.
</details>

<details>
  <summary><strong>2: Clone the repository</strong></summary>

  Open your terminal or command prompt and run the following command to clone the repository to your local machine:

  ```bash
    git clone https://github.com/dinruz/js-exercises-functions-arrays.git
  ``` 
</details>

<details>
  <summary><strong>Running specific exercise</strong></summary>

* Navigate to the project directory: 

 ```bash
    cd js-exercises-functions-arrays/array-exercises
  ```
* or you can run any JavaScript exercise file using Node.js. 

Make sure you have Node.js installed on your system.

For example, to run the `01_camelize.js` array exercise:

  ```bash
    node array-exercises/01_camelize.js
  ```
    
</details>


## Functions exercises 🧩

### About Function exercises

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

These exercises were developed as part of:

**I. The Odin Project learning** - [Function Basics: Assignments](https://www.theodinproject.com/lessons/foundations-function-basics#assignment) | Foundations Course

  * Exercises 01-04

  * Completed: June 2025

**II. Additional Practice Exercises**

  * Exercises 05 - ... 

  * Completed: July 2025

---

### List of Functions exercises ✨

<details>
  <summary><strong>Exercise 1: Add7</strong></summary>

  Write a function called `add7()` that takes one number and returns that number + 7.
  Write function and test the output with `console.log``.

</details>

<details>
  <summary><strong>Exercise 2: Multiply</strong></summary>

Write a function called `multiply()` that takes 2 numbers and returns their product.
Write function and test the output with `console.log`.

</details>

<details>
  <summary><strong>Exercise 3: Capitalize</strong></summary>

Write a function called `capitalize()` that takes a string and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

</details>

<details>
  <summary><strong>Exercise 4: Last Letter </strong></summary>
  

Write a function called `lastLetter()` that takes a string and returns the very last letter of that string. 

```javascript
   lastLetter('abcd'); // should return: 'd' 
```
</details>

  ✔️ [Solutions: Function Exercises 01-04](./functions-exercises/basicFunctions.js)

<details>
  <summary><strong>Exercise 5: Function `Add()` - variations </strong></summary>
  
I. Write a function `add(num1, num2)` that returns the result. Use only 'return'.

II. Write similar function `addStore(num3,num4)` and store the result in a new variable 'total'. Print the value of the total variable to the console.

III. Write this function as arrow function - `addArrow(num5,num6)`.

  ✔️ [Solution: Add.js](./functions-exercises/05_fnAdd.js) 

</details>

<details>
  <summary><strong>Exercise 6: Print Even Numbers</strong></summary>
  
Write a function `printEvenNumbers(start, end)`.

Within this function, use a `for loop` to print all even numbers between start and end (inclusive of start and end if they are even). Finally, call the function with the range 1-15.

  ✔️ [Solution: PrintEven.js](./functions-exercises/06_fnPrintEven.js) 

</details>

<details>
  <summary><strong>Exercise 7: Roll the Dice</strong></summary>
  
Write a function `getDiceNumber(time)`. Argument represents the total number of times a standard dice should be rolled. Print the roll's sequence number and the result of that roll to the console.

Call the function which should roll the dice 8 times.

  ✔️ [Solution: rollDice.js](./functions-exercises/07_rollDice.js) 

</details>

<details>
  <summary><strong>Exercise 8: Until Six 🎲</strong></summary>
  
Write a function `getUntilSix()` and call it. It should simulate rolling a die repeatedly until the number 6 is rolled.

  ✔️ [Solution: getUntilSix.js](./functions-exercises/08_getUntilSix.js) 
 </details>

<details>
  <summary><strong>Exercise 9: Display products</strong></summary>
  
Write a function `displayProduct()` for displaying perfumery products. It takes a `name` (mandatory string) and `price` (optional number, defaults to '0.00 EU'R). If the product is complimentary, it's a free item and you should input only its name. However, the function must always print both the name and price, regardless of whether it's free or not.

Call the function twice:

```javascript
 displayProduct('Java Eau de Parfum', 150)   
 displayProduct('Scripted body lotion - sample') 
```

  * [Solution: displayProduct.js](./functions-exercises/09_displayProduct.js) 
 </details>

---

## Array Exercises 🧩

### About Array exercises

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

These exercises were developed as part of:

**I. The Odin Project assignment** - challenges sourced from [javascript.info](https://javascript.info/array-methods#tasks).

  * Exercises 01-07

  * Completed: June 2025

**II. Additional Practice Exercises**

    * Completed: July 2025

---

### List of Array exercises ✨

<details>
  <summary><strong>Exercise 1: Camelize()</strong></summary>

  Write the function `camelize(str)` that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased. 
  
  Examples:

```javascript
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```

✔️ [Solution: Camelize.js](./array-exercises/01_camelize.js)

</details>

<details>
  <summary><strong>Exercise 2: Filter range</strong></summary>

  Write a function `filterRange(arr, a, b)` that gets an array `arr`, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
  For instance:

```javascript
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)
```

 ✔️ [Solution: filterRange.js](./array-exercises/02_filterRange.js)

</details>

<details>
  <summary><strong>Exercise 3: Filter range in place </strong></summary>
  
   Write a function `filterRangeInPlace(arr, a, b)` that gets an array `arr` and removes from it all values except those that are between a and b. The test is: 'a ≤ arr[i] ≤ b'.

  The function should only modify the array. It should not return anything.

```javascript
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]
```

 ✔️ [Solution: filterRangeInPlace.js](./array-exercises/03_filterRangeInPlace.js)</p>
</details>

<details>
  <summary><strong>Exercise 4: Sort in decreasing order </strong></summary>
  

  ```javascript
let arr = [5, 2, 1, -10, 8];
// ... 
  alert( arr ); // 8, 5, 2, 1, -10
  ```

[Solution: sortInDecreasingOrder.js](./array-exercises/04_sortInDecreasingOrder.js)
</details>

<details>
  <summary><strong>Exercise 5: Copy and sort array</strong></summary>


  We have an array of strings 'arr'. We’d like to have a sorted copy of it, but keep arr unmodified.

  Create a function `copySorted(arr)` that returns such a copy.

```javascript
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
```
 
  ✔️ [Solution: copyAndSortArray.js](./array-exercises/05_copyAndSortArray.js)
</details>

<details>
  <summary><strong>Exercise 6: Shuffle an array</strong></summary>

  Write the function `shuffle(array)` that shuffles (randomly reorders) elements of the array.
  Multiple runs of shuffle may lead to different orders of elements. 
  For instance:

```javascript
let arr = [1, 2, 3];
shuffle(arr);
    // arr = [3, 2, 1]
shuffle(arr);
    // arr = [2, 1, 3]
shuffle(arr);
    // arr = [3, 1, 2]
  // ...
```
All element orders should have an equal probability. 
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
 

 ✔️ [Solution: shuffleAnArray.js](./array-exercises/06_shuffleAnArray.js)
</details>


<details>
  <summary><strong>Exercise 7: Filter unique array members </strong></summary>

Let `arr` be an array. Create a function `unique(arr)` that should return an array with unique items of 'arr'.
For instance:

 ```javascript
 
 function unique(arr) {
    /* your code */
    }
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    alert( unique(strings) ); // Hare, Krishna, :-O
```

 ✔️ [Solution: filterUnique.js](./array-exercises/07_filterUnique.js)
</details>

<details>
  <summary><strong>Exercise 8: FizzBuzz Pro </strong></summary>

Write a function `fizzBuzzPro(number)` that generates a modified FizzBuzz sequence up to a given number.

Function should: 

  - iterate from 1 up to number;
  - apply **standard FizzBuzz rules:**
    * print "FizzBuzz" for multiples of both 3 and 5;
    * print "Fizz" for multiples of 3;
    * print "Buzz" for multiples of 5;

  - apply **special rule**:
    * if a number contains the digit "7", it outputs "Bang!" instead of any FizzBuzz variant

   - return a single string of the results, separated by `, ` with a `.` at the very end.


 ```javascript
 
    fizzBuzzPro(20) // Expected: "1, 2, Fizz, 4, Buzz, Fizz, Bang!, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, Bang!, 18, 19, Buzz."
```

  ✔️ [Solution: fizzBuzzPro.js](./array-exercises/08_fizzBuzzPro.js)
</details>

<details>
  <summary><strong>Exercise 9: cleanAndCapitalize() </strong></summary>

Write a function `cleanAndCapitalize(text)` that takes one string and transforms the text in the following way:

* remove all punctuation characters (`.`,`,``;`,`:`,`!`,`?`,`-`,`_`)
* capitalize the first letter of each word
* standardize spaces (only one space between words)

The function should return the final string like this:


 ```javascript
    cleanAndCapitalize("tHis-is somE--stranGE. text! ")
    // Expected output: "This Is Some Strange Text"

    cleanAndCapitalize(" THIS.one...   TOo_  ")
    // Expected output: "This One Too"
  ```

  ✔️ [Solution: cleanAndCapitalize.js](./array-exercises/09_cleanAndCapitalize.js)
</details>



## Resources 📚

This repository contains exercises and assignments with some content sourced from the following resources:

* [The Odin Project](https://www.theodinproject.com/)
* [javascript.info](https://javascript.info/) 