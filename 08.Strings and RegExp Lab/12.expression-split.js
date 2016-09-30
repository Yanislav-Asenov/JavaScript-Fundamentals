function solve (arr) {
  let regex = /\s+|;|\.|,|\)|\(|\\t/g
  let result = arr[0].split(regex).filter(x => x !== '')

  for (let item of result) {
    console.log(item)
  }
}

// solve(['let sum = 4 * 4,b = "wow" let sum = 2 + 3;'])
