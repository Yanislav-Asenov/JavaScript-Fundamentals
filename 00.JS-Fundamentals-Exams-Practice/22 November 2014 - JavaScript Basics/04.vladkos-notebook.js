function solve (inputArr) {
  let objects = new Map()

  for (let i = 0; i < inputArr.length; i++) {
    let lineArgs = inputArr[i].split('|')
    let color = lineArgs[0]
    let ageWinOrLoss = lineArgs[1]

    if (!objects.has(color)) {
      objects.set(color, {
        age: false,
        name: false,
        opponents: [],
        wins: 0,
        loses: 0
      })
    }

    if (ageWinOrLoss === 'age') {
      let age = lineArgs[2]
      objects.get(color).age = age
    } else if (ageWinOrLoss === 'win') {
      let opponentName = lineArgs[2]
      objects.get(color).opponents.push(opponentName)
      objects.get(color).wins++
    } else if (ageWinOrLoss === 'loss') {
      let opponentName = lineArgs[2]
      objects.get(color).opponents.push(opponentName)
      objects.get(color).loses++
    } else if (ageWinOrLoss === 'name') {
      let playerName = lineArgs[2]
      objects.get(color).name = playerName
    }
  }

  let resultObject = {}

  for (let [key, value] of objects) {
    let color = key
    let currentObject = value

    if (!currentObject.name || !currentObject.age) {
      continue
    }

    let rank = (currentObject.wins + 1) / (currentObject.loses + 1)
    resultObject[color] = {
      age: currentObject.age,
      name: currentObject.name,
      opponents: currentObject.opponents.sort((a, b) => a.localeCompare(b)),
      rank: rank.toFixed(2)
    }
  }

  if (resultObject.length === 0) {
    console.log('[]')
  } else {
    console.log(JSON.stringify(resultObject))
  }
}

// solve([
//   'purple|age|99',
//   'red|age|44',
//   'blue|win|pesho',
//   'blue|win|mariya',
//   'purple|loss|Kiko',
//   'purple|loss|Kiko',
//   'purple|loss|Kiko',
//   'purple|loss|Yana',
//   'purple|loss|Yana',
//   'purple|loss|Manov',
//   'purple|loss|Manov',
//   'red|name|gosho',
//   'blue|win|Vladko',
//   'purple|loss|Yana',
//   'purple|name|VladoKaramfilov',
//   'blue|age|21',
//   'blue|loss|Pesho'
// ])
