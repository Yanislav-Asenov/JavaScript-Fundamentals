function solve (arr) {
  let heroesData = []
  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('/')
    let heroName = lineArgs[0].trim()
    let heroLevel = Number(lineArgs[1].trim())
    let heroItems = []
    if (lineArgs[2]) {
      heroItems = lineArgs[2].split(/, /).filter(x => x).map(x => x.trim())
    }

    heroesData.push({
      name: heroName,
      level: heroLevel,
      items: heroItems
    })
  }

  console.log(JSON.stringify(heroesData))
}

// solve([
//   'Isacc / 25 / Apple, GravityGun',
//   'Derek / 12 / BarrelVest, DestructionSword',
//   'Hes / 1 / Desolator, Sentinel, Antara'
// ])
