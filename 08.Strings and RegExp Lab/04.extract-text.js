function solve ([text]) {
  let resultArr = []

  let index = text.indexOf('(')

  while (index > -1) {
    text = text.slice(index + 1)
    let indexOfClosingParenthensis = text.indexOf(')')
    let currentText = text.substring(0, indexOfClosingParenthensis)
    resultArr.push(currentText)
    text = text.slice(indexOfClosingParenthensis)
    index = text.indexOf('(')
  }

  console.log(resultArr.join(', '))
}

// solve(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'])
