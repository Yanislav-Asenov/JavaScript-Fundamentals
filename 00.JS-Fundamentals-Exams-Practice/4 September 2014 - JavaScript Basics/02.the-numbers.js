function solve (inputArr) {
  let numbers = inputArr[0].split(/[^\d]/).filter(x => x).map(Number)

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString(16).toUpperCase()
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length < 4) {
      let numberOfZeroes = 4 - numbers[i].length
      numbers[i] = '0'.repeat(numberOfZeroes) + numbers[i]
    }
    numbers[i] = '0x' + numbers[i]
  }

  console.log(numbers.join('-'))
}

// solve(['5tffwj(//*7837xzc2---34rlxXP%$”.'])

// solve(['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312'])
