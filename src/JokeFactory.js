const http = require('http')

class JokeFactory {

    constructor() {
        this.request = http.request({host: 'api.icndb.com', path: '/jokes/random'}, function(respond){
            var data = ''
            respond.on('data', function(chunk){
                data += chunk;
            })

            respond.on('end', function() {
                var jsondata = JSON.parse(data);
                this.joke += jsondata.value.joke
            })
        })

        this.request.on('error', function(e) {
            console.log(e.message)
        })

        this.request.end()
    }

    getRandomJoke() {
        return this.joke;
    }
}

module.exports = JokeFactory