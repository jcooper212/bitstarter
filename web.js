var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var inbuf = new Buffer(256);
inbuf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(inbuf.toString("utf-8",0,inbuf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
