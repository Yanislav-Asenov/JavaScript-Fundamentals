function solve (arr) {
  let resultNumbers = []

  for (let i = 0; i < arr.length; i++) {
    let currentNum = Number(arr[i])

    if (currentNum < 0) {
      resultNumbers.unshift(currentNum)
    } else {
      resultNumbers.push(currentNum)
    }
  }

  printArr(resultNumbers)

  function printArr (arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
  }
}

// solve(['3', '-2', '0', '-1'])
