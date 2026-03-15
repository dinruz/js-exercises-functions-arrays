
 let array=[5,2,1,-10,8];
console.log('Original array: ',array);

function sortDecreasing(arr){
  return arr.sort((a,b)=> b-a);
}

sortDecreasing(array);
console.log('Array sorted in decreasing order: ',array);