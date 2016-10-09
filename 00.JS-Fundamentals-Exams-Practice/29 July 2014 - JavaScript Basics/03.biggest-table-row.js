function solve (inputArr) {
  // let text = inputArr.join('\n')
  let pattern = /<tr><td>[a-zA-Z]+?<\/td><td>(\d+[.]*?\d*|\-)<\/td><td>(\d+[.]*?\d*|\-)<\/td><td>(\d+[.]*?\d*|\-)<\/td><\/tr>/

  let firstStore = 0
  let secondStore = 0
  let thirdStore = 0
  let maxSum = Number.MIN_VALUE
  let match = pattern.exec(text)
  while (match) {
    let firstStoreNum = Number(match[1])
    let secondStoreNum = Number(match[2])
    let thirdStoreNum = Number(match[3])
    let currentNumbers = []
    let currentSum = 0

    if (firstStoreNum) {
      currentNumbers['firstNumber'] = firstStoreNum
    }
    if (secondStoreNum) {
      currentNumbers['secondNumber'] = secondStoreNum
    }
    if (thirdStoreNum) {
      currentNumbers['thirdNumber'] = thirdStoreNum
    }

    for (let i = 0; i < currentNumbers.length; i++) {
      currentSum += currentNumbers[i]
    }

    match = pattern.exec(text)
  }

}

solve()
