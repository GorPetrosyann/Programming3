let side = 25;
let fr = 5000;
var socket = io();
// let Xot = [];
// let Eater = [];
// let eaterbomb = [];
// let Gbeat = [];
// let grassboost = [];
// let matrix = [];

// function generate(a,b){
//     for (let i = 0; i < a; i++) {
//         matrix.push([]);
//         for (let j = 0; j < b; j++) {
//           matrix[i].push(Math.round(Math.random() * 5));
//         }
//     }
// }


// generate(25,25);

// function objectsCreate() {
//     for (let y = 0; y < matrix.length; y++) {
//       for (let x = 0; x < matrix[y].length; x++) {
//         if (matrix[y][x] == 2) {
//           Eater.push(new GrassEater(x, y));
//         } else if (matrix[y][x] == 1) {
//           Xot.push(new Grass(x, y));
//         }else if(matrix[y][x] == 3){
//           eaterbomb.push(new EaterBomb(x,y));
//         }else if(matrix[y][x] == 4){
//           grassboost.push(new GrassBoost(x,y));
//         }
//         else if(matrix[y][x] == 5){
//           Gbeat.push(new GBEater(x,y));
//         }
//       }
//     }
// }

function setup() {
  // createCanvas(matrix[0].length * side, matrix.length * side);
  createCanvas(800,800)
  background("red");
  frameRate(fr)
}

// objectsCreate()
function update(matrix){
    
    for(let y = 0;y < matrix.length;y++){
        for(let x = 0; x < matrix[y].length; x++){
          if(matrix[y][x] == 1){
                fill("green");
            }else if (matrix[y][x] == 0){
                fill ("gray")
           }else if (matrix[y][x] == 2){
              fill ("yellow")
           }else if (matrix[y][x] == 3){
             fill ("blue")
           }else if(matrix[y][x] == 4){
             fill("purple")
           }
           else if (matrix[y][x == 5]){
              fill("red")
           }
            rect(x * side,y * side, side, side);
        }
            
        
    }
    // for (let i = 0; i < Xot.length; i++) {
    //     Xot[i].mul();
    //   }
    
    // for (let i = 0; i < Eater.length; i++) {
    //   Eater[i].eat();
    //   }
    // for (let i = 0; i < eaterbomb.length; i++) {
    //   eaterbomb[i].energy1()
    // }
    
    // for (let i = 0; i < grassboost.length; i++) {
    //   grassboost[i].energy2()
    // }
    // for (let i = 0; i < Gbeat.length; i++) {
    //   Gbeat[i].eat()
    // }
  }
  socket.on('send matrix', update)