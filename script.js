const numberOfFilms = prompt('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На солько его оцените?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На солько его оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', '');
          b = prompt('На солько его оцените?', '');

    if (a != null && b != null && a != '' && b != ''&& a.length < 50) {
    
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

  
}

if (personalMovieDB.count < 10) {
    console.log('Просмтренно довольно мало фильсов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);