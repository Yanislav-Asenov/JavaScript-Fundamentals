function solve (arr) {
  let directions = arr.shift().trim().split(', ').filter(x => x !== '')
  let matrix = []

  for (let row = 0; row < arr.length; row++) {
    let currentRow = arr[row].split(', ').filter(x => x !== '')
    matrix.push(currentRow)
  }

  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row].join(' '))
  }
}

solve([
  'right, up, up, down',
  'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
  'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
  'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
])
