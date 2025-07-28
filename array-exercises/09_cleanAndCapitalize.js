function cleanAndCapitalize(text){
  let low = text.toLowerCase();
  const punctuation = /[.,;_!?-]/g;      
  low = low.replace(punctuation, " ");                 // removing punctuation
  let arr=[];
  arr = low.split(' ');                              // separating using single space into array
  let clean = arr.filter((item)=> item !=="");       // filtering empty items as result of separating
  let cleanAndCap= clean.map((word)=>{               // slicing each word to capitalize
    firstLetter = word.slice(0,1).toUpperCase();
    wordRest = word.slice(1,).toLowerCase();
    word=firstLetter+wordRest;                       
    return word;
  });

cleanAndCap=cleanAndCap.join(' ');               // joining array back to string
console.log(`Original string: ${text} `);
console.log (`Clean and capitalized: ${cleanAndCap}`);
return cleanAndCap;
};

cleanAndCapitalize("tHis-is somE--stranGE. text! ");
cleanAndCapitalize(" THIS.one...   TOo_  ");
