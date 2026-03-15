let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let number= arr[i];

      if (number < a || number> b) {
      arr.splice(i, 1);
      i--;   /*When element is spliced the array shifts to the left - prevent skipping the next element
             -- negative decrement (i--) immediately after the splice() is needed */
    }
  }

}

filterRangeInPlace(arr, 1, 4); 
alert( arr ); 


