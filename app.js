






const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        do {
          getGuess = getGuess + 1
        }
    while (userInput != this.secretNum);
  },

  getGuess(){
    let userInput = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`), )
    while (userInput > this.bigggestNum || userInput < this.smallestNum || isNaN (userInput) || userInput > this.biggestNum + isNaN(userInput) || userInput < this.smallestNum + isNaN(userInput)) {
      userInput = parseInt (prompt (`Try again! The guess must be between ${this.biggestNum} and ${this.smallestNum}. Please guess again.`))
    } console.log(userInput)
  }



}
game.getGuess()



// Goals for do while loop:
    // while userInput != secretNum
    // check if userInput > secretNum
    // return a prompt that states the guess (parseInt(userInput)) was too high
    // push.userInput(previousGuesses[])
    // print previousGuesses (previousGuesses.toString())
    // Else
    // check if user input is < secretNum
    // return a prompt that guess is too low
    // let previousGuesses []
    //
    // else if userInput = secretNum break