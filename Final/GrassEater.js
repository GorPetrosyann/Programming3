// // class GrassEater extends LivingCreature {
// //     constructor(x, y, index){
// //         super(x, y, index);
// //         this.energy = 3;
// //     }
// //    getNewCoordinates() {
// //        this.directions = [
// //            [this.x - 1, this.y - 1],
// //            [this.x, this.y - 1],
// //            [this.x + 1, this.y - 1],
// //            [this.x - 1, this.y],
// //            [this.x + 1, this.y],
// //            [this.x - 1, this.y + 1],
// //            [this.x, this.y + 1],
// //            [this.x + 1, this.y + 1]
// //        ];
// //    }
// //    chooseCell(character) {
// //        this.getNewCoordinates();
// //        return super.chooseCell(character);
// //    }
// //    random(ch){
// //     let found = this.chooseCell(ch);
// //     let result = Math.floor(Math.random()*found.length)
// //     return found[result];
// // }

// //     eat() {
// //         let cord = this.random(1);
// //         this.energy++;

        
// //         if (cord) {
            
// //             let x = cord[0];
// //             let y = cord[1];
// //             matrix[y][x] = 2;
// //             matrix[this.y][this.x] = 0;
// //             this.x = x;
// //             this.y = y;
// //             this.multiply++;
// //             this.energy++;
// //         for (let i = 0; i < Xot.length; i++) {
// //             if (x == Xot[i].x && y == Xot[i].y) {
// //                 Xot.splice(i, 1);
// //             }
// //         }
// //         }
// //         if (this.multiply == 10) {

// //             this.mul()
// //             this.energy = 0;
// //         }
// //         else {
// //             this.move();
// //             this.energy--;
// //         if (this.energy < 2) {
// //                 this.die();
// //         }
// //     }
    
// // }
// //     move() {
// //         let cord = this.random(0);
// //         if (cord) {
// //             let x = cord[0];
// //             let y = cord[1];
// //             matrix[y][x] = 2;
// //             matrix[this.y][this.x] = 0;
// //             this.x = x;
// //             this.y = y;
// //         }
// //     }

// //     mul() {
// //         let cord = this.random(0);
// //         if (cord) {
// //             let x = cord[0];
// //             let y = cord[1];

// //             this.multiply++;
// //             Eater.push(new GrassEater(x, y));

// //             matrix[y][x] = 1;
// //             this.multiply = 0;
// //     }
// // }

// //     die() {
// //     matrix[this.y][this.x] = 0;

// //     for (let i = 0; i < Eater.length; i++) {
// //         if (this.x == Eater[i].x && this.y == Eater[i].y) {
// //             Eater.splice(i, 1);
// //         }
// //     }
// // }
// // }



// class GrassEater {
//     constructor(x, y) {
        
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 3;

//     }

//     //շրջապատի հետազոտության մատրիցը
//     newDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
//     //կերպարը որոշվում է t արգումենտով
//     getDirections(t) {
//         this.newDirections();
//         var found = [];

//         for (let i = 0; i < this.directions.length; i++) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == t) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }



//     //move() շարժվել
//     move() {
//         //որոնում է դատարկ տարածքներ
         
//         var cord = random(this.getDirections(0));

//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];

//             //կատարում է տեղափոխություն հիմնական matrix-ում 
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             //թարմացնում է սեփական կորդինատները
//             this.x = x;
//             this.y = y;

//         }
//     }


//     //eat()-ուտել
//     eat() {
//         //հետազոտում է շրջակայքը, որոնում է սնունդ
       
//         var cord = random( this.getDirections(1));

//         //եթե կա հարմար սնունդ
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];

//             //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
//             //իր հին տեղը դնում է դատարկ վանդակ
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             //փոխում է սեփական կորդինատները օբյեկտի մեջ
//             this.x = x;
//             this.y = y;

//             //բազմացման գործակիցը մեծացնում է
//             this.multiply++;

//             //մեծացնում է էներգիան
//             this.energy++;

//             //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
//             //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
//             for (let i = 0; i < Eater.length; i++) {
//                 if (x == Eater[i].x && y == Eater[i].y) {
//                     Eater.splice(i, 1);
//                 }
//             }

//             //եթե պատրաստ է բազմացմանը, բազմանում է 
//             if (this.multiply == 10) {
//                 this.mul()
//                 this.multiply = 0;
//             }


//         } else {
//             //եթե չկա հարմար սնունդ 
//             this.move();
//             this.energy--;
//             if (this.energy < 3) { //մահանում է, եթե էներգիան 3֊ից ցածր է
//                 this.die();
//             }
//         }
//     }

//     //mul() բազմանալ
//     mul() {
//         //փնտրում է դատարկ տարածք
      
//         var cord = random(this.getDirections(0));

//         //եթե կա բազմանում է
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];

//             this.multiply++;

//             //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
//             //և տեղադրում է այն խոտակերների զանգվածի մեջ
            
//             Eater.push(new GrassEater(x, y));

//             //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
//             matrix[y][x] = 1;
//             this.multiply = 0;
//         }
//     }

//     //die() մահանալ
//     die() {
//         //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
//         matrix[this.y][this.x] = 0;

//         //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն խոտակերների զանգվածից
//         for (let i = 0; i < eatArr.length; i++) {
//             if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
//                 Eater.splice(i, 1);
//             }
//         }
//     }

// }