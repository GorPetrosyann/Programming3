class Eat extends LivingCreature{
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

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    eat1() {
       
        var cord = random( this.chooseCell(2));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            this.multiply++;

            this.energy++;

            for (let i = 0; i < Eater.length; i++) {
                if (x == Eater[i].x && y == Eater[i].y) {
                    Eater.splice(i, 1);
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
      
        var cord = random(this.chooseCell(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            
            Eate.push(new Eat(x, y));

            matrix[y][x] = 6;
            this.multiply = 0;
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < Eate.length; i++) {
            if (this.x == Eate[i].x && this.y == Eate[i].y) {
                Eate.splice(i, 1);
            }
        }
    }

}