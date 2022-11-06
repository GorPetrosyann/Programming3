// class GrassEater {
//     constructor(x, y) {
    
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 3;
//     }

// newDir() {
//     this.directions = [
//         [this.x - 1, this.y - 1],
//         [this.x, this.y - 1],
//         [this.x + 1, this.y - 1],
//         [this.x - 1, this.y],
//         [this.x + 1, this.y],
//         [this.x - 1, this.y + 1],
//         [this.x, this.y + 1],
//         [this.x + 1, this.y + 1]
//     ];
// }

// getDirections(xx) {
//     this.newDir();
//     let found = [];

//     for (let i = 0; i < this.directions.length; i++) {
//         let x = this.directions[i][0];
//         let y = this.directions[i][1];
//         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//             if (matrix[y][x] == xx) {
//                 found.push(this.directions[i]);
//             }
//         }
//     }
//     return found;
// }
class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }




move() {
    let cord = random(this.chooseCell(0));
    if (cord) {
        let x = cord[0];
        let y = cord[1];
        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
    }
}

eat() {   
    let cord = random( this.chooseCell(1));
    if (cord) {
        let x = cord[0];
        let y = cord[1];
        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
        this.multiply++;
        this.energy++;
       for (let i = 0; i < Xot.length; i++) {
            if (x == Xot[i].x && y == Xot[i].y) {
                Xot.splice(i, 1);
            }
        }
         if (this.multiply == 10) {
            this.mul()
            this.multiply = 0;
        }


    } else {
        this.move();
        this.energy--;
        if (this.energy < 3) { 
            this.die();
        }
    }
}

mul() {
    let cord = random(this.chooseCell(0));

    if (cord) {
        let x = cord[0];
        let y = cord[1];

        this.multiply++;
        Eater.push(new GrassEater(x, y));

        matrix[y][x] = 1;
        this.multiply = 0;
    }
}

die() {
    matrix[this.y][this.x] = 0;

    for (let i = 0; i < Eater.length; i++) {
        if (this.x == Eater[i].x && this.y == Eater[i].y) {
            Eater.splice(i, 1);
        }
    }
}

}