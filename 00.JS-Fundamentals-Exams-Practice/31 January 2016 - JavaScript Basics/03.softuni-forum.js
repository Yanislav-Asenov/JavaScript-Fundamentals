function solve (arr) {
  let bannedUsernames = arr.pop().split(' ')
  let codeBlocksPattern = /<code>[\s\S]+?<\/code>/g
  let inputText = arr.join('\n')
  let codeBlocks = []

  let codeBlockMatch = codeBlocksPattern.exec(inputText)
  let count = 0
  while (codeBlockMatch) {
    inputText = inputText.replace(codeBlockMatch[0], 'Янислав' + ++count)
    codeBlocks.push({
      'position': 'Янислав' + count,
      'body': codeBlockMatch[0]
    })

    codeBlockMatch = codeBlocksPattern.exec(inputText)
  }

  bannedUsernames.forEach((el) => {
    let censoredUsernamePattern = new RegExp('(#\\b' + el + ')\\b', 'g')
    let match = censoredUsernamePattern.exec(inputText)
    while (match) {
      let censoredName = match[1]
      let nameReplacer = '*'.repeat(censoredName.length)
      inputText.replace(censoredName, nameReplacer)
      match = censoredUsernamePattern.exec(inputText)
    }
  })

  let usernamePattern = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/
  let linkOpeningTag = '<a href="/users/profile/show/'
  let linkClosingTag = '</a>'
  inputText = inputText.replace(usernamePattern, linkOpeningTag + '$1">$1' + linkClosingTag)

  for (let index in codeBlocks) {
    inputText = inputText.replace(codeBlocks[index].position, codeBlocks[index].body)
  }

  console.log(inputText)
}

// solve([
//   `#RoYaL: I'm not sure what you mean,`,
//   `but I am confident that I've written`,
//   `everything correctly. Ask #iordan_93`,
//   `and #pesho if you don't believe me`,
//   `<code>`,
//   `#trying to print stuff`,
//   `print("yoo")`,
//   `</code>`,
//   `pesho gosho`
// ])

// solve([
//   `I'm not sure what you mean but #RoYaL`,
//   `says that I've written everything correctly. Ask`,
//   `#iordan_93 and #pesho`,
//   `if you don't believe me`,
//   `<code>`,
//   `#trying to print stuff`,
//   `print("yoo")`,
//   `</code>`,
//   `Yoo`,
//   `<code>`,
//   `#trying to print stuff`,
//   `#gosho`,
//   `print("yoo")`,
//   `</code>`,
//   `pesho gosho`
// ])
