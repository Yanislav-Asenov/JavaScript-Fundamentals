function solve ([startNum, endNum]) {
  [startNum, endNum] = [startNum, endNum].map(Number)

  let fibonacciNumbers = [1, 1]
  let previousNumber = -1

  for (let i = 1; i <= endNum; i++) {
    let currentNumber = fibonacciNumbers[i] + fibonacciNumbers[i - 1]
    fibonacciNumbers.push(currentNumber)
    previousNumber = currentNumber

    if (currentNumber > endNum) {
      break
    }
  }

  let html = '<table>\n'
  html += '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n'
  for (let i = startNum; i <= endNum; i++) {
    let currentNum = i
    let currentNumPow = currentNum * currentNum

    if (fibonacciNumbers.indexOf(currentNum) > -1) {
      html += `<tr><td>${currentNum}</td><td>${currentNumPow}</td><td>yes</td></tr>\n`
    } else {
      html += `<tr><td>${currentNum}</td><td>${currentNumPow}</td><td>no</td></tr>\n`
    }
  }

  html += '</table>'

  console.log(html)
}

// solve([2, 6])
// solve([55, 56])
