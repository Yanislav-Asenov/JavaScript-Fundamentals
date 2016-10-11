function solve (inputArr) {
  let billAmount = Number(inputArr[0])
  let mood = inputArr[1]

  let tip = 0

  if (mood === 'happy') {
    tip = billAmount * 0.1
  } else if (mood === 'married') {
    tip = billAmount * 0.0005
  } else if (mood === 'drunk') {
    let tempTip = billAmount * 0.15
    let n = Number(tempTip.toString()[0])
    tip = Math.pow(tempTip, n)
  } else {
    tip = billAmount * 0.05
  }

  tip = tip.toFixed(2)
  console.log(tip)
}

// solve([
//   '200',
//   'drunk'
// ])

// solve(['120.44', 'happy'])
// solve(['1230.83', 'drunk'])
// solve(['716.00', 'bored'])
