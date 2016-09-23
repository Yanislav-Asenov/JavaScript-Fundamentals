function solve ([ax, ay, bx, by]) {
  let [pointA, pointB] = [{ x: ax, y: ay }, { x: bx, y: by }]

  let distanceX = Math.pow(pointA.x - pointB.x, 2)
  let distanceY = Math.pow(pointA.y - pointB.y, 2)

  let result = Math.sqrt(distanceX + distanceY)

  console.log(result)
}

solve(['2', '4', '5', '0'])
