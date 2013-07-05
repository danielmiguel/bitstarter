var express = require('express');

function getContentFromFile(filename){

var fs = require('fs');

var res = fs.readFileSync(filename, 'utf-8');
 return res;


}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getContentFromFile('index.html'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
