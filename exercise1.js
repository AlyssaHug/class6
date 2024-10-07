const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name

/*Ask how old user age to see if legal drinking age*/
//age under 13 = paramAge < 13
  //age 13-18 = paramAge > 13 && paramAge < 19
  //age 19-50 = paramAge >= 19 && paramAge <= 50
  //age 51-70 = paramAge > 50 && paramAge <= 70
  // age over 70 = paramAge > 70
function CheckDrinkingAge(paramAge){
  if(paramAge < 13) {
    console.log('Please leave.');
  } else if(paramAge >= 13 && paramAge < 19){
    console.log('Close, but not old enough. Grow quicker or get out.');
  } else if(paramAge >= 19 && paramAge <= 50){
    console.log('Have fun. Drink away.');
  } else if(paramAge > 50 && paramAge < 70){
    console.log('Careful about your health.')
  } else if(paramAge >= 70){
    console.log("Don't risk it dude")
  }
}

//determine a proper question to ask and the proper variable name for user input
function StartApp(){
readline.question('Are you old enough to get in the bar? Please put your age in.', age => {
  CheckDrinkingAge(Number(age));

  if (age !== "exit"){
    StartApp();
  }else {
    readline.close();
  }
  //call your function here
});
}
StartApp();

//Reviewed by Thea. Helped check code to make sure no mistakes were made.