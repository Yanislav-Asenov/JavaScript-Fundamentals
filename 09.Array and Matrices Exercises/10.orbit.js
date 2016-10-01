function solve (arr) {
  let matrixDimensions = arr[0].split(/\s+/).filter(x => x !== '').map(Number)
  let rows = matrixDimensions[0]
  let cols = matrixDimensions[1]
  let startCoordinates = arr[1].split(/\s+/).filter(x => x !== '').map(Number)
  let startRow = startCoordinates[0]
  let starCol = startCoordinates[1]

  let matrix = []
  for (let row = 0; row < rows; row++) {
    let currentRow = []
    for (let col = 0; col < cols; col++) {
      currentRow.push(false)
    }
    matrix.push(currentRow)
  }

  matrix[startRow][starCol] = 1
}

solve([
  '5 5',
  '2 2'
])
