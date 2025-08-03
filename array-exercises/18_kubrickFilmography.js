
/*
The movies are stored in a nested array. 
Each inner array represents one movie: [title, year, genres]. 
Genres are also a nested array.
*  Case Handling: Movie titles & genres should be Title Case. 
                 Years are numbers.
*  Return Values: Functions must return a new array or a single value 
(like a number or a string). Do not modify the original array.
*/
// Kubrick movies list

let kubrickMovies = [
  ['2001: A Space Odyssey', 1968, ['Sci-Fi', 'Adventure']],
  ['The Shining', 1980, ['Horror', 'Psychological Thriller']],
  ['A Clockwork Orange', 1971, ['Sci-Fi', 'Dystopian']],
  ['Full Metal Jacket', 1987, ['War', 'Drama']],
  ['Dr. Strangelove', 1964, ['Satire', 'Comedy']],
  ['Eyes Wide Shut', 1999, ['Drama', 'Mystery']]
];

console.groupCollapsed(`List of movies`);
console.log(`🎬 Kubrick's movies:`);
console.table (kubrickMovies);
console.groupEnd();

// get Movies by Genre 

console.groupCollapsed(`Getting movies by genre`);
console.log(`🎬 Getting movies by genre`);
function getMoviesByGenre(genre,movies){
    let genreMovie=[];
    for (let i=0; i<movies.length; i++){
        if (movies[i][2].includes(genre)){    // if second array includes genre
            genreMovie.push(movies[i][0]);   // pushing only titles
        }
    }
    console.log(`🍿 Titles of movies with genre ${genre}: ${genreMovie}`);
    return genreMovie;
}
getMoviesByGenre('Sci-Fi',kubrickMovies);
getMoviesByGenre('War',kubrickMovies,);
getMoviesByGenre('NonExsistentGenre',kubrickMovies); // should return empty
console.groupEnd();

// Get Movies After Year

console.groupCollapsed(`Finding movies released after a specific year`);
function getMoviesAfterYear(year, movies){
console.log(`🎬 Movies released after ${year}`);
    let yearMovie =[];
    for (let i=0; i<movies.length; i++){
    let movieReleased = movies[i][1];
        if (movieReleased > year){
            yearMovie.push(movies[i]);
        }
    }
yearMovie.sort((a,b) => a[1]-b[1]);  // movies are parametars, calculation based on years - a[1],b[1]
console.table(yearMovie);
return yearMovie;
}
getMoviesAfterYear(1970,kubrickMovies);
getMoviesAfterYear(1990,kubrickMovies);
console.groupEnd();

// Get Unique Genres

console.groupCollapsed(`Get unique genres`);
function getUniqueGenres(movies){
console.log(`🎬 Getting all genres from movie list`)
    let uniqueGenre =[];
    for(let i=0; i<movies.length; i++){                  // for every movie
        for (let j=0; j<(movies[i][2]).length; j++){    // every nested genre array
        if (!uniqueGenre.includes(movies[i][2][j])){   // see *note*
            uniqueGenre.push(movies[i][2][j]);        // push only genre

        }
        }
    }
uniqueGenre.sort();                               
console.log(`🍿 All unique genres from the movie list (sorted alphabetically): `, uniqueGenre);
return uniqueGenre;
}
getUniqueGenres(kubrickMovies);
console.groupEnd();

/*
*NOTE*

Do not use `(movies[i][2][j] !== uniqueGenre[i])` - leads to incorrect comparisons!
- comparing the current genre to a single element in the uniqueGenre array (the one at [i]).
It does not check if the genre already exists anywhere within the entire array.
E.g.,duplicates like 'Drama' from 'Full Metal Jacket' and 'Eyes Wide Shut'are both added to the array.

The `.includes()` method with '!' solves this by checking the entire array, not just a single index.
*/


// Find Most Productive Decade

console.groupCollapsed(`Find Most Productive Decade`);

function findMostProductiveDecade(movies){
    console.log (`🎬 Most productive decade(s):`);
    let c60s=0;
    let c70s=0;
    let c80s=0; 
    let c90s=0;
    let c00s=0;
    let c10s=0;
    let c20s=0;
    for (let i=0; i<movies.length; i++){
         if ((movies[i][1]>=1960) && (movies[i][1]<1970)){
            c60s++;
        }else if ((movies[i][1]>=1970) && (movies[i][1]<1980)){
            c70s++;
         }else if ((movies[i][1]>=1980) && (movies[i][1]<1990)){
            c80s++;
         }else if ((movies[i][1]>=1990) && (movies[i][1]<2000)){
            c90s++;
         }else if ((movies[i][1]>=2000) && (movies[i][1]<2010)){
            c00s++;
        }else if ((movies[i][1]>=2010) && (movies[i][1]<2020)){
            c10s++;
         }else if (movies[i][1]>=2020){
            c20s++;
        }
    }
let decades =[c60s, c70s, c80s, c90s, c00s, c10s, c20s];
decades.sort((a,b)=> b-a);
let max = decades[0];
if (c60s === max) {            // more if's - goes through all if's 
    console.log(`🍿 1960's`); // (if there are more equally productive decades like in Kubrick's case)
  }                          // unlike switch and if-else - thy stop after first true
if (c70s === max) {
    console.log(`🍿 1970's`);
  }
if (c80s === max) {
    console.log(`🍿 1980's`);
  }
if (c90s === max) {
    console.log(`🍿 1990's`);
  }
if (c00s === max) {
    console.log(`🍿 2000's`);
  }
if (c10s === max) {
    console.log(`🍿 2010's`);
  }
if (c20s === max) {
    console.log(`🍿 2020's`);
  }
return decades;
}
findMostProductiveDecade(kubrickMovies);
console.groupEnd();

// Testing the code with Tarantino's Filmography

console.groupCollapsed (`Testing the implementation 🧪 `);

// Data for the test

let tarantinoMovies = [
  ['Reservoir Dogs', 1992, ['Crime', 'Thriller']],
  ['Pulp Fiction', 1994, ['Crime', 'Drama']],
  ['Kill Bill: Vol. 1', 2003, ['Action', 'Thriller']],
  ['Inglourious Basterds', 2009, ['War', 'Drama']],
  ['Django Unchained', 2012, ['Western', 'Drama']],
  ['The Hateful Eight', 2015, ['Western', 'Mystery']],
  ['Once Upon a Time in Hollywood', 2019, ['Comedy', 'Drama']]
];

// Testing code

console.log('--- Testing Tarantino filmography ---');
console.log('Original movie list:');
console.table(tarantinoMovies);

console.log('Movies by genre - crime:');
getMoviesByGenre('Crime', tarantinoMovies); 

console.log('Movies filmed after 2000. (sorted):');
getMoviesAfterYear(2000, tarantinoMovies); 

console.log('Unique Genres:');
getUniqueGenres(tarantinoMovies);

console.log('Most productive decade:');
findMostProductiveDecade(tarantinoMovies);

console.groupEnd;

/* Notes about testing:

Original testing code was in the form `console.log(getMoviesAfterYear(2000,tarantinoMovies))`.
Since the functions in code already implemented console.logs, this caused output duplicates.
I deleted the unnecessary console.log's in the testing code and left only the function calls
(e.g. `getMoviesAfterYear(2000,tarantinoMovies)`.

 */