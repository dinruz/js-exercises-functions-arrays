// Initial  data

const employees = [
  ['Alice', 'Engineering', 95000, 5],
  ['Bob', 'Sales', 70000, 3],
  ['Charlie', 'Engineering', 120000, 10],
  ['Diana', 'Marketing', 85000, 7],
  ['Eve', 'Sales', 60000, 2],
  ['Frank', 'Engineering', 110000, 8],
  ['Grace', 'Marketing', 90000, 6]
];

console.log(`Original list of employees:`);
console.table(employees);

// 1. getHighSalaryEmployees(minSalary)

function getHighSalaryEmployees(minSalary){
    let salary = employees
    .filter((employee) => employee[2] > minSalary)
    .map((employee) => `${employee[0]} ($${employee[2]})`);
console.log(`List of employees with salary bigger than ${minSalary} $`);  
console.log(salary);
return salary;
}

getHighSalaryEmployees(80000);

