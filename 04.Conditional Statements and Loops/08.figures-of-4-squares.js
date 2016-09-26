function solve (arr) {
  let n = Number(arr[0])

  if (n === 2) {
    console.log('+++')
  } else {
    let numberOfDashesOrSpaces = ((2 * n - 1) - 3) / 2
    let numberOfPipeLines = parseInt((numberOfDashesOrSpaces - 1) / 2)

    let line = '+' + addDashesOrSpaces(numberOfDashesOrSpaces, '-') + '+' + addDashesOrSpaces(numberOfDashesOrSpaces, '-') + '+'
    console.log(line)

    printMiddleLines(numberOfPipeLines, numberOfDashesOrSpaces)

    console.log(line)

    printMiddleLines(numberOfPipeLines, numberOfDashesOrSpaces)

    console.log(line)
  }

  function printMiddleLines (numberOfLines, numberOfSpaces) {
    for (let i = 0; i < numberOfLines; i++) {
      let line = '|' + addDashesOrSpaces(numberOfSpaces, ' ') + '|' + addDashesOrSpaces(numberOfSpaces, ' ') + '|'
      console.log(line)
    }
  }

  function addDashesOrSpaces (numberOfDashes, character) {
    let resultString = ''
    for (let i = 0; i < numberOfDashes; i++) {
      resultString += character
    }

    return resultString
  }
}
