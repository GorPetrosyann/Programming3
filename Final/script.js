let side = 10;
let Xot = [];
let Eater = [];
let eaterbomb = [];
let eaterhell = [];
let grassboost = [];
let matrix = [];

function generate(a,b){
    for (let i = 0; i < a; i++) {
        matrix.push([]);
        for (let j = 0; j < b; j++) {
          matrix[i].push(Math.round(Math.random() * 4));
        }
    }
}


generate(60,60);

function objectsCreate() {
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 2) {
          Eater.push(new GrassEater(x, y));
        } else if (matrix[y][x] == 1) {
          Xot.push(new Grass(x, y));
        }else if(matrix[y][x] == 3){
          eaterbomb.push(new EaterBomb(x,y));
        // }else if(matrix[y][x] == 4){
        //   eaterhell.push(new EaterHell(x,y));
        }else if(matrix[y][x] == 4){
          grassboost.push(new GrassBoost(x,y));
        }
      }
    }
}

function setup() {
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("red");
}

objectsCreate()
function draw(){
    
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
          //  }else if (matrix[y][x == 4]){
          //    fill("red")
           }else if(matrix[y][x] == 4){
             fill("purple")
           }
            rect(x * side,y * side, side, side);
        }
            
        
    }
    for (let i = 0; i < Xot.length; i++) {
        Xot[i].mul();
      }
    
    for (let i = 0; i < Eater.length; i++) {
      Eater[i].eat();
      }
    for (let i = 0; i < eaterbomb.length; i++) {
      eaterbomb[i].energy1()
    }
    // for (let i = 0; i < eaterhell.length; i++) {
    //   eaterhell[i].eat()
    // }
    for (let i = 0; i < grassboost.length; i++) {
      grassboost[i].energy2()
    }
      
  }
