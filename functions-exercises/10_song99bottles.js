function singBeerSong(bottles){
    console.log(`${bottles} BOTTLES OF BEER 🍺 `);
    for (let i=bottles; i>1; i--){

        console.log(`${i} bottles of beer on the wall,${i} bottles of beer.
 Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
    }

 console.log (`1 bottle of beer on the wall, 1 bottle of beer.
 Take one down and pass it around, no more bottles of beer on the wall.`);

 console.log (`No more bottles of beer on the wall, no more bottles of beer.
 Go to the store and buy some more, ${bottles} bottles of beer on the wall.🍺 `);

return;
}

singBeerSong(99); 