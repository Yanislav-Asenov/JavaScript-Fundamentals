function solve (arr) {
  let townsIncome = 0
  let towns = []

  for (let town of arr) {
    let townArgs = town.split('|').filter((el) => el !== '')
    let townName = townArgs[0].trim()
    let townIncome = Number(townArgs[1].trim())
    towns.push(townName)
    townsIncome += townIncome
  }

  console.log(towns.join(', '))
  console.log(townsIncome)
}

// solve([
//   '| Sofia           | 300',
//   '| Veliko Tarnovo  | 500',
//   '| Yambol          | 275'
// ])
