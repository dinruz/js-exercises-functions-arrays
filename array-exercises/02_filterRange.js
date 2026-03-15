// Initial Data

let arr = [5, 3, 8, 1];
console.log("Original array of numbers: ",arr)

// 1 - if/else

function filterRange(arr,a, b) {
    console.log("Filtering elements with if-else statements:");
    return arr.filter(function(element) { 
               if ((element >= a) && (element <= b)) {
            return true;
        } else {
            return false; 
        }
    });
}
filtered=filterRange(arr, 1, 4);
console.log(filtered); 

//2 - arrow func

function filterRange2 (arr,a,b){
    console.log("Filtering elements with arrow function:");
     let filtered2 = arr.filter((num)=> (num>=a)&&(num<=b))
    console.log(filtered2);
}
filterRange2(arr,1,4);
