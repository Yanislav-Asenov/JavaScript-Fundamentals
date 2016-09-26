function solve (input) {
  let regex = /mine.+-\s*(gold|diamonds|silver)\s*:\s*(\d+)/

  let silver = 0
  let gold = 0
  let diamonds = 0

  for (let i = 0; i < input.length; i++) {
    let match = regex.exec(input[i].toLowerCase())
    if (!match) {
      continue
    }

    let type = match[1]
    let amount = Number(match[2])

    switch (type) {
      case 'silver':
        silver += amount
        break
      case 'gold':
        gold += amount
        break
      case 'diamonds':
        diamonds += amount
        break
    }
  }

  console.log(`*Silver: ${silver}`)
  console.log(`*Gold: ${gold}`)
  console.log(`*Diamonds: ${diamonds}`)
}

// solve([
//   'mine bobovdol - gold: 10',
//   'mine - diamonds: 5',
//   'mine colas - wood: 10',
//   'mine myMine - silver:  14',
//   'mine silver:14 - silver: 14'
// ])

// solve([
//   'mine bobovDol - gold: 10',
//   'mine medenRudnik - silver: 22',
//   'mine chernoMore - shrimps : 24',
//   'gold: 50'
// ])
