function solve (arr) {
  let numberOfJumpsAllowed = Number(arr.shift().trim())
  let trackLength = Number(arr.shift().trim())
  let numberOfFleas = arr.length
  let trackMatrix = []

  for (let row = 0; row < numberOfFleas; row++) {
    trackMatrix.push('.'.repeat(trackLength).split(''))
  }

  let fleas = []
  for (let row = 0; row < numberOfFleas; row++) {
    let fleaArgs = arr[row].split(/,/).filter(x => x !== '')
    let fleaName = fleaArgs[0].trim()
    let fleaJumpDistance = Number(fleaArgs[1].trim())
    fleas.push({
      'name': fleaName,
      'nickname': fleaName.toUpperCase()[0],
      'jumpDistance': fleaJumpDistance,
      'position': 0
    })
  }

  for (let row = 0; row < fleas.length; row++) {
    trackMatrix[row][0] = fleas[row].nickname
  }

  let totalJumpsCount = 0
  let winnerName = ''
  let hasWinner = false
  while (totalJumpsCount < numberOfJumpsAllowed && !hasWinner) {
    for (let i = 0; i < fleas.length; i++) {
      trackMatrix[i][fleas[i].position] = '.'
      fleas[i].position += fleas[i].jumpDistance

      if (fleas[i].position >= trackLength - 1) {
        winnerName = fleas[i].name
        trackMatrix[i][trackLength - 1] = fleas[i].nickname
        hasWinner = true
        break
      }

      trackMatrix[i][fleas[i].position] = fleas[i].nickname
    }
    totalJumpsCount++
  }

  let maxDistance = -1
  if (!hasWinner) {
    for (let i = 0; i < fleas.length; i++) {
      if (fleas[i].position >= maxDistance) {
        winnerName = fleas[i].name
        maxDistance = fleas[i].position
      }
    }
  }

  console.log('#'.repeat(trackLength))
  console.log('#'.repeat(trackLength))
  for (let row = 0; row < fleas.length; row++) {
    console.log(trackMatrix[row].join(''))
  }
  console.log('#'.repeat(trackLength))
  console.log('#'.repeat(trackLength))
  console.log(`Winner: ${winnerName}`)
}

// solve([
//   '10',
//   '19',
//   'angel, 9',
//   'Boris, 10',
//   'Georgi, 3',
//   'Dimitar, 7'
// ])

// solve([
//   '1',
//   '1',
//   'cura, 1',
//   'yanura, 1',
//   'qjkura, 1',
//   'batista, 1',
//   'Pepi, 1',
//   'UlTraFlea, 1',
//   'BOIKO, 1',
//   'stoiko, 1',
//   'mravka, 1',
//   'prase, 1'
// ])
