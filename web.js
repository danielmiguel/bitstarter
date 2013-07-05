var express = require('express');

function getContentFromFile(filename){


    var fs = require('fs');
    fs.readFileSync(filename, function(err, data){
	if(err)
	    return "error reading the file";
	return "data";
    }
	return "index";

}
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getContentFromFile('index.html'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
