var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var index_content = fs.readFileSync('index.html').toString();


app.get('/', function(request, response) {
  response.send(index_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
