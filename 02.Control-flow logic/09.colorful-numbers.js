function solve (input) {
  console.log(`<ul>\n`)
  for (let i = 1; i <= Number(input[0]); i++) {
    if (i % 2 === 1) {
      console.log(`<li><span style='color: green'>${i}</span></li>`)
    } else {
      console.log(`<li><span style='color: blue'>${i}</span></li>`)
    }
  }
  console.log(`</ul>`)
}

solve(['5'])
