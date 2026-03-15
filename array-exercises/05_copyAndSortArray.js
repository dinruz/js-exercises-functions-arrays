
let arr=["HTML","JavaScript","CSS"];

let sorted = copySorted(arr);

function copySorted(arr){
        let sorted=arr.slice();  //copy array 
         return sorted.sort();   //sort copy of an array
}

console.log("Original array: ",arr);
console.log("Sorted copy of array: ",sorted);
