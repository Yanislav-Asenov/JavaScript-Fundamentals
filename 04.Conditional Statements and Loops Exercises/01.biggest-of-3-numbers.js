function solve ([a, b, c]) {
  [a, b, c] = [a, b, c].map(Number)
  let result = Math.max(a, b, c)

  console.log(result)
}

solve(['5', '-2', '7'])
