function solve (arr) {
  let num = 0
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      resultArr.push(++num)
    } else if (arr[i] === 'remove') {
      num++
      if (resultArr.length > 0) {
        resultArr.pop()
      }
    }
  }

  if (resultArr.length === 0) {
    console.log('Empty')
    return
  }

  for (let item of resultArr) {
    console.log(item)
  }
}

// solve([
//   'add',
//   'add',
//   'add',
//   'add'
// ])


// solve([
//   'add',
//   'add',
//   'remove',
//   'add',
//   'add'
// ])
