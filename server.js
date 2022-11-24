var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("Final"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);


 Xot = [];
 Eater = [];
 eaterbomb = [];
 Gbeat = [];
 grassboost = [];
 matrix = [];
 const Grass = require("./Final/Grass")
 const GrassEater = require("./Final/GrassEater")
 const EaterBomb = require("./Final/EaterBomb")
 const GrassBoost = require("./Final/GrassBoost")
 const GBEater = require("./Final/GBEater")


 function generate(a,b){
   for (let i = 0; i < a; i++) {
       matrix.push([]);
       for (let j = 0; j < b; j++) {
         matrix[i].push(Math.round(Math.random() * 5));
       }
   }
   io.sockets.emit("send matrix", matrix)
}


generate(25,25);

function objectsCreate() {
   for (let y = 0; y < matrix.length; y++) {
     for (let x = 0; x < matrix[y].length; x++) {
       if (matrix[y][x] == 2) {
         Eater.push(new GrassEater(x, y));
       } else if (matrix[y][x] == 1) {
         Xot.push(new Grass(x, y));
       }else if(matrix[y][x] == 3){
         eaterbomb.push(new EaterBomb(x,y));
       }else if(matrix[y][x] == 4){
         grassboost.push(new GrassBoost(x,y));
       }
       else if(matrix[y][x] == 5){
         Gbeat.push(new GBEater(x,y));
       }
     }
   }
   io.sockets.emit("send matrix", matrix)
}

function game(){
   for (let i = 0; i < Xot.length; i++) {
      Xot[i].mul();
    }
  
  for (let i = 0; i < Eater.length; i++) {
    Eater[i].eat();
    }
  for (let i = 0; i < eaterbomb.length; i++) {
    eaterbomb[i].energy1()
  }
  
  for (let i = 0; i < grassboost.length; i++) {
    grassboost[i].energy2()
  }
  for (let i = 0; i < Gbeat.length; i++) {
    Gbeat[i].eat()
  }
  io.sockets.emit("send matrix", matrix)

}

setInterval(game,1000)



io.on('connection', function (socket) {
   objectsCreate()
});
