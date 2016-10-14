function solve (inputArr) {
  let colors = []

  for (let i = 0; i < inputArr.length; i++) {
    let lineArgs = inputArr[i].split('|')
    let color = lineArgs[0]
    let infoType = lineArgs[1]

    if (!colors[color]) {
      colors[color] = {
        age: 'Qni',
        name: 'Qni',
        wins: 0,
        losses: 0,
        opponents: []
      }
    }

    switch (infoType) {
      case 'win':
        colors[color].wins++
        colors[color].opponents.push(lineArgs[2])
        break
      case 'loss':
        colors[color].losses++
        colors[color].opponents.push(lineArgs[2])
        break
      case 'name':
        colors[color].name = lineArgs[2]
        break
      case 'age':
        colors[color].age = lineArgs[2]
        break
    }
  }

  let resultObject = {}
  let sortedKeys = Object.keys(colors).sort()

  for (let key of sortedKeys) {
    let index = key
    let currentObject = colors[index]
    if (currentObject.name === 'Qni' || currentObject.age === 'Qni') {
      continue
    }

    currentObject.opponents.sort()
    let rank = (currentObject.wins + 1) / (currentObject.losses + 1)
    resultObject[index] = {
      age: currentObject.age,
      name: currentObject.name,
      opponents: currentObject.opponents,
      rank: rank.toFixed(2)
    }
  }

  console.log(JSON.stringify(resultObject))
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

// solve([
//   'red|name|kiko',
//   'red|win|Vladko',
//   'blue|age|12',
//   'green|age|13',
//   'green|win|gosho',
//   'red|age|12',
//   'green|name|Pesho',
//   'green|win|ico',
//   'green|win|Gosho',
//   'green|win|qfkata',
//   'green|win|stamat',
//   'green|win|petko',
//   'green|win|mariya'
// ])
