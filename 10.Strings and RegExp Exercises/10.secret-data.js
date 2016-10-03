function solve (arr) {
  let text = arr.join('\n')
  let usernamePattern = /([*]{1}[A-Z]{1}[a-z]*)(\t|\s|$)/
  let phonePattern = /([+]{1}[-0-9]{10})($|\t|\s)/
  let idPattern = /([!]{1}[a-zA-Z0-9]+)(\t|\s|$)/
  let secretBasePattern = /([_]{1}[a-z-A-Z0-9]+)(\s|\t|$)/
  text = text.replace(usernamePattern, (el) => { return '|'.repeat(el.length - 1) })
  text = text.replace(phonePattern, (el) => { return '|'.repeat(el.length - 1) })
  text = text.replace(idPattern, (el) => { return '|'.repeat(el.length - 1) })
  text = text.replace(secretBasePattern, (el) => { return '|'.repeat(el.length - 1) })
  console.log(text)
}

solve([
  'Agent *Ivankov was in the room when it all happened.',
  'The person in the room was heavily armed.',
  'Agent *Ivankov had to act quick in order.',
  'He picked up his phone and called some unknown number.',
  'I think it was +555-49-796',
  'I can\'t really remember...',
  'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
  'Then after that he disappeared from my sight.',
  'As if he vanished in the shadows.',
  'A moment, shorter than a second, later, I saw the person flying off the top floor.',
  'I really don\'t know what happened there.',
  'This is all I saw, that night.',
  'I cannot explain it myself...'
])
