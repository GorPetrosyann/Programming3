var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("Final"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

 xx = 2;
 Xot = [];
 Eater = [];
 eaterbomb = [];
 grassboost = [];
 matrix = [];
 const Grass = require("./Final/Grass")
 const GrassEater = require("./Final/GrassEater")
 const EaterBomb = require("./Final/EaterBomb")
 const GrassBoost = require("./Final/GrassBoost")



 function generate(a,b){
   for (let i = 0; i < a; i++) {
       matrix.push([]);
       for (let j = 0; j < b; j++) {
         matrix[i].push(Math.round(Math.random() * xx));
       }
   }
   io.sockets.emit("send matrix", matrix)
}


generate(40,40);

function objectsCreate() {
   for (let y = 0; y < matrix.length; y++) {
     for (let x = 0; x < matrix[y].length; x++) {
       if (matrix[y][x] == 2) {
         Eater.push(new GrassEater(x, y));
       }
        else if (matrix[y][x] == 1) {
         Xot.push(new Grass(x, y));
       }
       else if(matrix[y][x] == 3){
         eaterbomb.push(new EaterBomb(x,y));
       }else if(matrix[y][x] == 4){
         grassboost.push(new GrassBoost(x,y));
       }
     }
   }
   io.sockets.emit("send matrix", matrix)
}

function game(){
   for (let i = 0; i < Xot.length; i++) {
      Xot[i].mul();
    }for (let i = 0; i < Eater.length; i++) {
    Eater[i].eat();
    }

  for (let i = 0; i < eaterbomb.length; i++) {
    eaterbomb[i].move()
  }

  for (let i = 0; i < grassboost.length; i++) {
    grassboost[i].energy2()
  }
  io.sockets.emit("send matrix", matrix)

}

setInterval(game,1000)



  io.on('connection', function (socket) {
    objectsCreate()
  });
