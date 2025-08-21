
const numbers = [12, 5, 28, 15, 7, 34, 11, 40, 9];
console.log('Original array:');
console.log (numbers);

// Transform & Filter

const filteredAndTransformed = numbers
.map ((number)=> number*2)
.filter ((number)=>number>50)

console.log ('Multiplied numbers greather than 50:');
console.log(filteredAndTransformed);


// Analyze & Sum

const sumOfOddNumbers = numbers
.filter((number)=> (number %2 !== 0))
.reduce ((accum,current) => accum+current)

console.log('Sum of all odd numbers:');
console.log (sumOfOddNumbers);


// Conditional Check

const allNumbersAreValid = numbers.map(number => number > 4);

console.log(`Original array : `, numbers);
console.log (`Is number greater than 4:`);
console.log(allNumbersAreValid);

