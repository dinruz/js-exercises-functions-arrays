//User input


function getUserAnswer(){
    let userAnswer = prompt (`3x BYE/Cancel to leave.❌

    👵💬 Talk to granny: `);
 
    if (userAnswer === null){
        userAnswer = 'BYE';
    }else if (userAnswer.trim() === ""){ //  catches "" , " ", "   "...
        userAnswer = 'empty';
    }else if (userAnswer.trim() === 'BYE'){
        userAnswer = 'BYE';
    }else if (userAnswer.trim() === userAnswer.trim().toUpperCase()){ //' HELLO ' > 'HELLO' = 'HELLO'
        userAnswer = 'uppercase';
    }else if (userAnswer.trim() === userAnswer.trim().toLowerCase()){ // '    hello' > 'hello'='hello'
        userAnswer = 'lowercase';
    }else{
        userAnswer = 'mixedcase';
    }
return userAnswer;
}

//Talk

function Talk(){

let user = getUserAnswer();
let countBye = 0;   // increments with every 'BYE' & sets to 0 after every other input(in row rule!)
while (countBye < 3 ){ 
    if(user === 'empty'){
        console.log ('ARE YOU GOING TO SAY SOMETHING, DEARIE? 💬');
        countBye=0;

    }else if (user === 'uppercase'){       
        let upperResp =[`NO, NOT SINCE `,`OH, IT WAS BACK IN THE `,`I REMEBER, IT WAS IN... `,`I GOT THAT RECIPE IN `,`YOUR GRANDPA BOUGHT IT IN `];
        let u = Math.floor(Math.random()*4);
        let year = Math.floor(Math.random()*(1970-1910+1)+1910);
        console.log(upperResp[u]+year+'.!');
        countBye=0;

    }else if (user === 'lowercase'){
        let lowerResp =[`HUH?! SPEAK UP, SONNY!`,`CAN'T HEAR YA, BOY!`,`SPEAK LOUDER! 📢`,`WHAT WAS IT?`];
        let l = Math.floor(Math.random()*3);
        console.log(lowerResp[l]);
        countBye=0;

    }else if (user === 'BYE'){
        countBye++;
    

    }else{
        console.log('COME AGAIN, DEARIE?');
        countBye=0; 
    }

  
if (countBye < 3) {   //otherwise it would take 4 'BYE's
    user = getUserAnswer();
    }
}

const byeResp = [`LEAVING SO SOON, DEARIE? BYE!👋`,`ARE YOU REALLY GOING? BYE!👋`,`DON'T FORGET TO VISIT AGAIN! BYE!👋`];
let b= Math.floor(Math.random() * 3);
    console.log (byeResp[b]);
}

Talk();