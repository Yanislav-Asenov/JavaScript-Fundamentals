function solve (input) {
  let parsedArrays = []

  for (let i = 0; i < input.length; i++) {
    let parsedJsonObject = JSON.parse(input[i]).sort((a, b) => { return b - a })
    parsedArrays.push(parsedJsonObject)
  }

  let resultNumbers = []
  for (let row = 0; row < parsedArrays.length; row++) {
    let firstArray = parsedArrays[row]
    let uniqueCounter = 0
    for (let secondRow = row + 1; secondRow < parsedArrays.length; secondRow++) {
      let secondArray = parsedArrays[secondRow]
      if (compareArrays(firstArray, secondArray)) {
        uniqueCounter++
      }
    }

    if (uniqueCounter === 0) {
      resultNumbers.push(firstArray)
    } else {
      input.shift()
    }
  }

  resultNumbers.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }
  })

  for (let i = 0; i < resultNumbers.length; i++) {
    console.log(`[${resultNumbers[i].join(', ')}]`)
  }

  function compareArrays (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
      return false
    }

    for (let col = 0; col < firstArray.length; col++) {
      if (firstArray[col] !== secondArray[col]) {
        return false
      }
    }

    return true
  }
}

// solve([
//   '[-3, -2, -1, 0, 1, 2, 3, 4]',
//   '[10, 1, -17, 0, 2, 13]',
//   '[4, -3, 3, -2, 2, -1, 1, 0]'
// ])

// solve([
//   '[7.14, 7.180, 7.339, 80.099]',
//   '[7.339, 80.0990, 7.140000, 7.18]',
//   '[7.339, 7.180, 7.14, 80.099]'
// ])

// solve(['[1, 2, 3]', '[1, 2, 3]'])
