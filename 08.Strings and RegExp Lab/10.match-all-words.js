function solve (arr) {
  arr = arr[0].split(/\W/g).filter(x => x !== '')
  console.log(arr.join('|'))
}

// solve(['A Regular Expression needs to have the global flag in order to match all occurrences in the text'])
