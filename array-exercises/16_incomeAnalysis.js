
const dailyIncome =[120, 80, -30, 150, 0, 90, 200];
const positiveIncomes = dailyIncome.filter((day) => day>0);
const totalPositive = positiveIncomes.reduce((sum,day) => sum+day,0);
let indexNegative=[];
for (let i=0; i<dailyIncome.length; i++){
    if (dailyIncome[i] <=0){
        indexNegative.push(i);
    }
}
console.log(`Original array - daily income for a week: ${dailyIncome}
Positive incomes: ${positiveIncomes}, Total of positive incomes: ${totalPositive}
Indexes of days with negative incomes: ${indexNegative}`);