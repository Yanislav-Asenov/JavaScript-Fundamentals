function solve (arr) {
  let text = arr[0]
  let delimiter = arr[1]
  let result = text.split(delimiter).join('\n')
  console.log(result)
}

// solve([
//   'One-Two-Three-Four-Five', 
//   '-'
// ])
