function solve (arr) {
  let resultNumbers = []

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
      let currentNum = Number(arr[i])
      let resultNum = currentNum * 2
      resultNumbers.push(resultNum)
    }
  }

  console.log(resultNumbers.join(' '))
}

// solve(['10', '15', '20', '25'])
// solve(['3', '0', '10', '4', '7', '3'])
