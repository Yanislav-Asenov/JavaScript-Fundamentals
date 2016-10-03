function  solve (arr) {
  let text = arr.join('')
  let pattern = /\d+/g
  let resultNumbers = text.match(pattern)
  console.log(resultNumbers.join(' '))
}

// solve([
//   'The300',
//   'What is that?',
//   'I think it’s the 3rd movie.',
//   'Lets watch it at 22:45'
// ])

// solve([
//   '123a456',
//   '789b987',
//   '654c321',
//   '0'
// ])

// solve([
//   'Let’s go11!!!11!',
//   'Okey!1!'
// ])
