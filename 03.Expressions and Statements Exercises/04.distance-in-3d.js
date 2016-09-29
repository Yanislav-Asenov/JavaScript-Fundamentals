function solve (arr) {
  let pointA = { x: Number(arr[0]), y: Number(arr[1]), z: Number(arr[2]) }
  let pointB = { x: Number(arr[3]), y: Number(arr[4]), z: Number(arr[5]) }

  let a = (pointA.x - pointB.x) * (pointA.x - pointB.x)
  let b = (pointA.y - pointB.y) * (pointA.y - pointB.y)
  let c = (pointA.z - pointB.z) * (pointA.z - pointB.z)

  let distance = Math.sqrt(a + b + c)

  console.log(distance)
}

solve([1, 1, 0, 5, 4, 0])
