class EaterBomb{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 5;
      
    }    
    newDir() {
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
    getDirections(b) {
        this.newDir()
        let found = [];
    
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == b) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
        
    }
    energy1(){
       let found = this.getDirections(0);
        
        if(found.length === 8){
            let newy = found[1][1];
            let newx =found[1][0]
            this.energy ++;
            if(this.energy >= 7){
                for(let i = 0;i < 1; i++){
                    matrix[newy][newx] = 2
                    Eater.push(new GrassEater(newx,newy))
                    this.energy== 5
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