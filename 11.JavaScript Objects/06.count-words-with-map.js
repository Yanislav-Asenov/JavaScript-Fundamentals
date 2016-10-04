function solve (arr) {
  let words = arr[0].toLowerCase().split(/[^_a-zA-Z0-9]/g).filter(x => x)
  let wordsOccurrences = new Map()

  for (let word of words) {
    if (wordsOccurrences.has(word)) {
      wordsOccurrences.set(word, wordsOccurrences.get(word) + 1)
    } else {
      wordsOccurrences.set(word, 1)
    }
  }

  let resultWords = Array.from(wordsOccurrences.keys()).sort()
  resultWords.forEach(word => {
    console.log(`'${word}' -> ${wordsOccurrences.get(word)} times`)
  })
}

// solve([
//   'Far too slow, you\'re far too slow.'
// ])
