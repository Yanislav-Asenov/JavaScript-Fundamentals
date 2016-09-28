function solve (arr) {
  let num = Number(arr[0])

  for (let i = 1; i < arr.length; i++) {
    num = executeOperation(arr[i], num)
  }

  function executeOperation (type, num) {
    switch (type) {
      case 'chop':
        num = num / 2
        console.log(num)
        return num
      case 'dice':
        num = Math.sqrt(num)
        console.log(num)
        return num
      case 'spice':
        num += 1
        console.log(num)
        return num
      case 'bake':
        num *= 3
        console.log(num)
        return num
      case 'fillet':
        num = num - (num * 0.2)
        console.log(num)
        return num
    }
  }
}

// solve([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
// solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])

