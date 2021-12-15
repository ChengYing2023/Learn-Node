const http = require("http");

var server = http.createServer(function(request, response){
  response.writeHead(200,{
    "Content-Type": "text/html",
  });
  response.write("hello");
  response.end();
});

server.listen(3000, "127.0.0.1");
