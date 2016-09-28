function solve (input) {
  let wordsCount = []


  let firstTextSentences = input[0].toLowerCase().split('/[.!?]/')

  for (let j = 0; j < firstTextSentences.length; j++) {
    let words = firstTextSentences[j].split(' ')
    for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
      let word = words[wordsIndex].toLowerCase()
      word = word.replace(/[.?!:,]/, '')
      if (wordsCount[word]) {
        wordsCount[word]++
      } else {
        wordsCount[word] = 1
      }
    }
  }


  let filteredWordsCount = []

  for (let index in wordsCount) {
    if (wordsCount[index] >= 3) {
      filteredWordsCount.push(index.toString())
    }
  }

  if (filteredWordsCount.length === 0) {
    console.log('No words')
    return
  }

  let secondText = input.pop()

  let secondTextSentences = secondText.split(/[.?!]/).filter(function (el) {
    return el !== ''
  })

  let resultSentences = []

  for (let i = 0; i < secondTextSentences.length; i++) {
    let currentSentence = secondTextSentences[i].trim()

    let indexOfSentence = secondText.indexOf(currentSentence)
    let output = secondText.substring(indexOfSentence, indexOfSentence + currentSentence.length + 1)

    if (containsWord3Times(currentSentence, filteredWordsCount)) {
      resultSentences.push(output)
    }
  }

  if (resultSentences.length === 0) {
    console.log('No sentences')
    return
  }

  for (let i = 0; i < resultSentences.length; i++) {
    let sentence = resultSentences[i]

    console.log(sentence)
  }

  function containsWord3Times (sentence, extractedWords) {
    let words = sentence.split(' ')

    let counter = 0
    for (let j = 0; j < extractedWords.length; j++) {
      let uniqueWord = extractedWords[j].replace(/[.,?!:]/, '')

      for (let i = 0; i < words.length; i++) {
        let currentWord = words[i].replace(/[.,?!:]/, '')

        if (currentWord.toLowerCase() === uniqueWord.toLowerCase()) {
          counter++
          break
        }
      }

      if (counter >= 2) {
        return true
      }
    }

    return false
  }
}

// solve([
//   'Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!',
//   'The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know.'
// ])

// solve([
//   'Why, why is he so crazy, so so crazy? Why?',
//   'There are no words that you should be matching. You should be careful.'
// ])

// solve([
//   'Bogi prasna kat jivotno izpita po JS. Zareji che malko govorq po shlokavica, ti pak trebva da pretyrsi taq text po nekva raota deto beshe v uslovieto i sega se chudish kaf e adjeba taq test i koi idiot e pisal taq shlokavica. Da znaite taq shlokavica po KPK ne se priema.',
//   'Da si znaesh vhe ot taq shlokavica trebva da zemesh tova izrehenie no ima i tretata duma po! Mai mai tova e nai typiq text. Trqbva da machnete i tva izrechenie zashtoto sydyrja po i shlokavica.'
// ])
