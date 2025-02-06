var http = require('http');

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world!');
})

server.listen(3001, ()=> {
console.log("Servidor Http corriendo en pto 3001")
});