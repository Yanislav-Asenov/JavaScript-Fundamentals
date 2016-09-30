function solve (arr) {
  let resultString = ''

  for (let row = arr.length - 1; row >= 0; row--) {
    for (let col = arr[row].length - 1; col >= 0; col--) {
      resultString += arr[row][col]
    }
  }
  console.log(resultString)
}

// solve(['I', 'am', 'student'])
// solve(['race', 'car'])
