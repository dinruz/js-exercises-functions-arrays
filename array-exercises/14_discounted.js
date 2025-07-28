const productPrices = [15.99, 23.50, 5.00, 12.75, 30.20, 8.99];
let discountedPrices = productPrices.filter ((price)=>price>10);
discountedPrices = discountedPrices.map((price)=> price - (price*0.1));
const total = discountedPrices.reduce((sum,price)=>sum+price,0);

console.log(`Product prices: ${productPrices}
All discounted prices: ${discountedPrices}
Discounted prices - total: ${total}`);
