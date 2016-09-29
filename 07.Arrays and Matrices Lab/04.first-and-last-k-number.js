function solve (arr) {
  let k = Number(arr[0])
  let firstKNumbers = []
  let lastKNumbers = []
  for (let i = 1; i <= k && i < arr.length; i++) {
    firstKNumbers.push(arr[i])
  }

  for (let i = arr.length - k; i < arr.length; i++) {
    lastKNumbers.push(arr[i])
  }
  console.log(firstKNumbers.join(' '))
  console.log(lastKNumbers.join(' '))
}

// solve(['2', '7', '8', '9'])
// solve(['3', '6', '7', '8', '9'])
