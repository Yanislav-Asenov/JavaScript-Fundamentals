function solve (arr) {
  let resultString = ''
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      resultString += arr[i] + ' '
    }
  }

  console.log(resultString)
}

// solve(['20', '30', '40'])
