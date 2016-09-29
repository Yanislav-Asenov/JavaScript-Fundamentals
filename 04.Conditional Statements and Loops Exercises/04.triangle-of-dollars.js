function solve ([n]) {
  n = Number(n)
  for (let row = 0; row <= n; row++) {
    let currentRow = ''
    for (let col = 0; col < row; col++) {
      currentRow += '$'
    }
    console.log(currentRow)
  }
}

solve(['4'])
