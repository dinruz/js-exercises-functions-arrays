// Initial Data

const classicBooks = [
  ['War and Peace', 'Leo Tolstoy', 1869, 1225, ['Epic', 'Historical'], 'Russia'],
  ['Crime and Punishment', 'Fyodor Dostoevsky', 1866, 520, ['Philosophical', 'Crime'], 'Russia'],
  ['The Brothers Karamazov', 'Fyodor Dostoevsky', 1880, 824, ['Philosophical', 'Psychological'], 'Russia'],
  ['Anna Karenina', 'Leo Tolstoy', 1878, 864, ['Realism', 'Romance'], 'Russia'],
  ['One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 417, ['Magical Realism'], 'Colombia'],
  ['1984', 'George Orwell', 1949, 328, ['Dystopian', 'Sci-Fi'], 'England'],
  ['Hamlet', 'William Shakespeare', 1603, 275, ['Tragedy'], 'England']
];

console.groupCollapsed(`Original list`);
function displayLiterature(literature){
    console.log ('📚 Original literature list:');
    console.table(literature);
}
displayLiterature(classicBooks);
console.groupEnd();

// Get All Russian Authors

console.groupCollapsed(`I. Get russian authors`);
function getAllRussianAuthors(literature){
     console.log ('✍️ Literature with Russian authors: ');
    let russianAuthors = literature.filter((book)=> book[5] === 'Russia');
    console.table (russianAuthors);
    return russianAuthors;
}
getAllRussianAuthors(classicBooks);
console.groupEnd();

// Get Average Page Count By Genre

console.groupCollapsed(`II. Get average page count by genre`);
function getAveragePageCountByGenre(genre,literature){
    let booksWithGenre = literature.filter((book) => (book[4]).includes (genre));
    let allPages = booksWithGenre.reduce((acc, book) => (acc+book[3]),0);
    let avgPages;
    if (allPages === 0){
      console.log (`[❗] Genre ${genre} does not exsist in this library.`);
    }else{
    const avgPages = allPages/(booksWithGenre.length);
    console.log(`📖 Average page count for genre ${genre}:\n ${avgPages} pages`);
    }
    return avgPages; 
}

getAveragePageCountByGenre('Philosophical',classicBooks);
getAveragePageCountByGenre('Tragedy',classicBooks);
getAveragePageCountByGenre('NonExsistentGenre',classicBooks);
console.groupEnd();

// Get Books Written Before Specific Year

console.groupCollapsed(`III. Get books written before specific year`);
function getBooksWrittenBefore(literature,year){
    console.log (`📚 Books written before ${year} (in alphabetical order):`);
    const booksBefore = literature.filter ((book) => book[2]<year);
    const booksBeforeSorted = booksBefore.sort();
    if (booksBeforeSorted.length === 0){
      console.log(`[❗] Books not found.`)
    } else{
    console.table(booksBeforeSorted);
    }
return booksBeforeSorted;
}
getBooksWrittenBefore(classicBooks,1870);
getBooksWrittenBefore(classicBooks,1400);
console.groupEnd();

// Test 

console.groupCollapsed(`Test 🧪`);

const testLibrary = [
  ['The Master and Margarita', 'Mikhail Bulgakov', 1967, 384, ['Fantasy', 'Satire'], 'Russia'],
  ['The Idiot', 'Fyodor Dostoevsky', 1869, 656, ['Philosophical'], 'Russia'],
  ['Don Quixote', 'Miguel de Cervantes', 1605, 863, ['Adventure', 'Comedy'], 'Spain']
];

console.log('--- Test 1: All Russian Authors ---');
const allRussianAuthors = getAllRussianAuthors(testLibrary);

console.log('--- Test 2: Average Page Count by Genre ---');
const avgPagesFantasy = getAveragePageCountByGenre('Fantasy', testLibrary);

console.log('--- Test 3: Books written before a specific year ---');
const booksBefore1900 = getBooksWrittenBefore(testLibrary, 1900);

console.groupEnd();

/* Note:
Deleted console.log's in testing code since I already use console.logs inside functions.
*/