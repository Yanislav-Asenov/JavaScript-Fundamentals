function solve ([inputString]) {
  let reversedInputString = inputString.split('').reverse().join('')

  if (inputString === reversedInputString) {
    console.log('true')
  } else {
    console.log('false')
  }
}

// solve(['racecar'])
