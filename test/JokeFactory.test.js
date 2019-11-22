const JokeFactory = require('../src/JokeFactory')

test('Get a random joke', () => {
    const factory = new JokeFactory('ha ha')

    expect(factory.getRandomJoke()).toBe('ha ha')
})

test("Get a predefined joke", () => {
  const predefinedJokes = [
    "Chuck Norris has already been to Mars; that's why there are no signs of life there.",
    "Guns don't kill people. Chuck Norris kills People."
  ]

  const factory = new JokeFactory()


  expect(predefinedJokes).toContain(factory.getRandomJoke())
});