function solve (arr) {
  let n = Number(arr[0])

  let numberOfDashesOrSpaces = ((2 * n - 1) - 3) / 2
  let numberOfPipeLines = parseInt((numberOfDashesOrSpaces - 1) / 2)

// All same lines
  let line = '+' + addDashesOrSpaces(numberOfDashesOrSpaces, '-') + '+' + addDashesOrSpaces(numberOfDashesOrSpaces, '-') + '+'
  console.log(line)

  printMiddleLines(numberOfPipeLines, numberOfDashesOrSpaces)

// Print middle line
  console.log(line)

  printMiddleLines(numberOfPipeLines, numberOfDashesOrSpaces)

// Print last line
  console.log(line)

// Print line with pipes
  function printMiddleLines (numberOfLines, numberOfSpaces) {
    for (let i = 0; i < numberOfLines; i++) {
      let line = '|' + addDashesOrSpaces(numberOfSpaces, ' ') + '|' + addDashesOrSpaces(numberOfSpaces, ' ') + '|'
      console.log(line)
    }
  }

// Print spaces or dashes
  function addDashesOrSpaces (numberOfDashes, character) {
    let resultString = ''
    for (let i = 0; i < numberOfDashes; i++) {
      resultString += character
    }

    return resultString
  }
}

solve(['7'])
