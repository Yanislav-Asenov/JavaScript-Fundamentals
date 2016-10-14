function solve (arr) {
  let matrix = []
  let triangleCoordinates = []

  for (let row = 0; row < arr.length; row++) {
    matrix.push(arr[row].split(''))
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (isTriangle(matrix, row, col)) {
        triangleCoordinates.push({
          row: row,
          col: col
        })
      }
    }
  }

  for (let index in triangleCoordinates) {
    let row = triangleCoordinates[index].row
    let col = triangleCoordinates[index].col

    matrix[row][col] = '*'
    matrix[row + 1][col] = '*'
    matrix[row + 1][col - 1] = '*'
    matrix[row + 1][col + 1] = '*'
  }

  for (let row of matrix) {
    console.log(row.join(''))
  }

  function isTriangle (matrix, row, col) {
    if (row + 1 < matrix.length) {
      if (col + 1 >= matrix[row + 1].length) {
        return false
      }
    }

    if (row + 1 >= matrix.length) {
      return false
    }

    if (col - 1 < 0) {
      return false
    }

    if (matrix[row][col] === matrix[row + 1][col]) {
      if (matrix[row + 1][col] === matrix[row + 1][col - 1]) {
        if (matrix[row][col] === matrix[row + 1][col + 1]) {
          return true
        }
      }
    }
    return false
  }
}

// solve([
//   'abcdexgh',
//   'bbbdxxxh',
//   'abcxxxxx'
// ])

// solve([
//   'aa',
//   'aaa',
//   'aaaa',
//   'aaaaa'
// ])

// solve([
//   'dffdsgyefg',
//   'ffffeyeee',
//   'jbfffays',
//   'dagfffdsss',
//   'dfdfa',
//   'dadaaadddf',
//   'sdaaaaa',
//   'daaaaaaasf'
// ])
