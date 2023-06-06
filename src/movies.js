// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// Function "getAllDirectors" getAllDirectors = [direct1, director2, director3];
// should be declared
// should return an array
// should return a new array, not update the original one
// should return a new array with the same length as the original one
// function getAllDirectors(moviesArray) {
//   return moviesArray;
//     let newArray = [];
//     const newDirectors = get
//   return newArray;
// }
function getAllDirectors(movies_Array) {
  let directors = movies_Array.map((movie) => movie.director);

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? solve using javascript
// Function "howManyMovies"
// should be declared
// should return a number
// should return 0 if the array is empty
// should return 0 if none of the movies in the array were directed by Steven Spielberg
// should only count drama movies
// should return 2 if there are only 2 Steven Spielberg movies
// should return 4 when called with the array of movies exported from "data.js"
// function howManyMovies(moviesArray) {

function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let stephenSpielbergDramaMovies = movies.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return stephenSpielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Function "dramaMoviesScore"
// should be declared
// should return a number
// should return the score of a single element array
// should return the average of the rating of the drama movies in the array
// should return the average of the array, a floating point number
// should only calculate the average for drama movies
// should return 0 if there is no Drama movie
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let totalScores = movies.reduce(function (sum, movie) {
    return sum + (movie.score || 0);
  }, 0);

  let averageScore = totalScores / movies.length;

  return parseFloat(averageScore.toFixed(2));
}

// ----------------------------------------------------------------------------------------

// Iteration 4: Drama movies - Get the average of Drama Movies

// Function "dramaMoviesScore"
// should be declared
// should return a number
// should return the score of a single element array
// should return the average of the rating of the drama movies in the array
// should return the average of the array, a floating point number
// should only calculate the average for drama movies
// should return 0 if there is no Drama movie
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let totalScores = dramaMovies.reduce(function (sum, movie) {
    return sum + (movie.score || 0);
  }, 0);

  let averageScore = totalScores / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedMovies = movies.slice().sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortedMovies = movies.slice().sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  let top20Movies = sortedMovies.slice(0, 20);

  let movieTitles = top20Movies.map(function (movie) {
    return movie.title;
  });

  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let convertedMovies = movies.map(function (movie) {
    let duration = movie.duration;

    let hours = 0;
    let minutes = 0;

    if (duration.includes("h")) {
      hours = parseInt(duration.split("h")[0]);
    }

    if (duration.includes("min")) {
      minutes = parseInt(duration.split("min")[0].split(" ")[1]);
    }

    let totalMinutes = hours * 60 + minutes;

    return {
      ...movie,
      duration: totalMinutes,
    };
  });

  return convertedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }

  let yearAverages = {};

  movies.forEach(function (movie) {
    let year = movie.year;
    let score = movie.score;

    if (yearAverages[year]) {
      yearAverages[year].totalScore += score;
      yearAverages[year].movieCount++;
    } else {
      yearAverages[year] = {
        totalScore: score,
        movieCount: 1,
      };
    }
  });

  let bestYear = null;
  let bestAverage = 0;

  for (let year in yearAverages) {
    let average = yearAverages[year].totalScore / yearAverages[year].movieCount;

    if (average > bestAverage || (average === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = average;
    }
  }

  return parseInt(bestYear);
}
