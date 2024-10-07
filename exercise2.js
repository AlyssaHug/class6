const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//determine a proper parameter variable name

//ask to guess number between 1 and 20 = answer will be 13
//Bigger than answer = paramGuess >= 1 && paramGuess > paramAnswer && paramGuess <= 20
//smaller than nanswer = paramGuess <= 20 && paramGuess < paramAnswer && paramGuess >= 1
//got it right = paramGuess === 13
function GuessingGame(paramGuess) {
  let paramAnswer="13"
  if(paramGuess === 13){
    console.log('You got it right! You win!!!')
  }else if(paramGuess >= 1 && paramGuess > paramAnswer && paramGuess <= 20){
    console.log('Too big!')
  }else if(paramGuess <= 20 && paramGuess < paramAnswer && paramGuess >= 1){
    console.log('Too Small!')
  }else if(paramGuess > 20){
    console.log('Not even in range! Try again.')
  }
}

//determine a proper question to ask and the proper variable name for the answer
//readline.question("Guess a number between 1 and 20.", (guess) => {

  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("Guess a number between 1 and 20.", guess => {
      GuessingGame(Number(guess));
      //call your function here

      if (guess !== "quit") {
        StartGame();
      } else {
        readline.close();
      }
    });
  }
StartGame();
// easy to read :D very nice, code works very nice unlike mine. took inspiration off her code. - Sophia Wan
