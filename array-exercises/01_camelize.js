
function camelize (str){
    return str
    
   .split('-')
   .map ((word,i) => (i == 0) ? word : word[0].toUpperCase() + word.slice(1).toLowerCase()) 
              // if index=0 word stays as it is, if not - first letter (word[0]) gets uppercase
   .join ('')
    
}
console.log("background-color camelized:", camelize("background-color"));
console.log("list-style-image camelized:", camelize("list-style-image"));
console.log("-webkit-transition camelized:", camelize("-webkit-transition"));

/*
condition ? [exprression-if-true] : [expression-if-false] 
*/
