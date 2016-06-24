var http = require('http');
var server = http.createServer(function(req, res){
  console.log('connected')
  res.end()
})

console.log('we here');

server.listen(8080);
