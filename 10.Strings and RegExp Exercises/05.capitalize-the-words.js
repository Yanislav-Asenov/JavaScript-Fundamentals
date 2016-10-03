function solve (arr) {
  let words = arr[0].split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalizeFirstLetter(words[i])
  }

  console.log(words.join(' '))

  function capitalizeFirstLetter (str) {
    let firstChar = str.charAt(0).toUpperCase()
    let theRestOfTheString = str.slice(1).toLowerCase()
    let result = firstChar + theRestOfTheString
    return result
  }
}

// solve(['Capitalize these words'])
