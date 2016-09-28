function solve (inputNumbers) {
  inputNumbers = inputNumbers.map(Number)

  agregate(inputNumbers, 0, (a, b) => a + b)
  agregate(inputNumbers, 0, (a, b) => a + 1 / b)
  agregate(inputNumbers, '', (a, b) => a + b)

  function agregate (arr, initialValue, func) {
    let result = initialValue
    for (let number of arr) {
      result = func(result, number)
    }
    console.log(result)
  }
}

// solve(['1', '2', '3'])
