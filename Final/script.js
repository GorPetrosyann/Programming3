let side = 25;
var Xot = [];
var Eater = [];
var eaterbomb = [];
var grassboost = [];
var Eate = [];
var AllEatere = [];
var matrix = [];
var socket = io();

function generate(a,b){
  for (let i = 0; i < a; i++) {
      matrix.push([]);
      for (let j = 0; j < b; j++) {
        matrix[i].push(Math.round(Math.random() * 6));  
      }
  }
}


generate(15,15);

function frame1(){
  var button = document.querySelector("#myButton");
  button.addEventListener('click', ()=>{
     frameRate(2)
     document.getElementById("myP").innerHTML = "Ներկայիս եղանակը ՝ Ձմեռ";   
  })
}
function frame2(){
  var button = document.querySelector("#myButton2");
  button.addEventListener('click', ()=>{
     frameRate(10)
     document.getElementById("myP").innerHTML = "Ներկայիս եղանակը ՝ Ամառ";   
  })
}

function objectsCreate() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        Xot.push(new Grass(x, y));
      }
       else if (matrix[y][x] == 2) {
        Eater.push(new GrassEater(x, y));
      }
      else if(matrix[y][x] == 3){
        eaterbomb.push(new EaterBomb(x,y));
      }
      else if(matrix[y][x] == 4){
        grassboost.push(new GrassBoost(x,y));
      }else if(matrix[y][x] == 5){
        Eate.push(new Eat(x,y))
      }else if(matrix[y][x] == 6){
        AllEatere.push(new AllEater(x,y))
      }
    }
  }
}


function setup() {
  createCanvas(380,380)
  background("blue");
  frameRate(1)
  frame1()
  frame2()
  objectsCreate()

}




function draw(){
  if(frameCount % 1 == 0) {
    var status = {
      "frameCount": Math.round(frameCount/10),
      "Grass": Xot.length,
      "Eater": Eater.length,
      "GrassBoost": grassboost.length,
      "EaterBomb": eaterbomb.length,
      "Eat":Eate.length,
      "AllEater":AllEatere.length,
    } 
    socket.emit('send status', status);
  }
  myJSON = JSON.stringify(status)
  document.getElementById("demo").innerHTML = myJSON;
  
    for(let y = 0;y < matrix.length;y++){
        for(let x = 0; x < matrix[y].length; x++){
          if(matrix[y][x] == 1){
                fill("green");
            }else if (matrix[y][x] == 0){
                fill ("gray")
           }
           else if (matrix[y][x] == 2){
              fill ("yellow")
           }
            else if (matrix[y][x] == 3){
              fill ("blue")
            }else if(matrix[y][x] == 4){
              fill("purple")
            }else if(matrix[y][x] == 5){
              fill("red")
            }else if(matrix[y][x] == 6){
              fill("black")
            }
            rect(x * side,y * side, side, side);
        }
            
    
    }

    game()
    
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
 for (let i = 0; i < Eate.length; i++) {
  Eate[i].eat1()
}
for (let i = 0; i < AllEatere.length; i++) {
  AllEatere[i].eat2()
}
}


