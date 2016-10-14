function solve (inputArr) {
  let concerts = {}

  for (let i = 0; i < inputArr.length; i++) {
    let lineArgs = inputArr[i].split('|').map(x => x.trim())
    let bandName = lineArgs[0]
    let townName = lineArgs[1]
    let venueName = lineArgs[3]

    if (!concerts[townName]) {
      concerts[townName] = {}
    }

    if (!concerts[townName][venueName]) {
      concerts[townName][venueName] = []
    }

    if (concerts[townName][venueName].indexOf(bandName) === -1) {
      concerts[townName][venueName].push(bandName)
    }
  }

  let result = sortTowns(concerts)
  console.log(JSON.stringify(result))

  function sortTowns (concerts) {
    let keys = Object.keys(concerts).sort()
    let resultObject = {}

    // sort towns
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      resultObject[key] = concerts[key]
    }

    // sort venues
    for (let index in resultObject) {
      let venueKeys = Object.keys(resultObject[index]).sort()
      let sortedVenues = {}
      for (let i = 0; i < venueKeys.length; i++) {
        sortedVenues[venueKeys[i]] = concerts[index][venueKeys[i]]
      }

      resultObject[index] = sortedVenues
    }

    for (let index in resultObject) {
      for (let venueIndex in resultObject[index]) {
        resultObject[index][venueIndex].sort((a, b) => a.localeCompare(b))
      }
    }

    return resultObject
  }
}

// solve([
//   'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
//   'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
//   'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
//   'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
//   'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
//   'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
//   'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
//   'Helloween | London | 28-Jul-2014 | Wembley Stadium',
//   'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
//   'Metallica | London | 03-Oct-2014 | Olympic Stadium',
//   'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
//   'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
// ])
