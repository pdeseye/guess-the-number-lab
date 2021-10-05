const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
// Create the secretNum as a random value and it assigns it to the last while the game is running

    do {
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1]  != this.secretNum);
    },

    //getGuess is added to the previousGuesses array if the last added value to previousGuesses isn't equal to the secrectNum and it calls the render function to tell if the guess was too high or too low or accurate. 

  getGuess() {
    let currentGuess = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum},Wrong answer!: ${this.prevGuesses}`))
    // Opens the prompt for the user to enter a value, and to displays the incorrect answers

    while (currentGuess > this.bigggestNum || currentGuess < this.smallestNum || isNaN (currentGuess)) 
    // This while loop acts as a filter for catching undired values.

    {
      currentGuess = parseInt (prompt (`Try again! The guess must be between ${this.biggestNum} and ${this.smallestNum}. Please guess again.`))
    } 
    return currentGuess
  },
  // The end of the while loop if the entered value is not 1-100 then currentGuess is changed to this until a number which is acceptable is put into the prompt

  render() {
    if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
      alert(`Your guess was too high, try again! Previous guesses were ${this.prevGuesses.join()}`)
    } else if(this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
        alert(`Your guess was too low, try again! Previous guesses were ${this.prevGuesses.join()}`)
    } else if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
      alert(`BINGO! Your guess was the secret number ${this.secretNum}! Previous guesses were ${this.prevGuesses.length}.`)
    } // Render function tells the player if the last guess is too high, or if they guessed the correct number.
  }
}
game.play()
// opens the input prompt


// access getGuess in play function
    // build the do while loop
    // return value of getGuess to previousGuesses
    // print (as in display on the actual page of the html) previousGuess not as an array

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