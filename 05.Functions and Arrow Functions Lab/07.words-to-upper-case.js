function solve ([inputStr]) {
  inputStr = inputStr.split(/[\s.?!,:\-'"]/).filter((el) => {
    return el !== ''
  })

  for (let i = 0; i < inputStr.length; i++) {
    inputStr[i] = inputStr[i].toUpperCase()
  }

  console.log(inputStr.join(', '))
}

// solve(['hello'])
