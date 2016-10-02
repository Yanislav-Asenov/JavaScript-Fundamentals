function solve (arr) {
  let bannedUsernames = arr.pop().split(/\s+/).filter(x => x !== '')
  let codeBlocksPattern = /<code>(.|\n)*?<\/code>\n?/g
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

  // if (inputText.indexOf('<code>') > -1) {
  //   let indexOfStartTag = inputText.indexOf('<code>')
  //   let indexOfEndTag = inputText.indexOf('</code>')
  //   let textToReplace = inputText.substring(indexOfStartTag, indexOfEndTag + 7)

  //   inputText = inputText.replace(textToReplace, 'Янислав' + ++count)
  //   codeBlocks.push({
  //     'position': 'Янислав' + count,
  //     'body': textToReplace
  //   })
  // }

  let usernamePattern = /#([a-zA-Z][a-zA-Z0-9_-]{1,}[a-zA-Z0-9])/

  inputText = inputText.split('\n')
  for (let i = 0; i < inputText.length; i++) {
    let usernameMatch = usernamePattern.exec(inputText[i])

    while (usernameMatch) {
      let username = usernameMatch[1]

      if (bannedUsernames.indexOf(username) > -1) {
        inputText[i] = inputText[i].replace(usernameMatch[0], (x) => '*'.repeat(x.length - 1))
        usernameMatch = usernamePattern.exec(inputText[i])
        continue
      }

      let usernameReplacer = `<a href="/users/profile/show/${usernameMatch[1]}">${usernameMatch[1]}</a>`
      inputText[i] = inputText[i].replace(usernameMatch[0], usernameReplacer)

      usernameMatch = usernamePattern.exec(inputText[i])
    }
  }

  inputText = inputText.join('\n')

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
