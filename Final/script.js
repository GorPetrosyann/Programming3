let side = 25;
var socket = io();
let xx = 0;


function setup() {
  createCanvas(800,800)
  background("red");
}

function update(matrix){
    
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
  }
 

  
  let button = document.getElementById("myBtn");
  button.addEventListener("click", myFunction);
  function myFunction() {
    xx = 3;
  }
  

  socket.on('send matrix', update)