const logLines = [
  "INFO: User 'john' logged in.",
  "WARN: Disk space low.",
  "INFO: User 'sarah' logged out.",
  "INFO: User 'john' logged out.",
  "ERROR: Database connection failed.",
  "INFO: User 'mike' logged in.",
  "WARN: High CPU usage.",
  "INFO: User 'john' logged in."
];

console.log('Original log lines:');
console.table(logLines);

// only 'INFO' log lines

const infoLogLines =logLines.filter((line)=> line.includes('INFO'));
console.log('only the lines that start with "INFO":');
console.table(infoLogLines);

// total number of "logged in" actions

let count=0;
logLines.forEach((line) => {
    if (line.includes('logged in')){
        count++;
    }
});
console.log(`Total number of 'logged in' actions: ${count}`);

