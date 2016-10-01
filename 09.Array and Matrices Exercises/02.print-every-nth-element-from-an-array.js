function solve (arr) {
  let n = Number(arr.pop())

  for (let i = 0; i < arr.length; i++) {
    if (i % n === 0) {
      console.log(arr[i])
    }
  }
}

// solve([
//   '5',
//   '20',
//   '31',
//   '4',
//   '20',
//   '2'
// ])
