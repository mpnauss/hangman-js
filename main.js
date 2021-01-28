let supplyWord
do {
  supplyWord = prompt('Enter a word to play.\nWord must be 3 characters or longer\nNo numbers or punctuation').toLowerCase()
} while ( !/^[a-z]*$/.test(supplyWord) || supplyWord.length <= 3 )

let suppliedWordArray = supplyWord.split('')

function comparisonSetup(wordArray) {
    let guessArray = []
    wordArray.forEach((letter) => {
        guessArray.push('_')
    })
    return guessArray
}

let hangmanCount = (num) => {
    if (num === 6 ) {
        console.log(`
Welcome to Hangman. You have 6 guesses
        O
      --|--
       / \\
  `)
    } else if (num === 5) {
        console.log(`
5 guesses remain
        O
      --|--
       / 
  `)
    } else if (num === 4) {
      console.log(`
4 guesses remain
      O
    --|--

`)
  } else if (num === 3) {
      console.log(`
3 guesses remain
      O
    --|

`)
  } else if ( num === 2) {
    console.log(`
2 guesses remain
    O
    |

`)
  } else if (num === 1) {
    console.log(`
1 guess remains
    O


`)
   } else if (num === 0) {
       console.log(`
       X
    You Died
 `)
   }
} 

let misses = []

function guessLetters(wordArray, guessArray) {

    let guess
    let guessCount = 6
    console.log(hangmanCount(guessCount))
    do {
        do {
            guess = prompt('Guess a letter').toLowerCase()
        } while (!/^[a-z]$/.test(guess))

        if (wordArray.includes(guess)) {
            wordArray.forEach((letter, index) => {
                if (letter === guess) {
                    guessArray[index] = letter
                }
            })
            console.log(`${guess} is in the word! ${guessArray.join(' ')}`)
        } else {
            misses.push(guess)
            console.log(`'${guess}' is not in the word.\nGuessed letters: ${misses.join(', ')}`)
            guessCount = guessCount - 1
            console.log(hangmanCount(guessCount))
        }
    } while (guessesArray.includes('_') && guessCount > 0)
}


let guessesArray = comparisonSetup(suppliedWordArray)

guessLetters(suppliedWordArray, guessesArray)
