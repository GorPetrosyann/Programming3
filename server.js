var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("Final"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

 

  io.on('send.status', function (socket) {
    objectsCreate()
  });
