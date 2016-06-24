var Bot = require('./slackSend');
var http = require('http');
var server = http.createServer(function(req, res){
  res.end();
});

console.log('we here');

Bot.remindAllUsers()
// setTimeout(function(){
//   Bot.remindSoleUsers()
// },5000)



server.listen(8080);
