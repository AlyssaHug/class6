const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function salad(cheeseLevel){
    let ing1 ="lettuce";
    let ing2 ="tomatoes";
    /*planning and design*/
    //I want to make a salad and change its cheesiness
    //I'm going to make 2 variables first for its ingredients tha ncheese level
    //I'll make sure it captures how strong it is and compare
         if(cheeseLevel === 0) {
             console.log(`You made a salad with ${ing1} and ${ing2}`);
            } else if(cheeseLevel > 0 && cheeseLevel < 3) {
            console.log(`You made a ${ing1} ${ing2} cheese salad.`);
            } else if(cheeseLevel > 3) {
            console.log(`You made a ${ing1} ${ing2} EXTREMELY CHEESY salad.`);
            }
}
//salad(0);

function StartApp(){
    readline.question('what is your preferred cheese level? ', lvl =>{
        salad(Number(lvl));

    if(lvl !== "exit"){
        StartApp();
    } else {
    readline.close();
    }
});
}
StartApp();