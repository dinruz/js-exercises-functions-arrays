// User

  function getUserTalk(){
  let userAnsw;
  let user = prompt ('Talk to granny:');

  if ((user.trim()) === 'BYE'){
    userAnsw =  'BYE';
  }
  else if (user === user.toUpperCase()){
     userAnsw = 'userU';
  }
  else if(user === user.toLowerCase()){
    userAnsw = 'userL';
  }
  else{
    userAnsw='mix';
  }
  
return userAnsw;
}
 

//Talk 

function Talk(){
    let answer = getUserTalk(); 
    while (answer !== 'BYE'){      // Loop iterates until 'BYE' (with `trim()`)
      if (answer === 'userL'){
        console.log('HUH?! SPEAK UP, SONNY!');
      } 
      else if (answer === 'userU'){
        let year = Math.floor(Math.random() * (1950 - 1930 + 1)) + 1930; 
        console.log (`NO, NOT SINCE ${year}!`);
      }
      else{
        console.log(`HUH?!`);
      }
        
    answer = getUserTalk();  // enables continuation of talk or ending it with 'BYE'
    }

  
  console.log('BYE, SONNY!'); // loop is over (after 'BYE')
}

Talk();