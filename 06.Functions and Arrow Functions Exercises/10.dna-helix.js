function solve (arr) {
  let n = Number(arr[0])
  let dnaPattern = 'ATCGTTAGGG'

  let index = 0
  for (let row = 0; row < n; row++) {
    if (row % 4 === 0) {
      console.log(`**${dnaPattern[index++ % dnaPattern.length]}${dnaPattern[index++ % dnaPattern.length]}**`)
    } else if (row % 4 === 1) {
      console.log(`*${dnaPattern[index++ % dnaPattern.length]}--${dnaPattern[index++ % dnaPattern.length]}*`)
    } else if (row % 4 === 2) {
      console.log(`${dnaPattern[index++ % dnaPattern.length]}----${dnaPattern[index++ % dnaPattern.length]}`)
    } else if (row % 4 === 3) {
      console.log(`*${dnaPattern[index++ % dnaPattern.length]}--${dnaPattern[index++ % dnaPattern.length]}*`)
    }
  }
}

// solve(['10'])
