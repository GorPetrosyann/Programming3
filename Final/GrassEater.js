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
         
        var cord = random(this.chooseCell(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    eat() {
       
        var cord = random( this.chooseCell(1));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

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


        } 
        else {
            this.move();
            this.energy--;
            if (this.energy < 3) { 
                this.die();
            }
        }
    }


    mul() {
      
        var cord = random(this.chooseCell(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            
            Eater.push(new GrassEater(x, y));

            matrix[y][x] = 2;
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