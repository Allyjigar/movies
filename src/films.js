// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  console.log("EXERCICE 1 ->", result);
  return result;
};

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result =  array.filter(array => director === array.director); // filtro el array por el director
  console.log("EXERCICE 2 ->", result);
  return result;
};

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) { 
  let arrayDirector = getMoviesFromDirector(array, director); //creo el array del director con filter
  let total = arrayDirector.reduce((a, b) => a += b.score, 0); // sumo todas las notas del array
  let result = Number((total / arrayDirector.length).toFixed(2)); // divido el total entre los elementos del array para la media y fijo dos decimales
  console.log("EXERCICE 3 ->", result);
  return result;
};


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let arrayTitulo = Object.assign([], array).sort(((a, b) => a.title > b.title ? 1: -1)); // hago copia profunda del array para no mutar el original // ordeno el array por title
  let arraySoloTitulo = arrayTitulo.map(movie => movie.title); // recorro el nuevo array para que muestre solo el título
  let result = arraySoloTitulo.slice(0, 20); // muestro solo los 20 primeros
  console.log("EXERCICE 4 ->", result);
  return result;
};


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayAnys = array.sort((a, b) => {
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

  let result = [...arrayAnys];
  console.log("EXERCICE 5 ->", result);
  return result;
};

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre){
  let arrayNuevo = array.map(movie => movie === movie.genre.filter(element => element === genre));
  console.log(arrayNuevo);
  let result = moviesAverageOfDirector(arrayNuevo, genre);  
  console.log("EXERCICE 6 ->", result);
  return result;
}; 

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let arrayMin = array.map((movie) => { //recorre el array con map, transforma de string a número los valores para hacer los cálculos.
    const regex = /^[0-9]*$/;
    let valor2; 
    if (regex.test(movie.duration[4])){
      valor2 = Number(movie.duration[3] + movie.duration[4]); //comprueba si el 4 es número o letra, para utilizarlo o no
    } 
    if (!regex.test(movie.duration[4] || movie.duration[4] === null)){ //comprueba si 4 es null o no es numero
      valor2 = Number(movie.duration[3]);
    } 
    if (movie.duration[3] === null){ // comprueba si 3 es null
      valor2 = Number(0);
    }

    let valor1 = Number(movie.duration[0])*60; // pasa las horas a minutos
    movie.duration = valor1 + valor2; // le suma los minutos y 
    let minuts = movie.duration;
    return minuts;
  });

  minuts = arrayMin.duration;
  let result = arrayMin;
  console.log("EXERCICE 7 ->", result)
  return result;
  };

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let arrayYear = array.filter(array => year === array.year); // array con películas de ese año
  let arrayOrdenado = arrayYear.sort((a, b) => a.score < b.score ? 1: -1); //ordeno el array por nota
  let result = [arrayOrdenado[0]]; // muestro el primer elemento del array q será la más alta 

  console.log("EXERCICE 8 ->", result);
  return result;

};



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
