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


const mappedString = filteredNumbers.map((number) => number=('Number:'+number.toString()));
console.log(' Numbers converted to a string:', mappedString);

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
          .map((item) => 'Number: '+item);
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
const sortedDescending=filteredNumbers.sort((a,b)=> (b-a));
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

const transformedMixedAray = mixedArray.map((element)=> {
if (typeof(element) =='number'){
    return element * element;
}else{
    return element.toUpperCase();
}
});

console.log ('Transformed mixed array \n(strings to uppercase, numbers squared):');
console.log(transformedMixedAray);
console.groupEnd();
