function solve (arr) {
  let words = arr[0].split(/[^0-9_a-zA-Z]+/g).filter(x => x)
  let wordOccurrences = {}

  for (let word of words) {
    if (!wordOccurrences[word]) {
      wordOccurrences[word] = 1
    } else {
      wordOccurrences[word]++
    }
  }

  console.log(JSON.stringify(wordOccurrences))
}

// solve([
//   'Far too slow, you\'re far too slow.'
// ])
