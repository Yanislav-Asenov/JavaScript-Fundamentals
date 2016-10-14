function solve (inputArr) {
  let matrix = []
  let plusCoordinates = []

  for (let i = 0; i < inputArr.length; i++) {
    matrix.push(inputArr[i].split(''))
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (isPlus(row, col, matrix)) {
        plusCoordinates.push({
          row: row,
          col: col
        })
      }
    }
  }

  for (let i = 0; i < plusCoordinates.length; i++) {
    let row = plusCoordinates[i].row
    let col = plusCoordinates[i].col

    matrix[row][col] = 'Яни'
    matrix[row + 1][col - 1] = 'Яни'
    matrix[row + 1][col] = 'Яни'
    matrix[row + 1][col + 1] = 'Яни'
    matrix[row + 2][col] = 'Яни'
  }

  let resultMatrix = []

  for (let row = 0; row < matrix.length; row++) {
    let currentRow = ''
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 'Яни') {
        currentRow += matrix[row][col]
      }
    }
    resultMatrix.push(currentRow)
  }

  for (let row = 0; row < resultMatrix.length; row++) {
    console.log(resultMatrix[row])
  }

  function isPlus (row, col, matrix) {
    if (row + 3 >= matrix.length) {
      return false
    }

    if (col - 1 < 0 || col + 1 >= matrix[row + 1].length ||
        col + 2 >= matrix[row + 1].length ||
        col + 1 >= matrix[row + 2].length) {
      return false
    }

    let result = matrix[row][col].toLowerCase() === matrix[row + 1][col - 1].toLowerCase() &&
            matrix[row][col].toLowerCase() === matrix[row + 1][col].toLowerCase() &&
            matrix[row][col].toLowerCase() === matrix[row + 1][col + 1].toLowerCase() &&
            matrix[row][col].toLowerCase() === matrix[row + 2][col].toLowerCase()

    return result
  }
}

solve([
  'ab**l5',
  'bBb*555',
  'absh*5',
  'ttHHH',
  'ttth'
])
