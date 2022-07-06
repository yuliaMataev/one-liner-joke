const oneLinerJoke = require("one-liner-joke");
//var getRandomJoke = oneLinerJoke.getRandomJoke();

function getJokesArray(number_of_jokes) {
  let a = [];

  for (i = 0; i < number_of_jokes; i++) {
    const jokeObject = oneLinerJoke.getRandomJoke();
    theJoke = jokeObject.body;
    a.push(theJoke);
  }

  return a;
}

module.exports = {
  getJokesArray,
};
