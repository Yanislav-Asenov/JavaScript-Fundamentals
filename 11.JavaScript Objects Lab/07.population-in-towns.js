function solve (arr) {
  let townsPopulation = new Map()

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('<->').filter(x => x)
    let town = lineArgs[0].trim()
    let population = Number(lineArgs[1].trim())
    if (townsPopulation.has(town)) {
      townsPopulation.set(town, townsPopulation.get(town) + population)
    } else {
      townsPopulation.set(town, population)
    }
  }

  for (let [key, value] of townsPopulation) {
    console.log(`${key} : ${value}`)
  }
}

// solve([
//   'Sofia <-> 1200000',
//   'Montana <-> 20000',
//   'New York <-> 10000000',
//   'Washington <-> 2345000',
//   'Las Vegas <-> 1000000'
// ])
