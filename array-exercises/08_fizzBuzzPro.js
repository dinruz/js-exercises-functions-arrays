
function fizzBuzzPro(number){
  let arr=[];
  for (let i=1; i<=number; i++){
    if (i.toString().match(/7/)){  //converts number to string and checks if it contains '7' using regex 
     arr.push("Bang!");           
    }else if ((i%3===0) && (i%5===0)){
      arr.push("FizzBuzz");
    }else if (i%3===0){
      arr.push ("Fizz");
    }else if (i%5===0){
      arr.push("Buzz");
    }
    else{
      arr.push(i);
    }
  }
console.log(arr.join(', ')+'.');
}
fizzBuzzPro(25);
