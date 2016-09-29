function solve (arr) {
  let firstObjectSpeed = Number(arr[0])
  let secondObjectSpeed = Number(arr[1])
  let seconds = Number(arr[2])

  let hours = seconds / 3600
  let firstObjectDistanceInMeters = hours * firstObjectSpeed * 1000
  let secondObjectDistanceInMeters = hours * secondObjectSpeed * 1000

  let result = Math.abs(firstObjectDistanceInMeters - secondObjectDistanceInMeters)

  console.log(result)
}

solve([11, 10, 120])
