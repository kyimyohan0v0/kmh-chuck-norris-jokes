const http = require("http");

let joke = ''
const host = "api.icndb.com"
const path = "/jokes/random"

const request = http.request(
  { host, path },
  function(respond) {
    var data = "";
    respond.on("data", function(chunk) {
      data += chunk;
    });

    respond.on("end", function() {
      var jsondata = JSON.parse(data);
      joke += jsondata.value.joke;
    });
  }
);

request.on("error", function(e) {
  console.log(e.message);
});

request.end();

module.exports = joke