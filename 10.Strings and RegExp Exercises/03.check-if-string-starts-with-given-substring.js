function solve (arr) {
  let text = arr[0]
  let substring = arr[1]

  if (text.startsWith(substring)) {
    console.log('true')
  } else {
    console.log('false')
  }
}

// solve([
//   'How have you been?',
//   'how'
// ])
