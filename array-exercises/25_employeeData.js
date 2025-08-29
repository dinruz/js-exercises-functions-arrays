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

// 1 - getHighSalaryEmployees(minSalary)

function getHighSalaryEmployees(minSalary){
    let salary = employees
    .filter((employee) => employee[2] > minSalary)
    .map((employee) => `${employee[0]} ($${employee[2]})`);
console.log(`List of employees with salary bigger than ${minSalary} $:`);  
console.log(salary);
return salary;
}
getHighSalaryEmployees(80000);

// 2 -  calculateTotalSalaryByDepartment()

function calculateAllDepartmentsTotalSalary(employees) {
  console.log (`Total salary expenditure for each department:`);
  const departments = employees.reduce((acc, employee) => {
    if (!acc.includes(employee[1])) {
      acc.push(employee[1]);
    }
    return acc;
  }, []); 
  const result = departments.map(department => {
      const departmentEmployees = employees.filter(employee => employee[1] === department);
    const totalSalary = departmentEmployees.reduce((acc, employee) => acc + employee[2], 0);
    return [department, totalSalary];
  });
  return result;
}
console.log(calculateAllDepartmentsTotalSalary(employees));

// 3 - getSeniorEmployees()

function getSeniorEmployees() {
console.log('Names and departments of all employees with 5+ years of experience:');
const seniorEmployees = employees
    .filter(employee => employee[3] >= 5)
    .map(employee => `${employee[0]} (${employee[1]})`)
    .sort();

  return seniorEmployees;
}

console.log(getSeniorEmployees());
// Očekivani izlaz: ['Alice (Engineering)', 'Charlie (Engineering)', 'Diana (Marketing)', 'Frank (Engineering)', 'Grace (Marketing)', 'Jane Doe (Sales)']
// Primijeti da 'Jane Doe' iz mog originalnog niza također ima 6 godina iskustva i uvrštena je.