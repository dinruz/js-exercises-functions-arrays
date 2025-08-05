// <---- WARM-UP EXERCISE ---->

console.groupCollapsed(`[🔥] Warm-up exercise`);

const numbers = [1, 2, 3, 4, 5];
console.log(`Original array of numbers:\n ${numbers}`);

// Method 1 -  'for' loop
const doubledFor=[];
for (let i=0; i<numbers.length; i++){
    doubledFor.push((numbers[i])*2);
    }
    console.log(`Numbers doubled with for loop:\n ${doubledFor}`);   

// Method 2 - .map() 
const doubledMap = numbers.map ((number)=> number*2);
console.log(`Numbers doubled with .map():\n ${doubledMap}`);

console.groupEnd();

// <---- BASIC ARRAY OPERATIONS ---->

console.groupCollapsed(`[🟢] Basic Array Operations`);

const mixedArray = [10, 'apple', 25, 42, 'banana', 15, 30, 'cherry'];
console.log('Original mixed Array:',mixedArray);

// Part I - Filtering & Mapping

const filteredNumbers = mixedArray.filter((item) => (typeof(item) == 'number'));
console.log('Only numbers from mixed array:',filteredNumbers);


const mappedString = filteredNumbers.map((number) => number=('Number:'+number.toString()));
console.log('Numbers converted to a string:', mappedString);

// Part II -  Reduction & Calculation

const totalSum = filteredNumbers.reduce((acc, curr) => acc+curr,0);
console.log(`Sum of all numbers: ${totalSum}`);

const largestNumber = filteredNumbers.reduce((acc,num) => Math.max(acc,num),0);
console.log(`Largest number: ${largestNumber}`);

console.groupEnd();

// <---- INTERMEDIATE ARRAY OPERATIONS ---->

console.groupCollapsed(`[🟡] Intermediate Array Operations`);

console.log('Original mixed array:',mixedArray);

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

console.log(`Chaining methods to get same array`);

let chainedResult = 
mixedArray.filter((item) => typeof(item)==='number')
          .map((item) => 'Number: '+item);
console.log(`Array of numbers converted to strings:`,chainedResult);

console.groupEnd();