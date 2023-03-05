
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("Final"));
fs.appendFileSync("file.json", "")
app.get('/', function (req, res) {
   res.redirect('index.html');
});



 
io.on('connection', (socket) => {
   socket.on('send status',function (status){
      console.log(status);
     fs.appendFileSync("file.json", JSON.stringify(status))
   });
 });



server.listen(3000);