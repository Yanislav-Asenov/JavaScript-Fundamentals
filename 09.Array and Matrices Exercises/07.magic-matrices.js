function solve (arr) {
  let matrix = []

  for (let row = 0; row < arr.length; row++) {
    let currentRow = arr[row].split(/\s+/).filter(x => x !== '').map(Number)
    matrix.push(currentRow)
  }

  let columnsSum = []
  let rowsSum = []
  for (let i = 0; i < matrix.length; i++) {
    let currentColSum = getColSum(matrix, i)
    let currentRowSum = getRowSum(matrix, i)

    columnsSum.push(currentColSum)
    rowsSum.push(currentRowSum)
  }

  for (let row = 0; row < rowsSum.length; row++) {
    for (let col = 0; col < columnsSum.length; col++) {
      if (columnsSum[col] !== rowsSum[row]) {
        console.log('false')
        return
      }
    }
  }

  console.log('true')

  function getRowSum (matrix, targetRow) {
    let sum = 0
    for (let col = 0; col < matrix[targetRow].length; col++) {
      sum += matrix[targetRow][col]
    }
    return sum
  }

  function getColSum (matrix, targetCol) {
    let sum = 0
    for (let row = 0; row < matrix.length; row++) {
      sum += matrix[row][targetCol]
    }
    return sum
  }
}

// solve([
//   '4 5 6',
//   '6 5 4',
//   '5 5 5'
// ])

// solve([
//   '11 32 45',
//   '21 0 1',
//   '21 1 1'
// ])

// solve([
//   '1 0 0',
//   '0 0 1',
//   '0 1 0'
// ])
