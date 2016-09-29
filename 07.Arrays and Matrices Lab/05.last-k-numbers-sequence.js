function solve (arr) {
  let n = Number(arr[0])
  let k = Number(arr[1])
  let resultNumbers = []
  resultNumbers.push(1)

  for (let i = 1; i < n; i++) {
    let sum = 0
    for (let j = resultNumbers.length - 1; j >= 0 && j >= i - k; j--) {
      sum += Number(resultNumbers[j])
    }
    resultNumbers.push(sum)
  }

  console.log(resultNumbers.join(' '))
}

// solve(['6', '3'])
// solve(['8', '2'])
