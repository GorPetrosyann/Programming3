const LivingCreature = require("./LivingCreature")
module.exports = class GBEater extends LivingCreature {
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
   random(ch){
    let found = this.chooseCell(ch);
    let result = Math.floor(Math.random()*found.length)
    return found[result];
}
   move() {
    let cord = this.random(0);
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
    let cord = this.random(4);
    if (cord) {
        let x = cord[0];
        let y = cord[1];
        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
        this.multiply++;
        this.energy++;
       for (let i = 0; i < grassboost.length; i++) {
            if (x == grassboost[i].x && y == grassboost[i].y) {
                grassboost.splice(i, 1);
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
    let cord = this.random(0);

    if (cord) {
        let x = cord[0];
        let y = cord[1];

        this.multiply++;
        Gbeat.push(new GBEater(x, y));

        matrix[y][x] = 1;
        this.multiply = 0;
    }
}

die() {
    matrix[this.y][this.x] = 0;

    for (let i = 0; i < Gbeat.length; i++) {
        if (this.x == Gbeat[i].x && this.y == Gbeat[i].y) {
            Gbeat.splice(i, 1);
        }
    }
}
}