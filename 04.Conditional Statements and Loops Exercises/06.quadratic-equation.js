function solve ([a, b, c]) {
  [a, b, c] = [a, b, c].map(Number)

  let disciminant = (b * b) - (4 * a * c)

  if (disciminant < 0) {
    // No real roots
    console.log('No')
  } else if (disciminant === 0) {
    // One real root
    let x1 = (-b - Math.sqrt(disciminant)) / (2 * a)
    console.log(x1)
  } else {
    // Two real roots
    let x1 = (-b + Math.sqrt(disciminant)) / (2 * a)
    let x2 = (-b - Math.sqrt(disciminant)) / (2 * a)

    console.log(Math.min(x1, x2))
    console.log(Math.max(x1, x2))
  }
}

solve(['5', '2', '1'])
