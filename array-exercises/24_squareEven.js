

let numbers = [1, 2, 3, 4, 5, 6];

function sumOfSquaresOfEvenNumbers(arr){
    console.log('Numbers:',arr);
    let result = arr
                    .filter((num) => num%2==0)
                    .map((num)=> num*num)
                    .reduce((accum,currentNum)=>(accum+currentNum),0)
console.log('Sum of squares of even numbers is: ',result);
return result;
}

sumOfSquaresOfEvenNumbers(numbers);