function solve ([n]) {
  n = Number(n)

  console.log('<table border="1">')
  for (let row = 0; row <= n; row++) {
    let currentRow = '<tr>'
    if (row !== 0) {
      currentRow += `<th>${row}</th>`
    }
    for (let col = 0; col <= n; col++) {
      if (row === 0 && col === 0) {
        currentRow += `<th>x</th>`
      } else if (row === 0) {
        currentRow += `<th>${col}</th>`
      } else if (row > 0 && col > 0) {
        currentRow += `<td>${row * col}</td>`
      }
    }

    currentRow += '</tr>'
    console.log(currentRow)
  }
  console.log('</table>')
}

solve(['5'])
