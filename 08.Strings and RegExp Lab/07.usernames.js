function solve (arr) {
  let usernames = []
  for (let i = 0; i < arr.length; i++) {
    let inputArgs = arr[i].split('@')
    let username = inputArgs[0] + '.'
    let domainArgs = inputArgs[1].split('.')
    for (let text of domainArgs) {
      username += text[0]
    }
    usernames.push(username)
  }

  console.log(usernames.join(', '))
}

// solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
