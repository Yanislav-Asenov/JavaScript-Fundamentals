function solve (inputArr) {
  let whiteSpacePattern = /(%20|\+)/g
  let queryPattern = /([^?&]+?)=([^?&]+?)($|\?|&)/g

  for (let i = 0; i < inputArr.length; i++) {
    let currentLine = inputArr[i].replace(whiteSpacePattern, ' ')
    inputArr[i] = currentLine.replace(/[ ]+/g, ' ')
    let match = queryPattern.exec(inputArr[i])
    let currentObjects = new Map()
    let resultString = ''
    while (match) {
      let key = match[1].trim()
      let value = match[2].trim()

      if (!currentObjects.has(key)) {
        currentObjects.set(key, [])
      }

      currentObjects.get(key).push(value)

      match = queryPattern.exec(inputArr[i])
    }

    for (let [key, value] of currentObjects) {
      let currentObjectValues = value.join(', ')
      resultString += `${key}=[${currentObjectValues}]`
    }

    console.log(resultString)
  }
}

// solve([
//   'foo=%20foo&value=+val&foo+=5+%20+203',
//   'foo=poo%20&value=valley&dog=wow+',
//   'url=https://softuni.bg/trainings/coursesinstances/details/1070',
//   'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
// ])

// solve([
//   'field=value1&field=value2&field=value3',
//   'http://example.com/over/there?name=ferret'
// ])
