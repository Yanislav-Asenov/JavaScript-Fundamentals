function solve (arr) {
  let human = {}

  for (let i = 0; i < arr.length - 1; i += 2) {
    let property = arr[i]
    let value = arr[i + 1]
    human[property] = value
  }

  console.log(human)
}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male'])
