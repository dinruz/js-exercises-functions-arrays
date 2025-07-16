
let arr = [5, 3, 8, 1];

console.log("Filtering elements");

function filterRange(arr,a, b) {
    return arr.filter(function(element) { 
       
        if ((element >= a) && (element <= b)) {
            return true;
        } else {
            return false; 
        }
    });

}
filtered=filterRange(arr, 1, 4);

console.log("Original array: ",arr)
console.log("Filtered array: ",filtered); 


