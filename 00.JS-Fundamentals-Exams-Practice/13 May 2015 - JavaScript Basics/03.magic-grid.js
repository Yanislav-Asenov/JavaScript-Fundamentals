function solve (inputArr) {
  let encryptedString = inputArr[0]
  let magicNumber = Number(inputArr[1])

  let matrix = []

  for (let row = 2; row < inputArr.length; row++) {
    let currentRow = inputArr[row].split(' ').map(Number)
    matrix.push(currentRow)
  }

  let rowColSum = 0
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let firstNum = matrix[row][col]
      for (let innerRow = 0; innerRow < matrix.length; innerRow++) {
        for (let innerCol = 0; innerCol < matrix[innerRow].length; innerCol++) {
          if (innerRow !== row || innerCol !== col) {
            let secondNumber = matrix[innerRow][innerCol]
            let numbersSum = firstNum + secondNumber
            if (numbersSum === magicNumber) {
              rowColSum = row + col + innerRow + innerCol
            }
          }
        }
      }
    }
  }

  let resultString = String()
  for (let i = 0; i < encryptedString.length; i++) {
    if (i % 2 === 0) {
      let character = String.fromCharCode(encryptedString.charCodeAt(i) + rowColSum)
      resultString += character
    } else {
      let character = String.fromCharCode(encryptedString.charCodeAt(i) - rowColSum)
      resultString += character
    }
  }

  console.log(resultString)
}

// solve([
//   'QqdvSpg',
//   '400',
//   '100 200 120',
//   '120 300 310',
//   '150 290 370'
// ])

// solve([
//   'Vi`ujr!sihtudts',
//   '0',
//   '0 0 120 300',
//   '100 9 300 100',
//   '1 290 370 100',
//   '10 11 100 550'
// ])
