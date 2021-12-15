var http = require("http");

var server = http.createServer(function (request, response) {
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>omnifood corporation</h1>");
    response.end(
      "<html><body>welcome to omnifood home page URL was: " +
        request.url +
        "</body></html>"
    );
  } else if (request.url == "/contents") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>omnifood corporation</h1>");
    response.end(
      "<html><body>>welcome to omnifood contents page URL was: " +
        request.url +
        "</body></html>"
    );
  } else if (request.url == "/cities") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>omnifood corporation</h1>");
    response.end(
      "<html><body>>welcome to omnifood cities page URL was: " +
        request.url +
        "</body></html>"
    );
  } else {
    response.end("Invalid Request");
  }
});

server.listen(5000);

console.log("Server running1");
