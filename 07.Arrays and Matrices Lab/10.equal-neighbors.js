function solve (arr) {
  let matrix = []
  let result = 0

  for (let row = 0; row < arr.length; row++) {
    matrix.push(arr[row].split(' '))
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result += getNeoighbors(matrix, row, col)
    }
  }

  console.log(result / 2)

  function getNeoighbors (arr, row, col) {
    let counter = 0
    if (row - 1 >= 0) {
      if (arr[row - 1][col] === arr[row][col]) {
        counter++
      }
    }

    if (col - 1 >= 0) {
      if (arr[row][col] === arr[row][col - 1]) {
        counter++
      }
    }

    if (col + 1 < arr[row].length) {
      if (arr[row][col] === arr[row][col + 1]) {
        counter++
      }
    }

    if (row + 1 < arr.length) {
      if (arr[row + 1][col] === arr[row][col]) {
        counter++
      }
    }

    return counter
  }
}

// solve([
//   '2 3 4 7 0',
//   '4 0 5 3 4',
//   '2 3 5 4 2',
//   '9 8 7 5 4'
// ])
