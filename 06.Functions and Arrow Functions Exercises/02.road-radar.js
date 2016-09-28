function solve (arr) {
  let speed = Number(arr[0])
  let place = arr[1].toLowerCase()

  isInSpeedLimit(speed, place)

  function isInSpeedLimit (speed, place) {
    let speedLimits = { 'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20 }

    if (speed <= speedLimits[place]) {

    } else {
      if (speed - speedLimits[place] <= 20) {
        console.log('speeding')
      } else if (speed - speedLimits[place] <= 40) {
        console.log('excessive speeding')
      } else {
        console.log('reckless driving')
      }
    }
  }
}

// solve([200, 'motorway'])
