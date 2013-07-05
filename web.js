var express = require('express');

function getContentFromFile(filename){

return filename + " file";

}
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getContentFromFile('index'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
