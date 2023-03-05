
 class GrassBoost extends LivingCreature{
    constructor(x,y){
        super(x,y);
        this.energy = 3;
    }

 chooseCell(character) {
     return super.chooseCell(character);
 }
    energy2(){
        let found = super.chooseCell(0);
        
        if(found.length === 2){
            let newy = found[1][1];
            let newx =found[1][0]
            this.energy ++;

                for(let i = 0;i < 1; i++){
                    matrix[newy][newx] = 1
                    Xot.push(new Grass(newx,newy))
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

        for (let i = 0; i < grassboost.length; i++) {
            if (this.x == grassboost[i].x && this.y == grassboost[i].y) {
                grassboost.splice(i, 1);
            }
        }
    }
}
