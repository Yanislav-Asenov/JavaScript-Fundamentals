function solve ([num]) {
  while (true) {
    if (getAverageValueOfDigits(num) > 5) {
      break
    }

    num += '9'
  }

  console.log(num)

  function getAverageValueOfDigits (num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i])
    }

    return sum / num.length
  }
}

// solve(['5835'])
