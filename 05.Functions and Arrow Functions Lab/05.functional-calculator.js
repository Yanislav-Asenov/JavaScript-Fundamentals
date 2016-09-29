function solve ([a, b, operator]) {
  [a, b] = [a, b].map(Number)

  let sum = (a, b) => {
    return a + b
  }

  let multiply = (a, b) => {
    return a * b
  }

  let divide = (a, b) => {
    return a / b
  }

  let subtract = (a, b) => {
    return a - b
  }

  switch (operator) {
    case '+':
      console.log(sum(a, b))
      break
    case '-':
      console.log(subtract(a, b))
      break
    case '*':
      console.log(multiply(a, b))
      break
    case '/':
      console.log(divide(a, b))
      break
  }
}

// solve(['2', '4', '+'])
