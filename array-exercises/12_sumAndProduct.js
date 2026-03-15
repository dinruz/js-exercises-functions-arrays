const numbers=[1,2,3,4,5];
totalSum =numbers.reduce((sum,num)=> sum+num,0); 
totalProduct=numbers.reduce((sum,num)=>sum*num,1);
console.log(`Array of numbers: ${numbers}`);
console.log(`Total sum: ${totalSum}, total product: ${totalProduct}`);
