/* Exercise 1 */

let add7 = number => number+7;
console.log ("Testing the function add7");   
console.log ("Adding (7,5); expected: 12, got: "+ add7(5));
console.log ("Adding (7,-9); expected: -2, got:  " + add7(-9));

/* Exercise 2 */

let multiply = (num1, num2) => num1*num2;
console.log ("Testing the function multiply");
console.log ("Multiply (3,-7); expected: -21, got: " + multiply(3,-7));
console.log ("Multiply (6,80); expected: 480, got:"+multiply(6,80));
console.log ("Multiply (97,0); expected: 0, got:"+multiply(97,0));

/* Exercise 3 */

function capitalize(str) {
 if (typeof str !== "string"){
    return "This is not a string.";
 }

 else{
    first= str[0];
    rest= str.slice(1);
    newStr=first.toUpperCase()+rest.toLowerCase();
    return newStr;
}
}
console.log ("Testing the function capitalize");
console.log ("Capitalize 'hello'; expected: 'Hello', got: " + capitalize("hello"));
console.log ("Capitalize 'JAVASCRIPT'; expected: 'Javascript', got: " + capitalize("JAVASCRIPT"));
console.log ("Capitalize 'heLlo WoRLd!'; expected: 'Hello world!', got: " + capitalize("hELlo wORLd!"));
console.log ("The value is 5872 (number). Expected:'This is not a string', got: " + capitalize(5872));


/* Exercise 4 */ 


function lastLetter (text){
if (typeof text !== "string"){
    return "This is not a string!"
}
else{
last=text.at(-1);
return last;
}
}
console.log ("Testing the function lastLetter");
console.log ("String: 'HTML'. Expected: 'L', got: " + lastLetter("HTML"));
console.log ("String: 'abcd'. Expected: 'd', got: "+ lastLetter("abcd"));
console.log ("String: 'Cascade StyleSheet'. Expected: 't', got: " + lastLetter("Cascade StyleSheet"));
console.log ("The value is 99 (number). Expected:'This is not a string!', got: " + lastLetter(99));
