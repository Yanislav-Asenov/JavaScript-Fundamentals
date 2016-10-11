function solve (inputArr) {
  let xCoordinates = []
  let matrix = []

  for (let row = 0; row < inputArr.length; row++) {
    matrix.push(inputArr[row].split(''))
  }

  let xCounter = 0
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (isX(matrix, row, col)) {
        xCoordinates.push({
          row: row,
          col: col
        })
        xCounter++
      }
    }
  }

  for (let i = 0; i < xCoordinates.length; i++) {
    let currentX = xCoordinates[i]
    let row = currentX.row
    let col = currentX.col
    matrix[row][col] = false
    matrix[row][col + 2] = false
    matrix[row + 1][col + 1] = false
    matrix[row + 2][col] = false
    matrix[row + 2][col + 2] = false
  }

  let resultMatrix = []
  for (let row = 0; row < matrix.length; row++) {
    let currentRow = ''
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== false) {
        currentRow += matrix[row][col]
      }
    }

    resultMatrix.push(currentRow)
  }

  console.log(resultMatrix.join('\n'))

  function isX (matrix, row, col) {
    if (row + 2 >= matrix.length) {
      return false
    }

    if (col + 2 >= matrix[row].length) {
      return false
    }

    if (col + 1 >= matrix[row + 1].length) {
      return false
    }

    if (col + 2 >= matrix[row + 2].length) {
      return false
    }

    return matrix[row][col].toUpperCase() === matrix[row][col + 2].toUpperCase() &&
            matrix[row + 1][col + 1].toUpperCase() === matrix[row][col + 2].toUpperCase() &&
            matrix[row + 1][col + 1].toUpperCase() === matrix[row + 2][col].toUpperCase() &&
            matrix[row + 2][col].toUpperCase() === matrix[row + 2][col + 2].toUpperCase()
  }
}

// solve([
//   'abnbjs',
//   'xoBab',
//   'Abmbh',
//   'aabab',
//   'ababvvvv'
// ])
