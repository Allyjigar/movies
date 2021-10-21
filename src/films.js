// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result =  array.filter(array => director === array.director); // filtro el array por el director
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) { 
  let arrayDirector = getMoviesFromDirector(array, director); //creo el array del director con filter
  let total = arrayDirector.reduce((a, b) => a += b.score, 0); // sumo todas las notas del array
  let result = (total / arrayDirector.length).toFixed(2); // divido el total entre los elementos del array para la media y fijo dos decimales
  console.log("EXERCICE 3 ->", result);
  return result;
};

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.sort((a, b) => a.title > b.title ? 1: -1); // ordeno el array por title
    console.log("EXERCICE 4 ->", result);
    return result;
};

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.sort(function (a, b) {
    if(a.year > b.year){
      return 1;
    } 
    if (a.year < b.year){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
    if (a.title < b.title){
      return -1;
    }
    return 0;
  
  });
  
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let arrayGenre =  array.filter(array => genre === array.genre); // filtro el array por género 
  let result =  moviesAverageOfDirector(arrayGenre); // aplico la función de la media de las calificaciones a ese género
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(movie => (Number(movie.duration[0])*60 + Number((movie.duration[3] + movie.duration[4])))); //recorre el array con map, transforma de string a número los valores para hacer los cálculos. 
  console.log("EXERCICE 7 ->", result)
  return result;
  };

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let arrayYear = array.filter(array => year === array.year);; // array con películas de ese año
  let arrayOrdenado = arrayYear.sort((a, b) => a.score > b.score ? 1: -1); //ordeno el array por nota
  let result = arrayOrdenado[0]; // muestro el primer elemento del array

  console.log("EXERCICE 8 ->", result);
  return result;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
