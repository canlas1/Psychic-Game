//set global varibles

var alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft =9;
var guessedLetterArr = [];
var letterToGuess = null;

//computer selects a random letter from the available choices
var computerGuesses = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
 console.log(computerGuesses);

//function that allows 9 total guesses

var newGuessesLeft = function(){ // use document.querySelector to replace element from HTML from class .guessLeft HTLM replaces then add the variable guessesLeft
	document.querySelector(".guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;		
};
	console.log(newGuessesLeft);

var newGuessesSoFar = function(){ //insert HTML from class .soFar HTML replaces then join the string of the guessedLetterArr separate by a comma
	document.querySelector(".soFar").innerHTML = "Your Guesses So Far: " + guessedLetterArr.join(",");
};
	console.log(newGuessesSoFar);

var newLetterToGuess = function(){ //use this. to match users new guess to a random computer generated alphabet array
	this.letterToGuess = this.alphabetArr[Math.floor(Math.random()* this.alphabetArr.length)];
};
  console.log(newLetterToGuess);
  console.log("is it a match?")

//function to reset everything
var reset = function() {
  guesses = 9;
  guessesLeft = 9;
  guessedLetterArr = [];

  newGuessesLeft();
  newGuessesSoFar();
  newLetterToGuess();
}

//onkey starts the game
document.onkeyup = function(event) { //function that goes all the way to the end of the document
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); // lowercase/uppercase function

  guessedLetterArr.push(userGuess);  //The push() method adds new items to the end of an array, and returns the new length.
  newGuessesLeft();
  newGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;

                document.querySelector(".wins").innerHTML = "Wins: " + wins;
                console.log("Nice win!");
                //call the reset
                reset();
            }

        }else if(guessesLeft === 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector(".losses").innerHTML = "Losses: " + losses;
	            console.log("you are losing");
	            // Then we'll call the reset. 
            reset();
        }
};






