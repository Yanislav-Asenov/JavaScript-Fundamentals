function solve (inputArr) {
  let pattern = /<tr><td>[a-zA-Z]+?<\/td><td>(\-*\d+[.]*?\d*|\-)<\/td><td>(\-*\d+[.]*?\d*|\-)<\/td><td>(\-*\d+[.]*?\d*|\-)<\/td><\/tr>/

  let firstStore = 0
  let secondStore = 0
  let thirdStore = 0
  let maxSum = -9999999999

  for (let i = 0; i < inputArr.length; i++) {
    let match = pattern.exec(inputArr[i])

    if (!match) continue

    let firstStoreNum = Number(match[1])
    let secondStoreNum = Number(match[2])
    let thirdStoreNum = Number(match[3])
    let currentNumbers = []
    let currentSum = 0

    if (firstStoreNum) {
      currentNumbers['firstNumber'] = firstStoreNum
    } else {
      currentNumbers['firstNumber'] = '-'
    }
    if (secondStoreNum) {
      currentNumbers['secondNumber'] = secondStoreNum
    } else {
      currentNumbers['secondNumber'] = '-'
    }
    if (thirdStoreNum) {
      currentNumbers['thirdNumber'] = thirdStoreNum
    } else {
      currentNumbers['thirdNumber'] = '-'
    }

    for (let index in currentNumbers) {
      if (currentNumbers[index] === '-') continue

      currentSum += currentNumbers[index]
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
      firstStore = match[1]
      secondStore = match[2]
      thirdStore = match[3]
    }
  }

  let resultNumbers = [firstStore, secondStore, thirdStore].filter(x => x !== '-' && x)
  if (resultNumbers.length === 0) {
    console.log('no data')
  } else {
    console.log(`${maxSum} = ${resultNumbers.join(' + ')}`)
  }
}

// solve([
//   '<table>',
//   '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//   '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
//   '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
//   '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
//   '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
//   '</table>'
// ])

// solve([
//   '<table>',
//   '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//   '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
//   '</table>'
// ])


// solve([
//   '<table>',
//   '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
//   '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
//   '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
//   '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
//   '</table>'
// ])
