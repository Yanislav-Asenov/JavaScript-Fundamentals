function solve (input) {
  let wordsCount = []

  for (let i = 0; i < input.length; i++) {
    let firstTextSentences = input[i].toLowerCase().split('/[.!?]/')

    for (let j = 0; j < firstTextSentences.length; j++) {
      let words = firstTextSentences[j].split(' ')
      for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
        let word = words[wordsIndex]
        word = word.replace(/[.?!:]/, '')
        if (wordsCount[word]) {
          wordsCount[word]++
        } else {
          wordsCount[word] = 1
        }
      }
    }
  }

  let secondText = input.pop()

  let secondTextSentences = secondText.split(/[.?!]/).filter(function (el) {
    return el !== ''
  })

  for (let i = 0; i < secondTextSentences.length; i++) {
    let currentSentence = secondTextSentences[i].trim()

    console.log(currentSentence)
    let indexOfSentence = secondText.indexOf(currentSentence)
    let output = secondText.substring(indexOfSentence, indexOfSentence + currentSentence.length + 1)
    console.log(output)
  }
}

solve([
  'Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!',
  'The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know.'
])
