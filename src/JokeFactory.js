class JokeFactory {

    
    
    constructor(...jokes) {
        if(jokes.length) {
            this.jokes = [...jokes];
        } else {
            this.jokes = [
              "Chuck Norris has already been to Mars; that's why there are no signs of life there.",
              "Guns don't kill people. Chuck Norris kills People."
            ];
        }
    }

    getRandomJoke() {
        return this.jokes[Math.floor(Math.random() * this.jokes.length)];
    }
}

module.exports = JokeFactory