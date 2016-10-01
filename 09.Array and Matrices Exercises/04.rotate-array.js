function solve (arr) {
  let numberOfRotations = Number(arr.pop())

  for (let i = 0; i < numberOfRotations % arr.length; i++) {
    arr.unshift(arr.pop())
  }

  console.log(arr.join(' '))
}

// solve([
//   'Banana',
//   'Orange',
//   'Coconut',
//   'Apple',
//   '15'
// ])
