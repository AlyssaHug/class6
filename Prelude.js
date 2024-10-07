/*
Syntax function==========================


//The name does not need to be capitalize. Most people do it to differentiate between their variables.
function FunctionName(){
  //write your reusable code blocks here!

  //Use variables and conditions to complete a purpose
}

============================================


Below is a function that lets us ask for an input from the user
---------------------------------------------------------
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
*/

let price = 5.00;
let tax = 0.1;
let budget = 6.00;

const total = price*tax+price;
console.log("the total is...$"+total.toFixed(2)+".")

if(total < budget){
  console.log("keep shopping!");
} else {
  console.log("stop shopping, you are over your budget!");
}

//not only repitition, but also very annoying and hard to keep track...

//repeat the same for monday budget? / Tuesday budget? / too much repitition...

//the function
function BudgetTrack(paramprice, paramday){
  //put the budget code in here
  let price = paramprice;
let tax = 0.1;
let budget = 3.00;

console.log("today is "+paramday+".")
const total = price*tax+price;
console.log("the total is...$"+total.toFixed(2)+".")

if(total < budget){
  console.log("keep shopping!");
} else {
  console.log("stop shopping, you are over your budget!");
}
console.log("==================DONE=================");
}

//call the function
BudgetTrack(5.00, "monday"); //monday purchase was $5.00, it would be best if i can put the price into the function
BudgetTrack(6.00, 'Tuesday');
BudgetTrack(7.00, "Wednesday");
BudgetTrack(4.00, "Thursday");
/*
Ideal situation is
BudgetTrack(5.00) -> 'Monday'
BudgetTrack(6.00) -> 'Tuesday'
BudgetTrack(7.00) -> 'Wednesday'
BudgetTrack(4.00) -> 'Thursday'
spending changes everyday
*/