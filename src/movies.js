// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArray = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );

  const spielbergDramaMovies = spielbergMovies.filter((dramaMovie) =>
    dramaMovie.genre.includes("Drama")
  );

  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoreArray = moviesArray.map((total) => {
    return total.score || 0;
  });
  const totalScore = scoreArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const avgScore = totalScore / scoreArray.length;
  return +avgScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((dramaMovie) =>
    dramaMovie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const totalScoreDrama = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  const avgScoreDrama = totalScoreDrama / dramaMovies.length;
  return +avgScoreDrama.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const deepCopyOfTheArray = structuredClone(moviesArray);
  deepCopyOfTheArray.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title, undifined, {
        sensitivity: "base",
      });
    }
    return movieA.year - movieB.year;
  });
  return deepCopyOfTheArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const deepCopyOfTheArray = structuredClone(moviesArray);
  // or const deepCopyOfTheArray = [...moviesArray];
  deepCopyOfTheArray.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  const titleMovies = deepCopyOfTheArray.map((movie) => {
    return movie.title;
  });

  if (titleMovies.length >= 20) {
    const newArray = [];
    for (i = 0; i < 20; i++) {
      const element = titleMovies.shift();
      newArray.push(element);
    }
    return newArray;
  } else {
    return titleMovies;
  }
}

//console.log(students);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = structuredClone(moviesArray);
  const modifiedMovies = copy.map((movie) => {
    //parseInt
    let time = movie.duration.split(" ");
    time = time.map((entry) => {
      if (entry.includes("h")) {
        return parseInt(entry) * 60;
      } else {
        return parseInt(entry);
      }
    });
    time = time.reduce((acc, val) => acc + val, 0);
    movie.duration = time;
    return movie;
  });
  console.log(modifiedMovies);
  return copy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const organizedByYear = moviesArray.reduce((acc, movie) => {
    if (movie.year in acc) {
      acc[movie.year].push(movie.score);
    } else {
      acc[movie.year] = [movie.score];
    }
    return acc;
  });
  console.log(organizedByYear);
}

//const arrayOfYears = [...new Set(moviesArray.map((movie) => ùovie.year))]
//console.log(arrayOfYears)
//arrayOfYears.forEach((currentYear) => {
//    const movieWithCurrentYear = moviesArray.filter(
//       (movie) => movie.year === currentYear
//    )

//    console.log("same year movies:", moviesWithCurrentYear)
//    const total = moviesWithCurrentYear.reduce((acc, val) => acc + val.score, 0)
//    const average = +(total / movieWithCurrentYear.length).toFixed(2)
//    console.log(average)
//    if(average > max) {
//        max = average
//        bestYear = currentYear
//    }
//})
