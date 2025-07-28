# Javascript Exercises: Functions and Arrays (basics)

## Table of Contents 📖

- [Overview](#overview)
- [Installation & Usage](#installation--usage)
- [Difficulty levels](#dificulty-levels)
- [Functions exercises](#functions-exercises)
  - [About Functions exercises](#about-functions-exercises)
  - [List of Functions exercises](#list-of-functions-exercises)
- [Array exercises](#array-exercises)
  - [About Array exercises](#about-array-exercises)
  - [List of Array exercises](#list-of-array-exercises)
- [Resources](#resources)

## Overview

This repository showcases my solutions for various JavaScript **beginner-friendly** challenges and exercises during my learning from The Odin Project.

Focus is on fundamental concepts like **string manipulation**,**loops**, **functions** and **array methods**.
The solutions  are currently untested and may contain bugs. They serve as personal learning attempts.

This repo will be continuously updated with new exercises from various sources.

## Installation & Usage ⚙️

<details>
  <summary><strong> Fork & clone the repository</strong></summary>

 1. **Fork**

  Begin by forking this repository to your own GitHub account. Click the 'Fork' button on the top right of this page.

2. **Clone**

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
* or you can run any exercise file using Node.js. For example, to run the `01_camelize.js` array exercise:

  ```bash
    node array-exercises/01_camelize.js
  ```
</details>

## Dificulty levels

<details>
<summary><strong> Difficulty rating system used in this repository.<strong></summary> 


🟢 **Very Easy**

These tasks are perfect for first steps. 
They focus on basic syntax and direct instruction execution, requiring minimal complex thought.

🟡  **Easy**

These tasks involve connecting a few basic concepts or applying simple logic.
They might include variables, conditions, or straightforward loops.

🟠 **Medium**	

These tasks present a moderate challenge for beginners. 
They combine several fundamental ideas and might involve slightly more complex logic or basic array manipulations.

🔴  **Hard**	

These tasks are more complex and require combining multiple concepts or more involved algorithms. 
They are still approachable but might demand more time and iteration.
 </details>

---

## Functions exercises 🧩

### About Function exercises

These exercises were developed as part of:

**I. The Odin Project learning** - [Function Basics: Assignments](https://www.theodinproject.com/lessons/foundations-function-basics#assignment) | Foundations Course

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  * Exercises  01-04
  * Started:   June 2025 
  * Completed: June 2025

**II. Additional Practice Exercises**

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

  * Exercises  05 - 09
  * Started:   June 2025 
  * Completed: July 2025


### List of Functions exercises ✨

<details>
  <summary><strong>🟢 Exercise 1: Add7</strong></summary>

  Write a function called `add7()` that takes one number and returns that number + 7.
  Write function and test the output with `console.log``.

</details>

<details>
  <summary><strong>🟢 Exercise 2: Multiply</strong></summary>

Write a function called `multiply()` that takes 2 numbers and returns their product.
Write function and test the output with `console.log`.

</details>

<details>
  <summary><strong>🟢 Exercise 3: Capitalize</strong></summary>

Write a function called `capitalize()` that takes a string and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

</details>

<details>
  <summary><strong>🟢 Exercise 4: Last Letter </strong></summary>
  

Write a function called `lastLetter()` that takes a string and returns the very last letter of that string. 

```javascript
   lastLetter('abcd'); // should return: 'd' 
```
</details>

  ✔️ [Solutions: Function Exercises 01-04](./functions-exercises/basicFunctions.js)

<details>
  <summary><strong>🟢 Exercise 5: Function `Add()` - variations </strong></summary>
  
I. Write a function `add(num1, num2)` that returns the result. Use only 'return'.

II. Write similar function `addStore(num3,num4)` and store the result in a new variable 'total'. Print the value of the total variable to the console.

III. Write this function as arrow function - `addArrow(num5,num6)`.

  ✔️ [Solution: Add.js](./functions-exercises/05_fnAdd.js) 

</details>

<details>
  <summary><strong>🟡 Exercise 6: Print Even Numbers</strong></summary>
  
Write a function `printEvenNumbers(start, end)`.

Within this function, use a `for loop` to print all even numbers between start and end (inclusive of start and end if they are even). Finally, call the function with the range 1-15.

  ✔️ [Solution: PrintEven.js](./functions-exercises/06_fnPrintEven.js) 

</details>

<details>
  <summary><strong>🟡 Exercise 7: Roll the Dice</strong></summary>
  
Write a function `getDiceNumber(time)`. Argument represents the total number of times a standard dice should be rolled. Print the roll's sequence number and the result of that roll to the console.

Call the function which should roll the dice 8 times.

  ✔️ [Solution: rollDice.js](./functions-exercises/07_rollDice.js) 

</details>

<details>
  <summary><strong>🟡 Exercise 8: Until Six 🎲</strong></summary>
  
Write a function `getUntilSix()` and call it. It should simulate rolling a die repeatedly until the number 6 is rolled.

  ✔️ [Solution: getUntilSix.js](./functions-exercises/08_getUntilSix.js) 
 </details>

<details>
  <summary><strong>🟢 Exercise 9: Display products</strong></summary>
  
Write a function `displayProduct()` for displaying perfumery products. It takes a `name` (mandatory string) and `price` (optional number, defaults to '0.00 EUR'). If the product is complimentary, it's a free item and you should input only its name. However, the function must always print both the name and price, regardless of whether it's free or not.

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


These exercises were developed as part of:

**I. The Odin Project assignment** - challenges sourced from [javascript.info](https://javascript.info/array-methods#tasks).

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  * Exercises  01-07
  * Started:   June 2025
  * Completed: June 2025

**II. Additional Practice Exercises**

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

  * Exercises  08-09
  * Started:   June 2025
  * Completed: June 2025

---

### List of Array exercises ✨

<details>
  <summary><strong>🟠 Exercise 1: Camelize()</strong></summary>

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
  <summary><strong>🟡 Exercise 2: Filter range</strong></summary>

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
  <summary><strong>🟡 Exercise 3: Filter range in place </strong></summary>
  
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
  <summary><strong>🟢 Exercise 4: Sort in decreasing order </strong></summary>
  

  ```javascript
let arr = [5, 2, 1, -10, 8];
// ... 
  alert( arr ); // 8, 5, 2, 1, -10
  ```

[Solution: sortInDecreasingOrder.js](./array-exercises/04_sortInDecreasingOrder.js)
</details>

<details>
  <summary><strong>🟡 Exercise 5: Copy and sort array</strong></summary>


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
  <summary><strong>🔴 Exercise 6: Shuffle an array</strong></summary>

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
 💡 **Tip**: To use shuffle method, google [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). 
</details>


<details>
  <summary><strong>🟠 Exercise 7: Filter unique array members </strong></summary>

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
  <summary><strong>🟠 Exercise 8: FizzBuzz Pro </strong></summary>

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
  <summary><strong>🔴Exercise 9: cleanAndCapitalize() </strong></summary>

Write a function `cleanAndCapitalize(text)` that takes one string and transforms the text in the following way:

* remove all punctuation characters (.,;:!?_-)
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

<details>
  <summary><strong>🟢Exercise 10: Temperature Conversion </strong></summary>

Create an array named `tempC` containing several numbers. These numbers represent temperatures in Celsius.

Create a new array called `tempF`. Each element in the new array should be the corresponding Celsius temperature converted to Fahrenheit using the formula: `(temperature * 9/5) + 32`.

Output should look like this:

 ```javascript
 Temperature in Celsisus: 0,10,20,30,-5,15
 Temperature in Fahrenheit: 32,50,68,86,23,59
  ```

  ✔️ [Solution: tempConversion.js](./array-exercises/10_tempConversion.js)
</details>

<details>
  <summary><strong>🟢Exercise 11: Filter Words </strong></summary>

Create an array `words` containing strings 'augmentation','desk','building','bed','affiliate','ant','sunshine','Ann'.

Create a new array `longWords` that contains only the words whose length is greater than 6 characters.
Create another new array `startWithA` that contains only the words that start with the letter 'a'(case-insensitive).

Log all three arrays to the console. Output should look like this:

 ```javascript
 'Original array: augmentation,desk,building,bed,affiliate,ant,sunshine,Ann'
 'Only long words (>6 characters): augmentation,building,affiliate,sunshine'
 'Words with an A: augmentation,affiliate,ant,Ann'
  ```

  ✔️ [Solution: filterWords.js](./array-exercises/11_filterWords.js)
</details>

<details>
  <summary><strong>🟡 Exercise 12: Sum & Product  </strong></summary>

Create an array  `numbers` ([1, 2, 3, 4, 5]). 

Calculate the sum of all numbers in the array and store it in a variable `totalSum`.
Calculate the product of all numbers in the array amd store it in a variable `totalProduct`.

Output should look like this:

 ```javascript
  Array of numbers: 1,2,3,4,5
  Total sum: 15, total product: 120
  ```

  ✔️ [Solution: sumAndProduct.js](./array-exercises/12_sumAndProduct.js)
</details>


<details>
  <summary><strong>🟡 Exercise 13: Sum & Product  </strong></summary>

Create an array `testResults` containing numbers ([85, 92, 78, 65, 95, 70, 88]) representing test results.

- Locate the first result that is greater than 90. Store it in a variable `firstExcellent`.
- Find the index of the first result that is less than 70. Store it in a variable `indexFirstFailing`.
- Check if there is at least one result less than 60  and if all results are greater than 50. 

Output should look like this:

 ```javascript
Array with test results: 85,92,78,65,95,70,88
First excellent result (>90) is: 92 
First result below 70 is on position: 3
Are there any failing results? (<60): false
Is every result bigger than 50?: true
  ```

  ✔️ [Solution: testResults.js](./array-exercises/13_testResults.js)
</details>

<details>
  <summary><strong>🟠 Exercise 14: Discounted Prices  </strong></summary>

Create an array `productPrices` ([15.99, 23.50, 5.00, 12.75, 30.20, 8.99]).

Create a new array `discountedPrices` containing only prices that are greater than 10 and these prices should be reduced by 10%. Calculate the total sum of all discounted products. 


 ```javascript
 Product prices: 15.99,23.5,5,12.75,30.2,8.99
 All discounted prices: 14.391,21.15,11.475,27.18
 Discounted prices - total: 74.196
  ```

  ✔️ [Solution: discounted.js](./array-exercises/14_discounted.js)
</details>

---

## Resources 📚

This repository contains exercises and assignments with some content sourced from the following resources:

* [The Odin Project](https://www.theodinproject.com/)
* [javascript.info](https://javascript.info/) 