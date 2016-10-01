function solve (arr) {
  arr = arr.map(Number)
  console.log(arr[0])
  let previousNum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i]
    if (currentNum >= previousNum) {
      console.log(currentNum)
    }
    previousNum = currentNum
  }
}

// solve([
//   '1',
//   '3',
//   '8',
//   '4',
//   '10',
//   '12',
//   '3',
//   '2',
//   '24'
// ])

// solve([
//   '20',
//   '3',
//   '2',
//   '15',
//   '6',
//   '1'
// ])
