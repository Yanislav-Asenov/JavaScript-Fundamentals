function solve (inputArr) {
  let usernames = new Set()
  for (let i = 0; i < inputArr.length; i++) {
    usernames.add(inputArr[i])
  }

  let resultArr = Array.from(usernames)
  resultArr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      return a.localeCompare(b)
    }
  })

  console.log(resultArr.join('\n'))
}

// solve([
//   'Ashton',
//   'Kutcher',
//   'Ariel',
//   'Lilly',
//   'Keyden',
//   'Aizen',
//   'Billy',
//   'Braston'
// ])

// solve([
//   'Denise',
//   'Ignatius',
//   'Iris',
//   'Isacc',
//   'Indie',
//   'Dean',
//   'Donatello',
//   'Enfuego',
//   'Benjamin',
//   'Biser',
//   'Bounty',
//   'Renard',
//   'Rot'
// ])

// solve(['bbb', 'ccccc', 'a', '12'])
