function solve (arr) {
  let numberOfJumpsAllowed = Number(arr[0])
  let trackLength = Number(arr[1])
  let fleasArray = []

// Fill fleas into array
  for (let i = 2; i < arr.length; i++) {
    let fleaArgs = arr[i].split(/, /g)
    let flea = { name: fleaArgs[0], jumpDistance: Number(fleaArgs[1]), position: 1, isWinner: false, nickname: fleaArgs[0][0].toUpperCase(), numberOfJumps: 0 }

    fleasArray.push(flea)
  }

// Manage flea stats
  let hasWinner = false
  for (let trackRow = 0; trackRow < fleasArray.length; trackRow++) {

    for (let trackCol = 0; trackCol < numberOfJumpsAllowed; trackCol++) {
      for (let j = 0; j < fleasArray.length; j++) {
        let currentFlea = fleasArray[j]

        if (currentFlea.position + currentFlea.jumpDistance >= trackLength && currentFlea.numberOfJumps < numberOfJumpsAllowed) {
          fleasArray.map((el) => {
            el.isWinner = false
          })

          currentFlea.isWinner = true
          currentFlea.position = trackLength
          currentFlea.numberOfJumps++
          hasWinner = true
          break
        } else if (currentFlea.numberOfJumps < numberOfJumpsAllowed) {
          currentFlea.position += currentFlea.jumpDistance
          currentFlea.numberOfJumps++
          let isOtherFleaAtSamePosition = false
          for (let i = 0; i < fleasArray.length; i++) {
            if (fleasArray[i].position === currentFlea.position && fleasArray[i].name !== currentFlea.name) {
              isOtherFleaAtSamePosition = true
              break
            }
          }

          if (isOtherFleaAtSamePosition) {
            fleasArray.map((el) => {
              el.isWinner = false
            })
            currentFlea.isWinner = true
          }
        }

        fleasArray[j] = currentFlea
        if (hasWinner) break
      }

      if (hasWinner) break
    }
  }

  printAudiance(trackLength)

  for (let i = 0; i < fleasArray.length; i++) {
    let currentFlea = fleasArray[i]
    let trackRow = ''
    for (let j = 1; j <= trackLength; j++) {
      if (currentFlea.position === j) {
        trackRow += currentFlea.nickname
      } else {
        trackRow += '.'
      }
    }

    console.log(trackRow)
  }


  printAudiance(trackLength)
  let winnerFlea

  for (let i = 0; i < fleasArray.length; i++) {
    if (fleasArray[i].isWinner) {
      winnerFlea = fleasArray[i]
      break
    }
  }

  console.log('Winner: ' + winnerFlea.name)

  function printAudiance (trackLength) {
    for (let row = 0; row < 2; row++) {
      let rowOfAudiance = ''
      for (let i = 0; i < trackLength; i++) {
        rowOfAudiance += '#'
      }
      console.log(rowOfAudiance)
    }
  }
}

solve()
