/* let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  alert( sorted ); // CSS, HTML, JavaScript
  // alert( arr ); // HTML, JavaScript, CSS (no changes)*/


let arr=["HTML","JavaScript","CSS"];

let sorted = copySorted(arr);

function copySorted(arr){
        let sorted=arr.slice();  //copy array 
         return sorted.sort();   //sort copy of an array
}

console.log("Original array: ",arr);
console.log("Sorted copy of array: ",sorted);
