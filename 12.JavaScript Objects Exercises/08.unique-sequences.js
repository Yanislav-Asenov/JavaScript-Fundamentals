function solve (arr) {
  let inputArrays = new Set()

  for (let i = 0; i < arr.length; i++) {
    let currentArray = JSON.parse(arr[i])
    currentArray.sort((a, b) => a < b)
    currentArray = currentArray.join(', ')
    if (inputArrays.has(currentArray)) {
      inputArrays.delete(currentArray)
    }
    inputArrays.add(currentArray)
  }

  let resultArr = []
  let currentArrays = Array.from(inputArrays)

  for (let i = 0; i < currentArrays.length; i++) {
    let currentNumbers = currentArrays[i].split(', ')
    resultArr.push(currentNumbers)
  }

  resultArr.sort((a, b) => {
    return a.length > b.length
  })

  for (let i = 0; i < resultArr.length; i++) {
    console.log(`[${resultArr[i].join(', ')}]`)
  }
}

// solve([
//   '[-3, -2, -1, 0, 1, 2, 3, 4]',
//   '[10, 1, -17, 0, 2, 13]',
//   '[4, -3, 3, -2, 2, -1, 1, 0]'
// ])


solve([
  '[7.14, 7.180, 7.339, 80.099]',
  '[7.339, 80.0990, 7.140000, 7.18]',
  '[7.339, 7.180, 7.14, 80.099]'
])
