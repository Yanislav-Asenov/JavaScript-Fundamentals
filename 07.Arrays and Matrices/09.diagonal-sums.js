function solve (arr) {
  let mainSum = 0
  let secondarySum = 0
  let matrix = []

  for (let row = 0; row < arr.length; row++) {
    matrix.push(arr[row].split(' ').map(Number))
  }

  for (let row = 0; row < matrix.length; row++) {
    let currentRow = arr[row].split(' ').map(Number)
    let firstNum = Number(currentRow[row])
    let secondNum = Number(currentRow[arr.length - 1 - row])

    mainSum += firstNum
    secondarySum += secondNum
  }

  console.log(`${mainSum} ${secondarySum}`)
}

// solve(
//   ['20 40',
//  '10 60']
// )
