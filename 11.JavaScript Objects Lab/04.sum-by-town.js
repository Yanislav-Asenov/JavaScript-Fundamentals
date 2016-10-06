function solve (arr) {
  let towns = {}

  for (let i = 0; i < arr.length - 1; i += 2) {
    let townName = arr[i]
    let value = Number(arr[i + 1])

    if (!towns[townName]) {
      towns[townName] = 0
    }

    towns[townName] += value
  }

  console.log(JSON.stringify(towns))
}

solve([
  'Sofia',
  '20',
  'Varna',
  '3',
  'Sofia',
  '5',
  'Varna',
  '4'
])
