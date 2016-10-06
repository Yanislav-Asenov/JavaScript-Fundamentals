function solve (arr) {
  let towns = []
  for (let i = 1; i < arr.length; i++) {
    let inputLineArgs = arr[i].split(/[|]+/).map(t => t.trim()).filter(x => x)
    let town = inputLineArgs[0]
    let latitude = Number(inputLineArgs[1])
    let longitude = Number(inputLineArgs[2])
    towns.push({
      Town: town,
      Latitude: latitude,
      Longitude: longitude
    })
  }
  console.log(JSON.stringify(towns))
}

solve([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'
])

solve([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |'
])
