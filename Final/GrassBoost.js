
 class GrassBoost extends LivingCreature{
    constructor(x,y){
        super(x,y);
        this.energy = 3;
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
        energy2(){
            let found = this.chooseCell(0);
            if(found.length === 3){
                let newy = found[1][1];
                let newx =found[1][0]
                this.energy ++;
                if(this.energy === 5){
                    for(let i = 0;i < 1; i++){
                        matrix[newy][newx] = 1
                        Xot.push(new Grass(newx,newy))
                        this.energy = 3
                    }
                }
            }
            else{
                this.energy--;
                if (this.energy === 0){
                    this.die()
                }
            }
        }
        
    die(){
        matrix[this.y][this.x] = 0;

        for (let i = 0; i < grassboost.length; i++) {
            if (this.x == grassboost[i].x && this.y == grassboost[i].y) {
                grassboost.splice(i, 1);
            }
        }
    }
}
