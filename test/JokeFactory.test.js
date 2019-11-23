const JokeFactory = require('../src/JokeFactory')

test('Get a random joke', () => {
    const factory = new JokeFactory()

    const originalJoke = factory.joke

    factory.joke = "Chuck Norris uses ribbed condoms inside out, so he gets the pleasure."

    expect(factory.getRandomJoke()).toBe("Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.")

    factory.joke = originalJoke
})