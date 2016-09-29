function solve (input) {
  let [radius, height] = input.map(Number)

  let slantHeight = Math.sqrt(radius * radius + height * height)
  let volume = Math.PI * radius * radius * height / 3
  console.log('volume = ' + volume)

  let area = Math.PI * radius * (radius + slantHeight)
  console.log('area = ' + area)
}

solve(['3', '5'])
