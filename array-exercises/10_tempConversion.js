const tempC=[0, 10, 20, 30, -5, 15];
const tempF= tempC.map((temperature) => (temperature *9/5)+32);

console.log (`Temperature in Celsisus: ${tempC}`);
console.log (`Temperature in Fahrenheit: ${tempF}`);
