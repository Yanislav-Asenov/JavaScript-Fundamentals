function solve (arr) {
  let juiceData = []
  let resultBottles = []

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('=>').filter(x => x).map(x => x.trim())
    let juiceName = lineArgs[0]
    let quantity = Number(lineArgs[1])

    if (!juiceData[juiceName]) {
      juiceData[juiceName] = {
        quantity: 0
      }
    }

    juiceData[juiceName].quantity += quantity

    if (juiceData[juiceName].quantity >= 1000) {
      let bottleIndex = hasBottle(juiceName, resultBottles)
      if (!bottleIndex && bottleIndex !== 0) {
        resultBottles.push({
          name: juiceName,
          bottles: 0
        })
        bottleIndex = resultBottles.length - 1
      }
      let numberOfBottles = juiceData[juiceName].quantity / 1000
      numberOfBottles = parseInt(numberOfBottles)
      resultBottles[bottleIndex].bottles += numberOfBottles
      juiceData[juiceName].quantity -= numberOfBottles * 1000
    }
  }

  for (let i = 0; i < resultBottles.length; i++) {
    console.log(`${resultBottles[i].name} => ${resultBottles[i].bottles}`)
  }

  function hasBottle (juiceName, resultBottles) {
    for (let i = 0; i < resultBottles.length; i++) {
      if (resultBottles[i].name === juiceName) {
        return i
      }
    }

    return false
  }
}

// solve([
//   'Orange => 2000',
//   'Peach => 1432',
//   'Banana => 450',
//   'Peach => 600',
//   'Strawberry => 549'
// ])

// solve([
//   'Kiwi => 234',
//   'Pear => 2345',
//   'Watermelon => 3456',
//   'Kiwi => 4567',
//   'Pear => 5678',
//   'Watermelon => 6789'
// ])
