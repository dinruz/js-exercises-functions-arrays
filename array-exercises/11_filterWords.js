const words = ["augmentation","desk","building","bed","affiliate","ant","sunshine","Ann"];
const longWords = words.filter ((word) => (word.length>6));
const startWithA= words.filter ((word) => (word[0]==="a") || (word[0]==="A"));

console.log (`Original array: ${words}`);
console.log (`Only long words (>6 characters): ${longWords}`);
console.log (`Words with an 'A': ${startWithA}`);
