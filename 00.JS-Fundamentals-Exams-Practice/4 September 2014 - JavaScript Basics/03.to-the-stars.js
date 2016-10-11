function solve (inputArr) {
  let numberOfMoves = Number(inputArr.pop())

  let firstStarInfo = inputArr.shift().toLowerCase().split(' ')
  let firstStarName = firstStarInfo[0]
  let firstStarX = parseFloat(firstStarInfo[1])
  let firstStarY = parseFloat(firstStarInfo[2])

  let secondStarInfo = inputArr.shift().toLowerCase().split(' ')
  let secondStarName = secondStarInfo[0]
  let secondStarX = parseFloat(secondStarInfo[1])
  let secondStarY = parseFloat(secondStarInfo[2])


  let thirdStarInfo = inputArr.shift().toLowerCase().split(' ')
  let thirdStarName = thirdStarInfo[0]
  let thirdStarX = parseFloat(thirdStarInfo[1])
  let thirdStarY = parseFloat(thirdStarInfo[2])

  let playerInfo = inputArr.shift().toLowerCase().split(' ')
  let playerX = parseFloat(playerInfo[0])
  let playerY = parseFloat(playerInfo[1])

  for (let y = 0; y <= numberOfMoves; y++) {
    if (isPlayerInsideStar(playerX, playerY, firstStarX, firstStarY)) {
      console.log(`${firstStarName}`)
    } else if (isPlayerInsideStar(playerX, playerY, secondStarX, secondStarY)) {
      console.log(`${secondStarName}`)
    } else if (isPlayerInsideStar(playerX, playerY, thirdStarX, thirdStarY)) {
      console.log(`${thirdStarName}`)
    } else {
      console.log('space')
    }
    playerY++
  }

  function isPlayerInsideStar (playerX, playerY, starX, starY) {
    let startUpperSide = starY + 1
    let starDownSide = starY - 1
    let starLeftSide = starX - 1
    let starRightSide = starX + 1

    let isPlayerInRange = playerY >= starDownSide &&
                            playerY <= startUpperSide &&
                            playerX >= starLeftSide &&
                            playerX <= starRightSide
    return isPlayerInRange
  }
}

// solve([
//   'Sirius 3 7',
//   'Alpha-Centauri 7 5',
//   'Gamma-Cygni 10 10',
//   '8 1',
//   '6'
// ])
