function solve (arr) {
  let text = arr.shift()
  // let match = new RegExp(`${arr.join('|')}`, 'g')
  text = text.replace(new RegExp(`${arr.join('|')}`, 'g'), x => '-'.repeat(x.length))
  console.log(text)
}

// solve(['roses are red, violets are blue', ', violets are', 'red'])
