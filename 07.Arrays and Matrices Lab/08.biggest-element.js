function solve (arr) {
  let numbers = arr.join(' ').split(' ').map(Number).sort((a, b) => b - a).splice(0, 1)[0]

  console.log(numbers)
}

// solve(['20 50 10', '8 33 145'])
