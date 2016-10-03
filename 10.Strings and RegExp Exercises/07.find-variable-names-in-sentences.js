function  solve (arr) {
  let pattern = /_([a-zA-Z0-9]+)/g
  let text = arr.join('')
  let result = []
  let match = pattern.exec(text)

  while (match) {
    result.push(match[1])
    match = pattern.exec(text)
  }

  console.log(result.join(','))
}

// solve(['The _id and _age variables are both integers.'])
