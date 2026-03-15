function getDiceNumber(time){
  let it=0;
  while (it<time){
    number=Math.floor(Math.random()*((Math.floor(6)-Math.ceil(1))+Math.ceil(1)))+1;
     it++;
    console.log(`${it}.dice number is: ${number}`);
  }
}

getDiceNumber(8);
