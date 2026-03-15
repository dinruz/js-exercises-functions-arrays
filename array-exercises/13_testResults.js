const testResults=[85, 92, 78, 65, 95, 70, 88];
const firstExcellent=testResults.find((result)=> result>90);
const indexFirstFailing = testResults.findIndex((result)=> result<70);
const hasFailing  = testResults.some((result)=> result<60);
const areBigger = testResults.every((result)=>result>50);

console.log (`Array with test results: ${testResults}`);
console.log (`First excellent result (>90) is: ${firstExcellent} 
First result below 70 is on position: ${indexFirstFailing}
Are there any failing results? (<60): ${hasFailing}
Is every result bigger than 50?: ${areBigger}`); 
