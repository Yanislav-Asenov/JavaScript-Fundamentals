function solve (arr) {
  let words = new Set()

  for (let i = 0; i < arr.length; i++) {
    let currentLineWords = arr[i].toLowerCase().split(/[^_a-zA-Z0-9]/g).filter(x => x)
    for (let word of currentLineWords) {
      words.add(word)
    }
  }

  let resultArr = Array.from(words)
  console.log(resultArr.join(', '))
}

// solve([
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
//   'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
//   'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
//   'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
//   'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
//   'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
//   'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
// ])
