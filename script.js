// const numberOfFilms = prompt('Сколько фильмов Вы уже просмотрели?', '');
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
}

start();

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



function rememberMyFilms () {
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
}

rememberMyFilms();



function personalDetectLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмтренно довольно мало фильсов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
       console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }

}

personalDetectLevel();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}

console.log(personalMovieDB);

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жан под номеом ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}

