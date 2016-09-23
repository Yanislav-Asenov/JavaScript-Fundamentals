function solve ([x, y, xMin, xMax, yMin, yMax]) {
  [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number)

  let isInside = x <= xMax && x >= xMin && y >= yMin && y <= yMax

  if (isInside) {
    console.log('inside')
  } else {
    console.log('outside')
  }
}

solve(['12.5', '-1', '2', '12', '-3', '3'])
