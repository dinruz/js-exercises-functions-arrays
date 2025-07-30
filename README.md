# Javascript Exercises: Functions and Arrays (Foundations)

## Table of Contents 📖

- [Overview](#overview)
- [Installation & Usage](#installation--usage)
- [Functions exercises](#functions-exercises)
  - [About Functions exercises](#about-functions-exercises)
  - [List of Functions exercises](#list-of-functions-exercises)
  - [Detailed Function Exercises Descriptions](#detailed-function-exercises-descriptions)
- [Array exercises](#array-exercises)
  - [About Array exercises](#about-array-exercises)
  - [List of Array exercises](#list-of-array-exercises)
  - [Detailed Array Exercises Descriptions](#detailed-array-exercises-descriptions)
- [Resources](#resources)

---

## Overview 🌱

This repository contains various Javascript exercises and challenges with my solutions (which are currently untested).

Focus is on fundamental concepts like **string manipulation**, **loops**, **functions** and **array methods**.

This repo will be continuously updated with new exercises from various sources.

---

## Installation & Usage ⚙️

1.  **Fork the repository**

  Begin by forking this repository to your own GitHub account. Click the 'Fork' button on the top right of this page.

2.  **Clone it**

  Open your terminal or command prompt and run the following command to clone the repository to your local machine:
  
    ```bash

    git clone https://github.com/dinruz/js-exercises-functions-arrays.git
    ```

<details>
  <summary><strong>Running specific exercise</strong></summary>

  First, navigate into the cloned repository's root directory:

  ```bash
  cd js-exercises-functions-arrays
  ```
 Then, you can run any exercise file using Node.js. For example, to run the '01_camelize.js' array exercise:

```bash
node array-exercises/01_camelize.js
```
Or, if you navigate into the specific exercise folder (e.g., 'array-exercises'):

```bash
cd array-exercises
# Then run the exercise file directly
node 01_camelize.js
```
</details>

---

## Functions exercises 🧩

### About Function exercises

These exercises were developed as part of:

**I. The Odin Project learning** - [Function Basics: Assignments](https://www.theodinproject.com/lessons/foundations-function-basics#assignment) | Foundations Course

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  * Exercises  **01-04**
  * Started:   June 2025 
  * Completed: June 2025

**II. Chris Pine: *Learn to Program***, [Chapter VI: Flow control](https://pine.fm/LearnToProgram/chap_06.html) | Exercises in section 'A Few Things To Try'

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  * Exercises  **10 - 11**
  * Started:   June 2025 
  * Completed: June 2025

**III. Additional Practice Exercises**

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

  * Exercises  **05 - 09, 12**
  * Started:   June 2025 
  * Completed: July 2025



### List of Functions exercises ✨

| No. | Exercise Name          | Status      | Solution Link       |
| :-- | :--------------------- | :---------- | :------------------ |
| 1   | [Add7](#exercise-fn-1-add7)|   ✔️   | [Solution](./functions-exercises/01-04_basicFn.js) |
| 2   | [Multiply](#exercise-fn-2-multiply)|   ✔️  | [Solution](./functions-exercises/01-04_basicFn.js) |
| 3   | [Capitalize](#exercise-fn-3-capitalize)|   ✔️  | [Solution](./functions-exercises/01-04_basicFn.js) |
| 4   | [Last Letter](#exercise-fn-4-last-letter)|   ✔️  | [Solution](./functions-exercises/01-04_basicFn.js) |
| 5   | [Function Add() - variations](#exercise-fn-5-add)|  ✔️  | [Solution](./functions-exercises/05_fnAdd.js) |
| 6   | [Print Even Numbers](#exercise-fn-6-print-even-numbers)|  ✔️  | [Solution](./functions-exercises/06_fnPrintEven.js) |
| 7   | [Roll the Dice](#exercise-fn-7-roll-the-dice)|  ✔️ | [Solution](./functions-exercises/07_rollDice.js) |
| 8   | [Until Six](#exercise-fn-8-until-six)|  ✔️ | [Solution](./functions-exercises/08_getUntilSix.js) |
| 9   | [Display products](#exercise-fn-9-display-products)|  ✔️ | [Solution](./functions-exercises/09_displayProduct.js) |
| 10  | [Song '99 Bottles of Beer'](#exercise-fn-10-song-99-bottles)|  ✔️  | [Solution](./functions-exercises/10_song99bottles.js) |
| 11  | [Deaf Grandma](#exercise-fn-11-deaf-grandma)|  ✔️ | [Solution](./functions-exercises/11_deafGrandma.js) |
| 12  | [Deaf Grandma **Pro**](#exercise-fn-12-deaf-grandma-pro) |  ✔️  | [Solution](./functions-exercises/12_deafGrandmaPro.js) |



### Detailed Function Exercises Descriptions

<details id="exercise-fn-1-add7">
  <summary><strong>Exercise 1: Add7</strong></summary>

  Write a function called `add7()` that takes one number and returns that number + 7.
  Write function and test the output with `console.log`.
</details>

---

<details id="exercise-fn-2-multiply">
  <summary><strong>Exercise 2: Multiply</strong></summary>

Write a function called `multiply()` that takes 2 numbers and returns their product.
Write function and test the output with `console.log`.
</details>

---

<details id="exercise-fn-3-capitalize">
  <summary><strong>Exercise 3: Capitalize</strong></summary>

Write a function called `capitalize()` that takes a string and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
</details>

---

<details id="exercise-fn-4-last-letter">
  <summary><strong>Exercise 4: Last Letter</strong></summary>
  

Write a function called `lastLetter()` that takes a string and returns the very last letter of that string. 

```javascript
    lastLetter('abcd'); // should return: 'd' 
```
</details>

---

<details id="exercise-fn-5-add">
  <summary><strong>Exercise 5: Function `Add()` - variations</strong></summary>
  
I. Write a function `add(num1, num2)` that returns the result. Use only 'return'.

II. Write similar function `addStore(num3,num4)` and store the result in a new variable 'total'. Print the value of the total variable to the console.

III. Write this function as arrow function - `addArrow(num5,num6)`.

</details>

---

<details id="exercise-fn-6-print-even-numbers">
  <summary><strong>Exercise 6: Print Even Numbers</strong></summary>
  
Write a function `printEvenNumbers(start, end)`.

Within this function, use a `for loop` to print all even numbers between start and end (inclusive of start and end if they are even). Finally, call the function with the range 1-15.

</details>

---

<details id="exercise-fn-7-roll-the-dice">
  <summary><strong>Exercise 7: Roll the Dice</strong></summary>
  
Write a function `getDiceNumber(time)`. Argument represents the total number of times a standard dice should be rolled. Print the roll's sequence number and the result of that roll to the console.

Call the function which should roll the dice 8 times. 🎲

</details>

---

<details id="exercise-fn-8-until-six">
  <summary><strong>Exercise 8: Until Six</strong></summary>
  
Write a function `getUntilSix()` and call it. 🎲 

It should simulate rolling a die repeatedly until the number 6 is rolled.
 
</details>

---

<details id="exercise-fn-9-display-products">
  <summary><strong>Exercise 9: Display products</strong></summary>
  
Write a function `displayProduct()` for displaying perfumery products. 

It takes a `name` (mandatory string) and `price` (optional number, defaults to '0.00 EUR'). If the product is complimentary, it's a free item and you should input only its name. However, the function must always print both the name and price, regardless of whether it's free or not.

Call the function twice:

```javascript
  displayProduct('Java Eau de Parfum', 150)   
  displayProduct('Scripted body lotion - sample')
```
</details>

---

<details id="exercise-fn-10-song-99-bottles">
  <summary><strong> Exercise 10: Song '99 Bottles of Beer'</strong></summary>
  
Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: "99 Bottles of Beer on the Wall."🍺

  🎵 [Lyrics](https://www.99-bottles-of-beer.net/lyrics.html) 

</details>

---

<details id="exercise-fn-11-deaf-grandma">
  <summary><strong>Exercise 11: Deaf Grandma</strong></summary>

  Write a 'Deaf Grandma' program:
  
  - Whatever you say to grandma (whatever you type in), she should respond with "*HUH?! SPEAK UP, SONNY!*", unless you shout it (type in all capitals). If you shout, she can hear you (or at least she thinks so) and yells back "*NO, NOT SINCE 1938!*".
  
  - **optional**: To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950. 
  
  - You can't stop talking to grandma until you shout "*BYE*".

  💡 **Hint**: Don't forget 'BYE' is not the same as 'BYE  ' or '  BYE '! 
              Use `trim()`.
</details>

---

<details id="exercise-fn-12-deaf-grandma-pro">
  <summary><strong>Exercise 12: Deaf Grandma Pro</strong></summary>

  Write a 'Deaf Grandma' program as above but **pro version**. 
  
  All conditions from 'Deaf Grandma' must be met (including random years) **plus** these few:
  
  •	**Mixed Case:** 
    If you type something with mixed uppercase and lowercase letters, Grandma will be confused and say: 'COME AGAIN, DEARIE?'.
  
  •  **Empty Input:**
    If you just press Enter without typing anything (an empty string), Grandma will ask: 'ARE YOU GOING TO SAY SOMETHING, DEARIE?'.

  •  **Canceling the Prompt:**
    If you click "Cancel" on the prompt window, Grandma will interpret it as a 'BYE' and it will count towards ending the game.

  • **Saying Bye to Grandma:**
    You can't stop talking to grandma until you shout 'BYE' 3 times **in a row** (If you say 'BYE' and then anything else, it won't count).

  💡  **Hint**:   Don't forget 'BYE' is not the same as 'BYE  ' or '  BYE '! Use `trim()`.

  ✨ **Feature:** More phrases stored in arrays that Grandma speaks randomly (depending on the input conditions).
</details>

---

## Array Exercises 🧩

### About Array exercises

These exercises were developed as part of:

**I. The Odin Project assignment** - challenges sourced from [javascript.info](https://javascript.info/array-methods#tasks).

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

  * Exercises  **01-07**
  * Started:   June 2025
  * Completed: June 2025

**II. Additional Practice Exercises**

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

  * Exercises  **08-17**
  * Started:   June 2025
  * Completed: June 2025

---

### List of Array exercises ✨


| No. | Exercise Name          | Status      | Solution Link       |
| :-- | :--------------------- | :---------- | :------------------ |
| 1   | [Camelize()](#exercise-arr-1-camelize)|   ✔️  | [Solution](./array-exercises/01_camelize.js) |
| 2   | [Filter range](#exercise-arr-2-filter-range)|  ✔️    | [Solution](./array-exercises/02_filterRange.js) |
| 3   | [Filter range in place](#exercise-arr-3-filter-range-in-place)|  ✔️    | [Solution](./array-exercises/03_filterRangeInPlace.js) |
| 4   | [Sort in decreasing order](#exercise-arr-4-sort-in-decreasing-order)| ✔️  | [Solution](./array-exercises/04_sortInDecreasingOrder.js) |
| 5   | [Copy and sort array](#exercise-arr-5-copy-and-sort-array)|   ✔️  | [Solution](./array-exercises/05_copyAndSortArray.js) |
| 6   | [Shuffle an array](#exercise-arr-6-shuffle-an-array)|  ✔️  | [Solution](./array-exercises/06_shuffleAnArray.js) |
| 7   | [Filter unique array members](#exercise-arr-7-filter-unique)|   ✔️  | [Solution](./array-exercises/07_filterUnique.js) |
| 8   | [FizzBuzz Pro](#exercise-arr-8-fizzbuzz-pro)|  ✔️ | [Solution](./array-exercises/08_fizzBuzzPro.js) |
| 9   | [cleanAndCapitalize()](#exercise-arr-9-clean-and-capitalize)|  ✔️ | [Solution](./array-exercises/09_cleanAndCapitalize.js) |
| 10  | [Temperature Conversion](#exercise-arr-10-temperature-conversion)|  ✔️| [Solution](./array-exercises/10_tempConversion.js) |
| 11  | [Filter Words](#exercise-arr-11-filter-words)| ✔️  | [Solution](./array-exercises/11_filterWords.js) |
| 12  | [Sum & Product](#exercise-arr-12-sum-and-product)|  ✔️ | [Solution](./array-exercises/12_sumAndProduct.js) |
| 13  | [Test Results](#exercise-arr-13-test-results)| ✔️  | [Solution](./array-exercises/13_testResults.js) |
| 14  | [Discounted Prices](#exercise-arr-14-discounted-prices)| ✔️  | [Solution](./array-exercises/14_discounted.js) |
| 15  | [Formatting City Names](#exercise-arr-15-formatting-city-names)|  ✔️  | [Solution](./array-exercises/15_formattingCities.js) |
| 16  | [Daily Income Analysis](#exercise-arr-16-daily-income-analysis)|  ✔️ | [Solution](./array-exercises/16_incomeAnalysis.js) |
| 17  | [Game Inventory](#exercise-arr-17-game-inventory) | ⏳  |                        | 

### Detailed Array Exercises Descriptions

<details id="exercise-arr-1-camelize">
  <summary><strong>Exercise 1: Camelize()</strong></summary>

  Write the function `camelize(str)` that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased. 
  
  Examples:

```javascript
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```
</details>

---

<details id="exercise-arr-2-filter-range">
  <summary><strong>Exercise 2: Filter range</strong></summary>

  Write a function `filterRange(arr, a, b)` that gets an array `arr`, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
  For instance:

```javascript
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)
```
</details>

---

<details id="exercise-arr-3-filter-range-in-place">
  <summary><strong>Exercise 3: Filter range in place</strong></summary>
  
  Write a function `filterRangeInPlace(arr, a, b)` that gets an array `arr` and removes from it all values except those that are between a and b. The test is: 'a ≤ arr[i] ≤ b'.

  The function should only modify the array. It should not return anything.

```javascript
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]
```
</details>

---

<details id="exercise-arr-4-sort-in-decreasing-order">
  <summary><strong>Exercise 4: Sort in decreasing order</strong></summary>
  

  ```javascript
let arr = [5, 2, 1, -10, 8];
// ... 
  alert( arr ); // 8, 5, 2, 1, -10
```
</details>

---

<details id="exercise-arr-5-copy-and-sort-array">
  <summary><strong>Exercise 5: Copy and sort array</strong></summary>


  We have an array of strings 'arr'. We’d like to have a sorted copy of it, but keep 'arr' unmodified.

  Create a function `copySorted(arr)` that returns such a copy.

```javascript
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
```
</details>

---

<details id="exercise-arr-6-shuffle-an-array">
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

💡 **Tip:** To use a shuffle method, google **Fisher-Yates Shuffle.**

</details>

---

<details id="exercise-arr-7-filter-unique">
  <summary><strong>Exercise 7: Filter unique array members</strong></summary>

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
</details>

---

<details id="exercise-arr-8-fizzbuzz-pro">
  <summary><strong>Exercise 8: FizzBuzz Pro</strong></summary>

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
</details>

---

<details id="exercise-arr-9-clean-and-capitalize">
  <summary><strong>Exercise 9: cleanAndCapitalize()</strong></summary>

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
</details>

---

<details id="exercise-arr-10-temperature-conversion">
  <summary><strong>Exercise 10: Temperature Conversion</strong></summary>

Create an array named `tempC` containing several numbers. These numbers represent temperatures in Celsius.

Create a new array called `tempF`. Each element in the new array should be the corresponding Celsius temperature converted to Fahrenheit using the formula: `(temperature * 9/5) + 32`.

Output should look like this:

  ```javascript
  console.log(tempC); // expected: 0,10,20,30,-5,15
  console.log(tempF); // expected: 32,50,68,86,23,59
  ```
</details>

---

<details id="exercise-arr-11-filter-words">
  <summary><strong>Exercise 11: Filter Words</strong></summary>

Create an array `words` containing strings 'augmentation','desk','building','bed','affiliate','ant','sunshine','Ann'.

Create a new array `longWords` that contains only the words whose length is greater than 6 characters.
Create another new array `startWithA` that contains only the words that start with the letter 'a'(case-insensitive).

Log all three arrays to the console. Output should look like this:

  ```javascript
  console.log(words);        // augmentation,desk,building,bed,affiliate,ant,sunshine,Ann
  console.log(longWords);   //  augmentation,building,affiliate,sunshine
  console.log(startWithA); //   augmentation,affiliate,ant,Ann
  ```
</details>

---

<details id="exercise-arr-12-sum-and-product">
  <summary><strong>Exercise 12: Sum & Product</strong></summary>

Create an array `numbers` ([1, 2, 3, 4, 5]). 

Calculate the sum of all numbers in the array and store it in a variable `totalSum`.
Calculate the product of all numbers in the array and store it in a variable `totalProduct`.

Output should look like this:

  ```javascript
  console.log('Array of numbers: ',numbers);// Array of numbers: 1,2,3,4,5
  console.log('Total sum: ',totalSum, 'total product: ',totalProduct);// Total sum: 15, total product: 120
  ```
</details>

---

<details id="exercise-arr-13-test-results">
  <summary><strong>Exercise 13: Test Results</strong></summary>

Create an array `testResults` containing numbers ([85, 92, 78, 65, 95, 70, 88]) representing test results.

- Locate the first result that is greater than 90. Store it in a variable `firstExcellent`.
- Find the index of the first result that is less than 70. Store it in a variable `indexFirstFailing`.
- Check if there is at least one result less than 60 and if all results are greater than 50. 

Output should look like this:

  ```javascript
console.log(`Array with test results: ${testResults}`); //expected: 85,92,78,65,95,70,88
console.log(`First excellent result (>90) is: ${firstExcellent}`); // 92
console.log(`First failing (<70) is on position: ${indexFirstFailing}`); // 3
console.log(`Are there any failing results? (<60): ${hasFailing}`); // false
console.log(`Is every result bigger than 50?: ${areBigger}`); // true
  ```
</details>

---

<details id="exercise-arr-14-discounted-prices">
  <summary><strong>Exercise 14: Discounted Prices</strong></summary>

Create an array `productPrices` ([15.99, 23.50, 5.00, 12.75, 30.20, 8.99]).

Create a new array `discountedPrices` containing only prices that are greater than 10 and these prices should be reduced by 10%. Calculate the total sum of all discounted products. 


  ```javascript
  console.log(productPrices);    // 15.99,23.5,5,12.75,30.2,8.99
  console.log(discountedPrices); // 14.391,21.15,11.475,27.18
  console.log(total);            // 74.196
  ```
</details>

---
<details id="exercise-arr-15-formatting-city-names">
  <summary><strong>Exercise 15: Formatting City Names</strong></summary>

Create an array `cityNames`= ["lisBOa", "marbella","vallettA", "Split", "theSSaloniKI", "napoLi", "sALERNO"].

Create a new array named `formattedCities` where each city name will have its first letter capitalized and the rest in lowercase. [Example: "lisBOa" -> "Lisboa"]

Create a new array `citiesWithS` that contains only the cities (from the original array) whose name starts with the letter 'S' (case-insensitive). Output should look like this:

  ```javascript
  console.log(cityNames);          // lisBOa,marbella,vallettA,Split,theSSaloniKI,napoLi,sALERNO
  console.log(formattedCities);   // Lisboa,Marbella,Valletta,Split,Thessaloniki,Napoli,Salerno
  console.log(citiesWithS);      // Split,sALERNO
  ```
</details>

---

<details id="exercise-arr-16-daily-income-analysis">
  <summary><strong>Exercise 16: Daily Income Analysis</strong></summary>

Imagine you have an array of numbers representing daily incomes over a week. Some days were not good, resulting in negative or zero incomes. Create an array `dailyIncome` like this: [120, 80, -30, 150, 0, 90, 200].

You need to perform the following analyses:

  * Positive Incomes: Create a new array `positiveIncomes` containing only the incomes that are strictly greater than 0. Calculate the sum of all positive incomes from the positiveIncomes array. 

  * Indexes of Bad Income Days: Find all the indexes of the days when the income was less than or equal to 0. 

Finally, log all the results to the console like this:

  ```javascript
  /*
Original array - daily income for a week: 120,80,-30,150,0,90,200
Positive incomes: 120,80,150,90,200, Total of positive incomes: 640
Indexes of days with negative incomes: 2,4
*/
  ```
</details>

---

<details id="exercise-arr-17-game-inventory">
  <summary><strong>Exercise 17: Game Inventory</strong></summary>

Imagine your game character is equipped with various items and their inventory is a list of these items. ⚔️ 🔮

 This inventory is an array:

```javascript
let inventory = ['Sword', 'Shield', 'Potion', 'Bow', 'Arrows', 'Map'];
```

Implement the following functions. Remember to log clear messages to the console for each action and its result. Your goal is for each function to perform its task efficiently.


<details>
  <summary><strong>1. function `displayInventory()` </strong></summary>

Purpose: Prints the current contents of the inventory to the console in a readable format.

```javascript
Your inventory: Sword, Shield, Potion, Bow, Arrows, Map
```
</details>

<details>
  <summary><strong> 2. function `addItem(itemName)`</strong></summary>

* Purpose: Adds a new item to the inventory.

* Argument: itemName (string) - the name of the item to add.

* Additional Requirement: Before adding, check if the item already exists in the inventory. If it does, log a message stating that you already possess the item and do not add it again (the inventory doesn't allow duplicate names).

* After Action: Always display the updated inventory.

Expected Output (for adding 'Healing Potion'):

```javascript
Adding Healing Potion...
Your inventory: Sword, Shield, Potion, Bow, Arrows, Map, Healing Potion
```

Expected Output (for adding 'Map' - a duplicate):

```javascript
Adding Map...
You already have Map in your inventory.
Your inventory: Sword, Shield, Potion, Bow, Arrows, Map, Healing Potion
```

</details>

<details>
  <summary><strong> 3. function `removeItem(itemName)`</strong></summary>


* Purpose: Removes a specific item from the inventory.

* Argument: itemName (string) - the name of the item to remove.

* Additional Requirement: If the item is not found in the inventory, log a message "Item [itemName] not found in inventory."

* After Action: Always display the updated inventory.

Expected Output (for removing 'Shield'):

```javascript
Attempting to remove Shield...
Shield removed from inventory.
Your inventory: Sword, Potion, Bow, Arrows, Map, Healing Potion
```

Expected Output (for removing 'NonExistentItem'):

```javascript
Attempting to remove NonExistentItem...
Item NonExistentItem not found in inventory.
Your inventory: Sword, Potion, Bow, Arrows, Map, Healing Potion
```

</details>

<details>
  <summary><strong>4. function `hasItem(itemName)`</strong></summary>

* Purpose: Checks if the player possesses a specific item.

* Argument: itemName (string) - the name of the item to check for.

* Output: A clear message to the console indicating whether the item is possessed or not.

Expected Output (for 'Sword'):

```javascript
You have Sword in your inventory.
```

Expected Output (for 'Magic Orb'):

```javascript
You do not have Magic Orb in your inventory.
```
</details>

<details>
  <summary><strong>5. function `sortInventory()`</strong></summary>

* Purpose: Sorts the items in the inventory in alphabetical (lexicographical) order.

* After Action: Always display the sorted inventory.

Expected Output:

```javascript
Sorting inventory...
Your inventory: Arrows, Bow, Healing Potion, Map, Potion, Sword
```
</details>

<details>
  <summary><strong>6. function `getItemLengths()`</strong></summary>

* Purpose: Returns a new array containing the length (number of characters) of each item name in the inventory. The original inventory should remain unchanged.

Expected Output (for example after initial items):

```javascript
Item name lengths: [5, 6, 6, 3, 6, 3]
```

💡 **Hint**: *This is a classic use case for the `map()` method.*

</details>

<details>
  <summary><strong>7. Function `getShortItems(maxLength)`</strong></summary>

*  Purpose: Returns a new array containing only the items from the inventory whose names have a length less than or equal to maxLength. The original inventory should remain unchanged.

* Argument: maxLength (number) - the maximum allowed length for item names.

Expected Output (for getShortItems(5) with current inventory):

```javascript
Short items (<= 5 chars): Sword, Bow, Map
Hint: The filter() method is perfect for this.
```
</details>

<details>
  <summary><strong>8. Function `calculateTotalValue(itemValues)` | ✨ challenging 🌟</strong></summary>


* Purpose: Calculates the total "value" of all items currently in the inventory based on a provided map of item values.

* Argument: itemValues (object) - an object where keys are item names (strings) and values are their corresponding numeric values (e.g., { 'Sword': 100, 'Potion': 20, 'Arrows': 5, 'Map': 30 }). 

If an item in the inventory is not found in itemValues, its value should be considered 0.

Expected Output (example with provided itemValues):

```javascript
Calculating total inventory value...
Total inventory value: 155 gold
```
💡 **Hint:** *This is a prime candidate for the `reduce()` method, accumulating a sum based on item lookups.*

</details>

<details>
  <summary><strong>° Testing your Implementation °</strong></summary>


After implementing all the functions, add the following code to your .js file (below your function definitions) to test their functionality. 

This sequence of calls will demonstrate if your inventory manager works correctly.

```javascript
console.log("--- Initial Inventory ---");
displayInventory();

console.log("\n--- Scenario 1: Adding Items ---");
addItem('Healing Potion'); // Add a new item
addItem('Map');           // Try to add a duplicate item
addItem('Gold Coins');    // Add another new item

console.log("\n--- Scenario 2: Removing Items ---");
removeItem('Shield');           // Remove an existing item
removeItem('NonExistentItem');  // Try to remove a non-existent item
removeItem('Arrows');           // Remove another existing item

console.log("\n--- Scenario 3: Checking for Items ---");
hasItem('Sword');        // Check for an existing item
hasItem('Gold Coins');   // Check for a newly added item
hasItem('Magic Orb');    // Check for a non-existent item

console.log("\n--- Scenario 4: Sorting Inventory ---");
sortInventory();

console.log("\n--- Scenario 5: Item Transformations (map) ---");
const lengths = getItemLengths(); // Call the function, it should log its output internally
console.log(`Item lengths array returned: ${lengths}`);

console.log("\n--- Scenario 6: Item Filtering (filter) ---");
const shortItems = getShortItems(5); // Call the function, it should log its output internally
console.log(`Short items array returned: ${shortItems}`);
const veryShortItems = getShortItems(3);
console.log(`Very short items array returned: ${veryShortItems}`);


console.log("\n--- Scenario 7: Calculating Total Value (reduce) ---");
const itemPriceList = {
    'Sword': 100,
    'Shield': 80, // Note: Shield might be removed earlier depending on exact test order
    'Potion': 20,
    'Bow': 70,
    'Arrows': 5,
    'Map': 30,
    'Healing Potion': 25,
    'Gold Coins': 10
    // NonExistentItem and Magic Orb have 0 value as they are not here
};
const totalValue = calculateTotalValue(itemPriceList); // Call the function, it should log its output internally
console.log(`Total inventory value returned: ${totalValue} gold`);

console.log("\n--- Final Inventory State ---");
displayInventory(); // Display inventory one last time after all operations
```
</details>

</details>

</details>

---

## Resources 📚

This repository contains exercises & assignments with some content sourced from the following resources:

* [The Odin Project](https://www.theodinproject.com/)
* [javascript.info](https://javascript.info/) 
* [Pine, C.: 'Learn to Program' | Chapter VI: Flow control](https://pine.fm/LearnToProgram/chap_06.html) 