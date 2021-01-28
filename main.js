// YOUR CODE HERE

function printPuzzle(word, guesses = []) {
    let wordArray = word.split('')

    let guessesArray = []
    wordArray.forEach((letter) => {
        guessesArray.push('_');
    })

    // console.log(guessesArray)
    // console.log(wordArray)

    // TO CHECK WORD AGAINST GUESSES
    // look at each item in guesses array
    // compare to each item in word array
    // if there is a match, replace the corresponding index in blank array with the guessed letter

    guesses.forEach((guessedLetter) => {
        wordArray.forEach((wordLetter, index) => {
            if(guessedLetter === wordLetter) {
                guessesArray.splice(index, 1, guessedLetter)
            }
        })
    })

    console.log(guessesArray)
}

printPuzzle('perimeter', ['a', 'e', 'r'])
