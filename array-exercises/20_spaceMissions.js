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

console.groupCollapsed(`List of space missions 🚀`);
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

console.groupCollapsed('II. Get Average Crew Size by Decade');

function getAverageCrewSizeByDecade(missions) {
  const decadesData = missions.map(mission => {
    const year = mission[1];
    const crew = mission[3];
    const decade = Math.floor(year / 10) * 10;
    const crewSize = crew.filter(member => member !== 'N/A').length;
    return {
      decade: `${decade}s`,
      crewSize: crewSize
    };
  });
  const decadeTotals = decadesData.reduce((acc, current) => {
    const existingDecade = acc.find(item => item.decade === current.decade);

    if (existingDecade) {
      existingDecade.totalCrew += current.crewSize;
      existingDecade.missionCount += 1;
    } else {
      acc.push({
        decade: current.decade,
        totalCrew: current.crewSize,
        missionCount: 1
      });
    }
    return acc;
  }, []);

  const result = decadeTotals.map(item => {
    const average = item.totalCrew / item.missionCount;
    return [item.decade, average];
  });

  return result;
}

const averageCrewSize = getAverageCrewSizeByDecade(missions);
console.log('👩‍🚀 Average Crew Size by Decade:');
console.table(averageCrewSize);
console.groupEnd();

// 3 - Find Unique Crew Members

console.groupCollapsed('III. Find Unique Crew Members')
function findUniqueCrewMembers(spaceMissions){
  const onlyCrew = spaceMissions.map((mission)=> mission[3]); //get 3rd index from each mission(crew)
  const flattenedCrew = onlyCrew.flat((Infinity));            
  const filteredMembers = flattenedCrew.filter(member => member !== 'N/A'); // filter - not 'N/A'
  const uniqueMembers = [...new Set(filteredMembers)];  // remove potential duplicates [...new Set()]
  console.log(`👨‍🚀 Unique crew members are: \n ${uniqueMembers}.`); 
return uniqueMembers;
}
findUniqueCrewMembers(missions);

