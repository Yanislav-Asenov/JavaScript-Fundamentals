function solve (arr) {
  let matrixDimensions = arr[0].split(/\s+/).filter(x => x !== '').map(Number)
  let rows = matrixDimensions[0]
  let cols = matrixDimensions[1]
  let startCoordinates = arr[1].split(/\s+/).filter(x => x !== '').map(Number)
  let starRow = startCoordinates[0]
  let starCol = startCoordinates[1]

  let matrix = []
  for (let row = 0; row < rows; row++) {
    let currentRow = []
    for (let col = 0; col < cols; col++) {
      currentRow.push(false)
    }
    matrix.push(currentRow)
  }

  matrix[starRow][starCol] = 1

  let cellCounter = 1
  let num = 2
  let startCol = starCol - 1
  let startRow = starRow - 1
  let endRow = starRow + 1
  let endCol = starCol + 1

  while (cellCounter < rows * cols) {
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        if (row >= 0 && row < rows) {
          if (col >= 0 && col < cols) {
            if (!matrix[row][col]) {
              matrix[row][col] = num
              cellCounter++
            }
          }
        }
      }
    }
    num++
    startCol--
    startRow--
    endCol++
    endRow++
  }

  for (let row = 0; row < rows; row++) {
    console.log(matrix[row].join(' '))
  }
}

// solve([
//   '5 5',
//   '2 2'
// ])

// solve([
//   '4 4',
//   '0 0'
// ])

// solve([
//   '3 3',
//   '2 2'
// ])
