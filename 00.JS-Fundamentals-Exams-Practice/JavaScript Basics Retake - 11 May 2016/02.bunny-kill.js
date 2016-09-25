function solve (arr) {
  let targetCoordinates = arr.pop().split(' ')
  let coordinates = []

  for (let coordinate of targetCoordinates) {
    let args = coordinate.split(',').map(Number)
    coordinates.push({
      row: args[0],
      col: args[1]
    })
  }

  let matrix = []

  for (let row of arr) {
    let currentRow = row.split(' ').map(Number)
    matrix.push(currentRow)
  }

  let damageDone = 0
  let kills = 0

  for (let targetCellInfo of coordinates) {
    let bombPower = matrix[targetCellInfo.row][targetCellInfo.col]
    let startRow = Math.max(0, targetCellInfo.row - 1)
    let endRow = Math.min(matrix.length - 1, targetCellInfo.row + 1)
    let startCol = Math.max(0, targetCellInfo.col - 1)
    let endCol = Math.min(matrix[targetCellInfo.row].length - 1, targetCellInfo.col + 1)

    if (matrix[targetCellInfo.row][targetCellInfo.col] > 0) {
      damageDone += bombPower
      matrix[targetCellInfo.row][targetCellInfo.col] = 0
      kills++
    }

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        if (row === targetCellInfo.row && col === targetCellInfo.col) {
          continue
        } else {
          if (matrix[row][col] > 0) {
            matrix[row][col] -= bombPower
            if (matrix[row][col] < 0) {
              matrix[row][col] = 0
            }
          } else {
            matrix[row][col] = 0
          }
        }
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        damageDone += matrix[row][col]
        kills++
      }
    }
  }

  console.log(damageDone)
  console.log(kills)
}

// solve([
//   '5 10 15 20',
//   '10 10 10 10',
//   '10 15 10 10',
//   '10 10 10 10',
//   '2,2 0,1'
// ])

// solve([
//   '10 10 10',
//   '10 10 10',
//   '10 10 10',
//   '0,0'
// ])
