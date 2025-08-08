// <---- WARM-UP EXERCISE ---->

console.groupCollapsed(`[🔥] Warm-up exercise`);

const numbers = [1, 2, 3, 4, 5];
console.log(`✨ Original array of numbers:\n ${numbers}`);

// Method 1 -  'for' loop
const doubledFor=[];
for (let i=0; i<numbers.length; i++){
    doubledFor.push((numbers[i])*2);
    }
    console.log(` Numbers doubled with for loop:\n ${doubledFor}`);   

// Method 2 - .map() 
const doubledMap = numbers.map ((number)=> number*2);
console.log(` Numbers doubled with .map():\n ${doubledMap}`);

console.groupEnd();

// <---- BASIC ARRAY OPERATIONS ---->

console.groupCollapsed(`[🟢] Basic Array Operations`);

const mixedArray = [10, 'apple', 25, 42, 'banana', 15, 30, 'cherry'];
console.log('✨ Original mixed Array:',mixedArray);

// Part I - Filtering & Mapping

const filteredNumbers = mixedArray.filter((item) => (typeof(item) == 'number'));
console.log('Only numbers from mixed array:',filteredNumbers);


const mappedStrings = filteredNumbers.map((number) => number=('Number: '+number.toString()));
console.log(' Numbers converted to a string:', mappedStrings);

// Part II -  Reduction & Calculation

const totalSum = filteredNumbers.reduce((acc, curr) => acc+curr,0);
console.log(`Sum of all numbers: ${totalSum}`);

const largestNumber = filteredNumbers.reduce((acc,num) => Math.max(acc,num),0);
console.log(` Largest number: ${largestNumber}`);

console.groupEnd();

// <---- INTERMEDIATE ARRAY OPERATIONS ---->

console.groupCollapsed(`[🟡] Intermediate Array Operations`);

console.log('✨ Original mixed array:',mixedArray);

// Part III -  forEach & Conditional Logic

console.log(`Using '.forEach()' to determine each item's data type:`);
mixedArray.forEach((item) => {
    if ((typeof(item) ==='number') && (item > 20)){
        console.log(`The number ${item} is greater than 20.`)
    }else if(typeof(item) ==='string'){
        console.log(`The ${item} is string.`);
    }else{
        console.log(`The value ${item} is not a large number or a string.`)
    }
});

// Part IV - Chaining methods


let chainedResult = 
mixedArray.filter((item) => typeof(item)==='number')
          .map((item) => 'Number: '+ item);
console.log(`Array of numbers converted to strings (by chaining methods):`,chainedResult);

console.groupEnd();

// <---- CHOOSE & USE CHALLENGE ---->

console.groupCollapsed(`[🟠] Choose & Use Challenge`);

// 1 - Value Count

console.log('✨  Original mixed array:',mixedArray);

// ...with .filter()

const numericCount = (mixedArray.filter((number)=>typeof(number)=== 'number')).length;
console.log(' Total number of numbers in the array \n- with .filter(): ',numericCount);

// ...with .forEach()

let countNumbers=0;
mixedArray.forEach((item) => {
    if (typeof (item) === 'number') { 
        countNumbers++; 
    }
});
console.log('Total number of numbers in the array \n- with .forEach(): ',countNumbers);

// ...with .reduce()

const countNum= mixedArray.reduce((acc, item) => {
    return (typeof (item) === 'number') ? acc+1 : acc;
}, 0);
console.log('Total number of numbers in the array \n- with .reduce(): ',countNum);

//  2 - Descending Order


console.log('✨  Original filtered numbers:',filteredNumbers);
const filterNumbers=[...filteredNumbers]
const sortedDescending=filterNumbers.sort((a,b)=> (b-a));
console.log(`Filtered numbers in descending order: `,sortedDescending);

// 3 - Unique Collection

const alphabetArray =['a','b','c','a','d','b']
console.log('✨  Original alphabet array:', alphabetArray);

let uniqueEl = [...new Set(alphabetArray)];
console.log('Unique elements - with newSet:\n',uniqueEl);

let uniqueElements = alphabetArray.filter((element,index,alphabetArray)=> 
    alphabetArray.indexOf(element) === index); // first index of element = current index ,
                                              // e.g. 'a': 0===0 true, 3===0 false
console.log('Unique elements - with filter():\n',uniqueElements);

let uniqueE = alphabetArray.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }
  return acc;
}, []);
console.log('Unique elements - with reduce():\n',uniqueE);

// 4 -  Mixed Transformation

console.log('✨  Original mixed array:',mixedArray);

const transformedMixedArray = mixedArray.map((element)=> {
if (typeof(element) =='number'){
    return element * element;
}else{
    return element.toUpperCase();
}
});
console.log ('Transformed mixed array \n(strings to uppercase, numbers squared):');
console.log(transformedMixedArray);
console.groupEnd();

// <--- SCORE ANALYSIS --->

console.groupCollapsed(`[🔴] Score Analysis`);

// Challenge 1: Filtering & Summation

const scores = [15, 25, 15, 50, 45, 25, 15, 60, 5, 25, 10];
console.log(`✨ Original score array: `,scores);

let sumOfFilteredScores=
scores.filter((score) => score>20)
      .reduce((acc,current)=>acc+current,0);
console.log(`Sum of all scores greater than 20: `,sumOfFilteredScores);

// Challenge 2: Counting Occurrences

let countOf25 = 0;
scores.forEach((item) =>{
    if (item === 25){
    countOf25++;
    }
});
console.log(`.forEach() method:`)
console.log(`Score 25 was achieved ${countOf25} times.`);

const count25 = scores.reduce((count, score) => (score === 25 ? count + 1 : count), 0);
console.log(`.reduce() method:`);
console.log(`Score 25 was achieved ${count25} times.`);

// Challenge 3: Transformation & Uniqueness

let uniqueSortedScores = scores.reduce((acc,numb)=> {
    if (!acc.includes(numb)) {
        acc.push(numb);
    }
    return acc;
},[]);

uniqueSortedScores.sort((a,b)=>b-a);
console.log(`Only uniques values (from highest to lowest): `, uniqueSortedScores);

console.groupEnd();

// <--- TEST CASES --->

console.log('Test Cases');

// Helper function for asserting equality
function assertEqual(actual, expected, testName) {
    const areArraysEqual = (arr1, arr2) => {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return actual === expected;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    if (areArraysEqual(actual, expected)) {
        console.log(`✅ PASS: ${testName}`);
    } else {
        console.error(`❌ FAIL: ${testName} - Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)}`);
    }
}

// --- Warm-up Exercise Tests ---
// Assuming you store the results in `doubledFor` and `doubledMap`
// Example: const doubledFor = [2, 4, 6, 8, 10];
// Example: const doubledMap = [2, 4, 6, 8, 10];
assertEqual(doubledFor, [2, 4, 6, 8, 10], "Warm-up: doubledFor using for loop");
assertEqual(doubledMap, [2, 4, 6, 8, 10], "Warm-up: doubledMap using .map()");

// --- Easy Challenge Tests ---
// Assuming you store the results in `filteredNumbers`, `mappedStrings`, `totalSum`, `largestNumber`
// Example: const filteredNumbers = [10, 25, 42, 15, 30];
// Example: const mappedStrings = ['Number: 10', 'Number: 25', 'Number: 42', 'Number: 15', 'Number: 30'];
// Example: const totalSum = 122;
// Example: const largestNumber = 42;
assertEqual(filteredNumbers, [10, 25, 42, 15, 30], "Easy Challenge: filteredNumbers");
assertEqual(mappedStrings, ['Number: 10', 'Number: 25', 'Number: 42', 'Number: 15', 'Number: 30'], "Easy Challenge: mappedStrings");
assertEqual(totalSum, 122, "Easy Challenge: totalSum");
assertEqual(largestNumber, 42, "Easy Challenge: largestNumber");

// --- Medium Challenge Tests ---
// Assuming you store the result in `chainedResult`
// Example: const chainedResult = ['Number: 25', 'Number: 42', 'Number: 15', 'Number: 30'];
assertEqual(chainedResult, ['Number: 10', 'Number: 25', 'Number: 42', 'Number: 15', 'Number: 30'], "Medium Challenge: chainedResult");
// Note: Part 3 (forEach) involves console logging, which is visually verified.

// --- Choose & Use Challenge Tests ---
// Assuming you store the results in `numericCount`, `sortedDescending`, `uniqueElements`, `transformedMixedArray`
// Example: const numericCount = 5;
// Example: const sortedDescending = [42, 30, 25, 15, 10];
// Example: const uniqueElements = ['a', 'b', 'c', 'd'];
// Example: const transformedMixedArray = [100, 'APPLE', 625, 1764, 'BANANA', 225, 900, 'CHERRY'];
assertEqual(numericCount, 5, "Choose & Use: Challenge 1 (Value Count)");
assertEqual(sortedDescending, [42, 30, 25, 15, 10], "Choose & Use: Challenge 2 (Descending Order)");
assertEqual(uniqueElements, ['a', 'b', 'c', 'd'], "Choose & Use: Challenge 3 (Unique Collection)");
assertEqual(transformedMixedArray, [100, 'APPLE', 625, 1764, 'BANANA', 225, 900, 'CHERRY'], "Choose & Use: Challenge 4 (Mixed Transformation)");

// --- Advanced Challenge Tests ---
// Assuming you store the results in `sumOfFilteredScores`, `countOf25`, `uniqueSortedScores`
// Example: const sumOfFilteredScores = 230;
// Example: const countOf25 = 3;
// Example: const uniqueSortedScores = [60, 50, 45, 25, 15, 10, 5];
assertEqual(sumOfFilteredScores, 230, "Advanced Challenge: Challenge 1 (Filtering and Summation)");
assertEqual(countOf25, 3, "Advanced Challenge: Challenge 2 (Counting Occurrences)");
assertEqual(uniqueSortedScores, [60, 50, 45, 25, 15, 10, 5], "Advanced Challenge: Challenge 3 (Transformation and Uniqueness)");

