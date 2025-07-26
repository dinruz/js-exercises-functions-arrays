function getUntilSix() {
  let n; 
  console.log('Random dice numbers: ');
  do {
    n = Math.floor(Math.random()*((Math.floor(6)-Math.ceil(1))+Math.ceil(1)))+1;
    console.log(n); 
  } while (n !== 6); 

}

getUntilSix();
