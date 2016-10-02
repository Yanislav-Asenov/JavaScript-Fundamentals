function solve (arr) {
  let players = []

  for (let i = 0; i < arr.length; i++) {
    let inputArgs = arr[i].split('vs.')
    let firstPlayerName = inputArgs[0].trim()
    let secondPlayerName = inputArgs[1].trim().split(':')[0].trim()
    let sets = inputArgs[1].split(':')[1].split(/\s+/).filter(x => x !== '')

    firstPlayerName = firstPlayerName.replace(/s+/, ' ')
    secondPlayerName = secondPlayerName.replace(/\s+/, ' ')

    let firstPlayerIndex = getPlayerIndexByName(firstPlayerName, players)
    let secondPlayerIndex = getPlayerIndexByName(secondPlayerName, players)

    if (!firstPlayerIndex) {
      players.push({
        'name': firstPlayerName,
        'matchesWon': 0,
        'matchesLost': 0,
        'setsWon': 0,
        'setsLost': 0,
        'gamesWon': 0,
        'gamesLost': 0
      })
      firstPlayerIndex = players.length - 1
    }
    if (!secondPlayerIndex) {
      players.push({
        'name': secondPlayerName,
        'matchesWon': 0,
        'matchesLost': 0,
        'setsWon': 0,
        'setsLost': 0,
        'gamesWon': 0,
        'gamesLost': 0
      })
      secondPlayerIndex = players.length - 1
    }

    let firstPlayerSetsWon = 0
    let secondPlayerSetsWon = 0

    for (let i = 0; i < sets.length; i++) {
      let setArgs = sets[i].split('-')
      let firstPlayerGamesWon = Number(setArgs[0])
      let secondPlayerGamesWon = Number(setArgs[1])
      let firstPlayerGamesLost = secondPlayerGamesWon
      let secondPlayerGamesLost = firstPlayerGamesWon

      players[firstPlayerIndex].gamesWon += firstPlayerGamesWon
      players[firstPlayerIndex].gamesLost += firstPlayerGamesLost
      players[secondPlayerIndex].gamesWon += secondPlayerGamesWon
      players[secondPlayerIndex].gamesLost += secondPlayerGamesLost

      if (firstPlayerGamesWon > secondPlayerGamesWon) {
        players[firstPlayerIndex].setsWon++
        players[secondPlayerIndex].setsLost++
        firstPlayerSetsWon++
      } else {
        players[secondPlayerIndex].setsWon++
        players[firstPlayerIndex].setsLost++
        secondPlayerSetsWon++
      }
    }

    if (firstPlayerSetsWon > secondPlayerSetsWon) {
      players[firstPlayerIndex].matchesWon++
      players[secondPlayerIndex].matchesLost++
    } else {
      players[secondPlayerIndex].matchesWon++
      players[firstPlayerIndex].matchesLost++
    }
  }

  players.sort((a, b) => {
    if (a.matchesWon !== b.matchesWon) {
      return a.matchesWon < b.matchesWon
    } else if (a.setsWon !== b.setsWon) {
      return a.setsWon < b.setsWon
    } else if (a.gamesWon !== b.gamesWon) {
      return a.gamesWon < b.gamesWon
    } else {
      return a.name.localeCompare(b.name)
    }
  })


  console.log(players)

  function getPlayerIndexByName (playerName, players) {
    for (let index in players) {
      if (players[index].name === playerName) {
        return index
      }
    }
    return false
  }

  function sortResult (a, b) {
    if (a.matchesWon !== b.matchesWon) {
      return a.matchesWon < b.matchesWon
    } else if (a.setsWon !== b.setsWon) {
      return a.setsWon < b.setsWon
    } else if (a.gamesWon !== b.gamesWon) {
      return a.gamesWon < b.gamesWon
    } else {
      return a.name.localeCompare(b.name)
    }
  }
}

solve([
  'Novak Djokovic vs. Roger Federer : 6-3 6-3',
  'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
  'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
  'Andy Murray vs. David     Ferrer : 6-4 7-6',
  'Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
  'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
  'Pete Sampras vs. Andre Agassi : 2-1',
  'Boris Beckervs.Andre        Agassi:2-1'
])
