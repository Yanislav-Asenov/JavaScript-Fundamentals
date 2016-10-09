function solve (inputArr) {
  let prices = inputArr.map(Number).map(x => x.toFixed(2)).map(Number)
  let previousNumber = prices.shift()
  let html = '<table>\n'
  html += '<tr><th>Price</th><th>Trend</th></tr>\n'
  html += `<tr><td>${parseFloat(previousNumber).toFixed(2)}</td><td><img src="fixed.png"/></td></td>\n`
  for (let i = 0; i < prices.length; i++) {
    let currentNumber = prices[i]

    if (currentNumber === previousNumber) {
      html += `<tr><td>${parseFloat(currentNumber).toFixed(2)}</td><td><img src="fixed.png"/></td></td>\n`
    } else if (currentNumber > previousNumber) {
      html += `<tr><td>${parseFloat(currentNumber).toFixed(2)}</td><td><img src="up.png"/></td></td>\n`
    } else {
      html += `<tr><td>${parseFloat(currentNumber).toFixed(2)}</td><td><img src="down.png"/></td></td>\n`
    }

    previousNumber = currentNumber
  }

  html += '</table>'

  console.log(html)
}

// solve([
//   '36.333',
//   '36.5',
//   '37.019',
//   '35.4',
//   '35',
//   '35.001',
//   '36.225'
// ])
