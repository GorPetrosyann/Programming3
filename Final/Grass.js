class Grass extends LivingCreature {
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    mul() {
        if (this.gender == "men"){
          let empty = this.random(0);
            this.multiply++;
            if (this.multiply == 10 && empty) {
                    let x = empty[0];
                    let y = empty[1];
                    Xot.push( new Grass(x, y))
                    matrix[y][x] = 1;
                    this.multiply = 0;
        }  
        
        }else{
            let empty = this.random(0);
            this.multiply++;
            if (this.multiply == 2 && empty) {
                    let x = empty[0];
                    let y = empty[1];
                    Xot.push( new Grass(x, y))
                    matrix[y][x] = 1;
                    this.multiply = 0;
        }
        }
        
    }



}

