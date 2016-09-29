function solve (arr) {
  let radius = Number(arr[0])
  let area = Math.PI * radius * radius
  console.log(area)
  console.log(area.toFixed(2))
}

solve(['5'])
