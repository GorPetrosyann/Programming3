
class EaterBomb extends LivingCreature{
    constructor(x,y){
        super(x,y);
        this.energy = 2;

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
    energy1(){
        let found = this.chooseCell(0);

        if(found.length === 3){
            let newy = found[1][1];
            let newx =found[1][0]
            this.energy ++;
            if(this.energy === 5){
                for(let i = 0;i < 1; i++){
                    matrix[newy][newx] = 2
                    Eater.push(new GrassEater(newx,newy))
                }
            }
        }else{
            this.energy--;
            if (this.energy === 0){
                this.die()
            }
        }
    }
    
    die(){
    matrix[this.y][this.x] = 0;

    for (let i = 0; i < eaterbomb.length; i++) {
        if (this.x == eaterbomb[i].x && this.y == eaterbomb[i].y) {
            eaterbomb.splice(i, 1);
        }
    }
    }
}
