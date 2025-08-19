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
console.log('Only the lines that start with "INFO":');
console.table(infoLogLines);

// total number of "logged in" actions

let count=0;
logLines.forEach((line) => {
    if (line.includes('logged in')){
        count++;
    }
});
console.log(`Total number of 'logged in' actions: ${count}`);

//  array of strings w/ unique usernames (e.g., 'john', 'sarah', 'mike')
//  sort them in alphabetical order


const usernames = logLines
  .filter (line => line.includes("User"))
  .map (line => {
    const parts = line.split("'");
    return parts[1];
  });

const uniqueUsers = [...new Set(usernames)];

const sortedUnique = uniqueUsers.sort();
console.log(`Array with unique usernames: ${sortedUnique}`); 

// data structure that maps each unique username to the number of times they logged in


const loginCounts = {};
uniqueUsers.forEach(username => {
    loginCounts[username] = 0;
});

logLines.forEach(line => {
    if (line.includes("logged in")) {
        const parts = line.split("'");
        const username = parts[1];
        
        if (loginCounts[username] !== undefined) {
            loginCounts[username]++;
        }
    }
});

console.log('Log in counts:', loginCounts);
