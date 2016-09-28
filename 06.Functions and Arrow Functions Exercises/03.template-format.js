function solve (arr) {
  console.log('<?xml version="1.0" encoding="UTF-8"?>')
  console.log('<quiz>')
  for (let i = 0; i < arr.length - 1; i += 2) {
    let question = arr[i]
    let answer = arr[i + 1]
    console.log('  <question>')
    console.log(`    ${question}`)
    console.log('  </question>')
    console.log('  <answer>')
    console.log(`    ${answer}`)
    console.log('  </answer>')
  }
  console.log('</quiz>')
}

// solve(['Who was the forty-second president of the U.S.A.?', 'William Jefferson Clinton'])
