// Initial data

const missions = [
  ['Apollo 11', 1969, 'Success', ['Neil Armstrong', 'Buzz Aldrin']],
  ['Voyager 1', 1977, 'Success', ['N/A']],
  ['Hubble Telescope', 1990, 'Success', ['N/A']],
  ['Mars Rover', 2003, 'Success', ['N/A']],
  ['ISS Expedition 1', 2000, 'Success', ['William Shepherd', 'Yuri Gidzenko', 'Sergei Krikalev']],
  ['Artemis I', 2022, 'Success', ['N/A']],
  ['Starship Launch', 2023, 'Failed', ['N/A']],
  ['Mars Sample Return', 2027, 'In Progress', ['N/A', 'N/A']]
];

console.groupCollapsed(`List of space missions`);
function displayMissions (spaceMissions){
    console.log(`🚀 Original list of space missions: `);
    console.table(spaceMissions);
 }
displayMissions(missions);
console.groupEnd();

// 1 - Get All Successfull Misssions

console.groupCollapsed(`I. Get All Successfull Missions`);
function getAllSuccessfullMissions(spaceMissions){
    let success = spaceMissions.filter((mission) => mission[2] === 'Success');
    let successNames=success.map((mission) => mission[0]);     // only the names
    console.log(`🛰️ Names of sucessfull missions: `,successNames);
}
getAllSuccessfullMissions(missions);
console.groupEnd();

// 2 - Get Average Crew Size By Decade

// 3 - Find Unique Crew Members

console.groupCollapsed('III. Find Unique Crew Members')
function findUniqueCrewMembers(spaceMissions){
  const onlyCrew = spaceMissions.map((mission)=> mission[3]); //get 3rd index from each mission(crew)
  const flattenedCrew = onlyCrew.flat((Infinity));            
  const filteredMembers = flattenedCrew.filter(member => member !== 'N/A'); // filter - not 'N/A'
  const uniqueMembers = [...new Set(filteredMembers)];  // remove potential duplicates [...new Set()]
  console.log(`👨‍🚀 Unique crew members are: : ${uniqueMembers}.`); 
return uniqueMembers;
}
findUniqueCrewMembers(missions);

