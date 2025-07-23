# Javascript Exercises: Functions and Arrays (basics)

## Table of Contents

- [Overview](#overview)
- [Installation & Usage](#installation--usage)
- [Functions exercises](#functions-exercises)
  - [List of Functions exercises](#list-of-functions-exercises)
- [Array exercises](#array-exercises)
  - [List of Array exercises](#list-of-array-exercises)
- [Resources](#resources)

## Overview

This repository showcases my progress and solutions for various JavaScript challenges during learning from The Odin Project, with a focus on fundamental concepts like **functions**, **array methods** and **string manipulation**. This repo will be continuously updated with new exercises from various sources.

## Installation & Usage

1.  **Fork the repository:**
    Begin by forking this repository to your own GitHub account. Click the "Fork" button on the top right of this page.

2.  **Clone the repository:**
    Open your terminal or command prompt and run the following command to clone the repository to your local machine:

    ```bash
    `git clone https://github.com/dinruz/js-exercises-functions-arrays.git`
    ```

3.  **Navigate to the project directory:**

    ```bash
    cd js-exercises-functions-arrays
    ```

4.  **Run a specific exercise:**
    You can run any JavaScript exercise file using Node.js. Make sure you have Node.js installed on your system.

    For example, to run the `01_camelize.js` array exercise:

    ```bash
    node array-exercises/01_camelize.js
    ```

## Functions exercises 

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  **Developed as part of:** [Function basics: assignments](https://www.theodinproject.com/lessons/foundations-function-basics#assignment) from Foundations Course, The Odin Project Curriculum.

  **Creation Date:** 22-06-2025

  **Completion Date:** 22-06-2025


### List of Functions exercises

<details>
  <summary><strong>Exercise 1: add7</strong></summary>

  <p>
    Write a function called **add7** that takes one number and returns that number + 7.
    Write function and test the output with *console.log*.
  </p>
</details>

<details>
  <summary><strong>Exercise 2: multiply</strong></summary>

  <p>
    Write a function called **multiply** that takes 2 numbers and returns their product.
    Write function and test the output with *console.log*.
  </p>
</details>

<details>
  <summary><strong>Exercise 3: capitalize</strong></summary>

  <p>
    Write a function called **capitalize** that takes a string and returns that string with only the first letter capitalized. 
    Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
  </p>
</details>

<details>
  <summary><strong>Exercise 4: lastLetter </strong></summary>
  
  <p>
    Write a function called **lastLetter** that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d".  
  </p>
</details>

[Solutions: Function exercises 01-04](./functions-exercises/basicFunctions.js)

## Array Exercises

  ![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  **Developed as part of:** The Odin Project assignment, challenges sourced from [javascript.info](https://javascript.info/array-methods#tasks).

  **Creation Date:** 16-07-2025

  **Completion Date:** 23-07-2025


### List of Array exercises

<details>
  <summary><strong>Exercise 1: Camelize()</strong></summary>
  <p>
  Write the function `camelize(str)` that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. 
    
  That is: removes all dashes, each word after dash becomes uppercased.

    Examples:

    ```javascript
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    ```
  </p>

[Solution: Camelize.js](./array-exercises/01_camelize.js)

</details>

<details>
  <summary><strong>Exercise 2: Filter range</strong></summary>

  <p>
  Write a function `filterRange(arr, a, b)` that gets an array `arr`, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

  For instance:

    ```javascript
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    alert( filtered ); // 3,1 (matching values)
    // alert( arr ); // 5,3,8,1 (not modified)
    ```
  </p>

[Solution: filterRange.js](./array-exercises/02_filterRange.js)

</details>

<details>
  <summary><strong>Exercise 3: Filter range in place </strong></summary>
  
  <p>
  Write a function `filterRangeInPlace(arr, a, b)` that gets an array `arr` and removes from it all values except those that are between a and b. The test is: `a ≤ arr[i] ≤ b`.
  The function should only modify the array. It should not return anything.

    ```javascript
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    // alert( arr ); // [3, 1]
    ```

 [Solution: filterRangeInPlace.js](./array-exercises/03_filterRangeInPlace.js)</p>
</details>

<details>
  <summary><strong>Exercise 4: Sort in decreasing order </strong></summary>
  
  <p>

    ```javascript
    let arr = [5, 2, 1, -10, 8];
    // ... your code to sort it in decreasing order
    // alert( arr ); // 8, 5, 2, 1, -10
    ```
  </p>

[Solution: sortInDecreasingOrder.js](./array-exercises/04_sortInDecreasingOrder.js)
</details>

<details>
  <summary><strong>Exercise 5: Copy and sort array</strong></summary>

  <p>
  We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

  Create a function `copySorted(arr)` that returns such a copy.

    ```javascript

    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert( sorted ); // CSS, HTML, JavaScript
    // alert( arr ); // HTML, JavaScript, CSS (no changes)

    ```
  </p>

 
 [Solution: copyAndSortArray.js](./array-exercises/05_copyAndSortArray.js)
</details>

<details>
  <summary><strong>Exercise 6: Shuffle an array</strong></summary>

  <p>
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
  </p>

 [Solution: shuffleAnArray.js](./array-exercises/06_shuffleAnArray.js)
</details>


<details>
  <summary><strong>Exercise 7: Filter unique array members </strong></summary>

  <p>
Let arr be an array. Create a function `unique(arr)` that should return an array with unique items of arr.
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
</p>

[Solution: filterUnique.js](./array-exercises/07_filterUnique.js)
</details>

## Resources

## Resources

This repository is built upon exercises and assignments primarily sourced from here:

* [The Odin Project](https://www.theodinproject.com/)
* [javascript.info](https://javascript.info/) 