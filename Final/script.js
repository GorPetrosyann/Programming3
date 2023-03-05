import { Socket } from "socket.io";

let side = 25;
var Xot = [];
var Eater = [];
var eaterbomb = [];
var grassboost = [];
var matrix = [];
var socket = io();

function generate(a,b){
  for (let i = 0; i < a; i++) {
      matrix.push([]);
      for (let j = 0; j < b; j++) {
        matrix[i].push(Math.round(Math.random() * 4));  
      }
  }
}


generate(40,40);




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
      }
    }
  }
}


function setup() {
  createCanvas(800,800)
  background("blue");
  frameRate(10)

  objectsCreate()

}




function draw(){
  if(frameCount / 10 == 0){
    var status = {
      "frame Count": Math.round(frameCount/60),
      "Grass": Xot.length,
      "Eater": Eater.length,
      "GrassBoost": grassboost.length,
      "EaterBomb": eaterbomb.length,
    }
    socket.emit('send status', status)
  }
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

}

function generate1(){
  var button = document.querySelector("#myButton");
  button.addEventListener('click', ()=>{
      for (let y = 0; y < matrix.length; y += 5) {
        for (let x = 0; x < matrix[y].length; x += 5) {
          if(matrix[y][x] == 0){
            matrix[y][x] = 3;
            eaterbomb.push(new EaterBomb(x,y));
    } 
    }
  }
  })

}
// function generate2(){
//   var button = document.querySelector("#myButton2");
//   button.addEventListener('click', ()=>{
//       for (let y = 0; y < matrix.length; y += 15) {
//         for (let x = 0; x < matrix[y].length; x += 15) {
//           if(matrix[y][x] == 0){
//             matrix[y][x] = 4;
//             console.log(matrix[y][x]);
            
//       }
//     } 
//     }
//   })
// }


