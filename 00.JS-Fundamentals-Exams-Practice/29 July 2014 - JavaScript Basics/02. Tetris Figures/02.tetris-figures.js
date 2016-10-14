function solve (inputArr) {
  let matrix = []
  for (let i = 0; i < inputArr.length; i++) {
    matrix.push(inputArr[i].split(''))
  }

  let lettersCount = { I: 0, L: 0, J: 0, O: 0, Z: 0, S: 0, T: 0 }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (isL(row, col, matrix)) {
        lettersCount['L']++
      }
      if (isJ(row, col, matrix)) {
        lettersCount['J']++
      }
      if (isO(row, col, matrix)) {
        lettersCount['O']++
      }
      if (isI(row, col, matrix)) {
        lettersCount['I']++
      }
      if (isZ(row, col, matrix)) {
        lettersCount['Z']++
      }
      if (isS(row, col, matrix)) {
        lettersCount['S']++
      }
      if (isT(row, col, matrix)) {
        lettersCount['T']++
      }
    }
  }

  console.log(JSON.stringify(lettersCount))

  function isL (row, col, matrix) {
    if (row + 2 >= matrix.length) {
      return false
    }

    if (col + 1 >= matrix[row + 2].length) {
      return false
    }

    return matrix[row][col] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 2][col] === 'o' &&
            matrix[row + 2][col + 1] === 'o'
  }

  function isJ (row, col, matrix) {
    if (row + 2 >= matrix.length) {
      return false
    }

    if (col - 1 < 0) {
      return false
    }

    return matrix[row][col] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 2][col] === 'o' &&
            matrix[row + 2][col - 1] === 'o'
  }

  function isO (row, col, matrix) {
    if (row + 1 >= matrix.length) {
      return false
    }

    if (col + 1 >= matrix[row].length || col + 1 >= matrix[row + 1].length) {
      return false
    }

    return matrix[row][col] === 'o' &&
            matrix[row][col + 1] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 1][col + 1] === 'o'
  }

  function isI (row, col, matrix) {
    if (row + 3 >= matrix.length) {
      return false
    }

    return matrix[row][col] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 2][col] === 'o' &&
            matrix[row + 3][col] === 'o'
  }

  function isZ (row, col, matrix) {
    if (row + 1 >= matrix.length) {
      return false
    }

    if (col - 1 < 0 || col + 1 >= matrix[row + 1].length) {
      return false
    }

    return matrix[row][col - 1] === 'o' &&
            matrix[row][col] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 1][col + 1] === 'o'
  }

  function isS (row, col, matrix) {
    if (row + 1 >= matrix.length) {
      return false
    }

    if (col - 1 < 0 || col + 1 >= matrix[row].length) {
      return false
    }

    return matrix[row][col + 1] === 'o' &&
            matrix[row][col] === 'o' &&
            matrix[row + 1][col] === 'o' &&
            matrix[row + 1][col - 1] === 'o'
  }

  function isT (row, col, matrix) {
    if (row + 1 >= matrix.length) {
      return false
    }

    if (col - 1 < 0 || col + 1 >= matrix[row].length) {
      return false
    }

    return matrix[row][col - 1] === 'o' &&
            matrix[row][col] === 'o' &&
            matrix[row][col + 1] === 'o' &&
            matrix[row + 1][col] === 'o'
  }
}

// solve([
//   '--o--o-',
//   '--oo-oo',
//   'ooo-oo-',
//   '-ooooo-',
//   '---oo--'
// ])

// solve([
//   '-oo',
//   'ooo',
//   'ooo'
// ])
