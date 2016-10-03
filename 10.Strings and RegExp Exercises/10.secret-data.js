function solve (arr) {
  let usernamePattern = /(\*[A-Z][a-zA-Z]*?)( |\t|$)/g
  let phonePattern = /(\+[0-9-]{10})( |\t|$)/
  let idPattern = /(![0-9a-zA-Z]+)( |\t|$)/
  let secretBasesPattern = /(_[0-9a-zA-Z]+)( |\t|$)/

  for (let i = 0; i < arr.length; i++) {
    let usernameMatch = usernamePattern.exec(arr[i])
    while (usernameMatch) {
      arr[i] = arr[i].replace(usernameMatch[1], '|'.repeat(usernameMatch[1].length))
      usernameMatch = usernamePattern.exec(arr[i])
    }

    let phoneMatch = phonePattern.exec(arr[i])
    while (phoneMatch) {
      arr[i] = arr[i].replace(phoneMatch[1], '|'.repeat(phoneMatch[1].length))
      phoneMatch = phonePattern.exec(arr[i])
    }

    let idMatch = idPattern.exec(arr[i])
    while (idMatch) {
      arr[i] = arr[i].replace(idMatch[1], '|'.repeat(idMatch[1].length))
      idMatch = idPattern.exec(arr[i])
    }

    let secretBasesMatch = secretBasesPattern.exec(arr[i])
    while (secretBasesMatch) {
      arr[i] = arr[i].replace(secretBasesMatch[1], '|'.repeat(secretBasesMatch[1].length))
      secretBasesMatch = secretBasesPattern.exec(arr[i])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// solve([
//   'Agent *Ivankov was in the room when it all happened.',
//   'The person in the room was heavily armed.',
//   'Agent *Ivankov had to act quick in order.',
//   'He picked up his phone and called some unknown number.',
//   'I think it was +555-49-796',
//   'I can\'t really remember...',
//   'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
//   'Then after that he disappeared from my sight.',
//   'As if he vanished in the shadows.',
//   'A moment, shorter than a second, later, I saw the person flying off the top floor.',
//   'I really don\'t know what happened there.',
//   'This is all I saw, that night.',
//   'I cannot explain it myself...'
// ])
