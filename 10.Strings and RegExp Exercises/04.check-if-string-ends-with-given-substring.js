function solve (arr) {
  let text = arr[0]
  let substring = arr[1]

  if (text.endsWith(substring)) {
    console.log('true')
  } else {
    console.log('false')
  }
}

// solve([
//   'This sentence ends with fun?',
//   'fun?'
// ])
