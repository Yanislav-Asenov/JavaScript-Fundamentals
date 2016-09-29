function solve (arr) {
  let result = arr.map(Number).sort((a, b) => a - b).splice(0, 2).join(' ')
  console.log(result)
}

// solve(['30', '15', '50', '5'])
