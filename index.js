var http = require('http');
var fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('./src/index.html', null, function(error,data){
      if(error){
        response.writeHead(404);
        response.write('file not found!');
      }
      else {
        response.write(data);
      }
      response.end();
    });
    response.end();
};

const port = process.env.PORT || 4200;
http.createServer(onRequest).listen(4200);

console.log("Server running at http://localhost:%d", port);
