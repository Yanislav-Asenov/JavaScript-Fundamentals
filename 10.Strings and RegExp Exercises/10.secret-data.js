function solve (arr) {
  let usernamePattern = /(\*[A-Z][a-zA-Z]*)( |\t|$)/
  let phonePattern = /(\+[0-9-]{10})( |\t|$)/
  let idPattern = /(![0-9a-zA-Z]+)( |\t|$)/
  let secretBasesPattern = /(_[0-9a-zA-Z]+)( |\t|$)/

  for (let i = 0; i < arr.length; i++) {
    let usernameMatch = usernamePattern.exec(arr[i])
    if (usernameMatch) {
      // (regex, result)
      arr[i] = arr[i].replace(usernameMatch, '|'.repeat(usernameMatch[1].length))
    }

    let phoneMatch = phonePattern.exec(arr[i])
    if (phoneMatch) {
      arr[i] = arr[i].replace(phoneMatch, '|'.repeat(phoneMatch[1].length))
    }

    let idMatch = idPattern.exec(arr[i])
    if (idMatch) {
      arr[i] = arr[i].replace(idMatch, '|'.repeat(idMatch[1].length))
    }

    let secretBasesMatch = secretBasesPattern.exec(arr[i])
    if (secretBasesMatch) {
      arr[i] = arr[i].replace(secretBasesMatch, '|'.repeat(secretBasesMatch[1].length))
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
//   'I think it was *Ivankov +555-49-796 !2491a23BVB34Q _Aurora21',
//   'I can\'t really remember...',
//   'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
//   'Then after that he disappeared from my sight.',
//   'As if he vanished in the shadows.',
//   'A moment, shorter than a second, later, I saw the person flying off the top floor.',
//   'I really don\'t know what happened there.',
//   'This is all I saw, that night.',
//   'I cannot explain it myself...'
// ])
