var express = require('express');

function getContentFromFile(filename){
try{

var fs = require('fs');

var res = fs.readFileSync(filename);
 return res.toString();
}
catch(Err){return "Error reading the file " + filename;}

}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getContentFromFile('index.html'));
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
