function solve (inputArr) {
  let resultArr = []
  for (let i = 0; i < inputArr.length; i++) {
    let lineArgs = inputArr[i].split(':').filter(x => x).map(x => x.trim())
    let currentProductName = lineArgs[0]
    let currentProductPrice = Number(lineArgs[1])
    let letter = currentProductName[0]
    let currentObjectIndex = getLetterObjectIndex(letter, resultArr)

    if (!resultArr[currentObjectIndex] && currentObjectIndex !== 0) {
      resultArr.push({
        letter: letter,
        products: []
      })
      currentObjectIndex = resultArr.length - 1
    }

    resultArr[currentObjectIndex].products.push({
      name: currentProductName,
      price: currentProductPrice
    })
  }

  for (let index in resultArr) {
    resultArr[index].products.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }

  resultArr.sort((a, b) => {
    return a.letter.localeCompare(b.letter)
  })

  for (let index in resultArr) {
    console.log(resultArr[index].letter)
    for (let product of resultArr[index].products) {
      console.log(`  ${product.name}: ${product.price}`)
    }
  }

  function getLetterObjectIndex (letter, resultArr) {
    for (let i = 0; i < resultArr.length; i++) {
      if (letter === resultArr[i].letter) {
        return i
      }
    }

    return false
  }
}

// solve([
//   'Appricot : 20.4',
//   'Fridge : 1500',
//   'TV : 1499',
//   'Deodorant : 10',
//   'Boiler : 300',
//   'Apple : 1.25',
//   'Anti-Bug Spray : 15',
//   'T-Shirt : 10'
// ])
