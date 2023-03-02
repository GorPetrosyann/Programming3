let side = 25;
var Xot = [];
var Eater = [];
var eaterbomb = [];
var grassboost = [];
var matrix = [];

function generate(a,b){
  for (let i = 0; i < a; i++) {
      matrix.push([]);
      for (let j = 0; j < b; j++) {
        matrix[i].push(Math.round(Math.random() * 2));  
      }
  }
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
  frameRate(2)
  objectsCreate()
}




function draw(){

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
   eaterbomb[i].move()
 }

 for (let i = 0; i < grassboost.length; i++) {
   grassboost[i].energy2()
 }

}
