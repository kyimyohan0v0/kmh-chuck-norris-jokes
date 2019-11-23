const joke = require('./Request')

class JokeFactory {

    constructor() {
        this.joke = joke
    }

    getRandomJoke() {
        return this.joke;
    }
}

module.exports = JokeFactory