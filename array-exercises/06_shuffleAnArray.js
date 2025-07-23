let arr=[1,2,3];

// Fisher-Yates Shuffle

function shuffleArray(arr){
    for (let i = arr.length-1; i >= 1; i--) { //iterates from last item (-1),continues until i>=1, position 0 is auto assigned already
        const j = Math.floor(Math.random() * (i + 1)); // generates random index j  (from 0 to i)
        [arr[i], arr[j]] = [arr[j], arr[i]];           // simultaneous swap between the elements
    }
    return arr;
}                   

console.log('Original Array: ',arr);
console.log('1st Shuffled Array: ',shuffleArray(arr));
console.log('2nd Shuffled Array: ',shuffleArray(arr));
console.log('3rd Shuffled Array: ',shuffleArray(arr));