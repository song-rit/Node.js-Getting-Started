var http = require("http");
http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : ok
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body ad "Hello World"
    response.end("Hello World\n");
}).listen(8080);


console.log("Sever running at http://127.0.0.1:8080/");

