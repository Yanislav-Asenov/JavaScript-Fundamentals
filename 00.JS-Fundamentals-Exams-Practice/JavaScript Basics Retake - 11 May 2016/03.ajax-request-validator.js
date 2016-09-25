function solve(arr) {
  let hashPattern = arr.pop()
  // arr = arr.join('\n')
  // arr += '\n'
  // let regex = /Method:\s(POST|GET|DELETE|PUT)\nCredentials: (Bearer|Basic)\s([a-zA-Z0-9]+)\nContent: ([a-zA-Z0-9.]+)\n/g
  let methodRegex = /Method:\s(POST|GET|DELETE|PUT)\n/
  let credentialsRegex = /Credentials: (Bearer|Basic)\s([a-zA-Z0-9]+)\n/
  let contentRegex = /Content: ([a-zA-Z0-9.]+)\n/

  for (let i = 0; i < arr.length - 2; i += 3) {
    let methodString = arr[i] + '\n'
    let credentialsString = arr[i + 1] + '\n'
    let contentString = arr[i + 2] + '\n'

    let method = methodRegex.exec(methodString)[1]
    let credentialsArgs = credentialsRegex.exec(credentialsString)
    let credentialsAuthorization = credentialsArgs[1]
    let credentialsBody = credentialsArgs[2]
    let content = contentRegex.exec(contentString)

    if (!method || !credentialsArgs || !content || !credentialsAuthorization || !credentialsBody) {
      console.log('Response-Code:400')
    } else {
      if (method !== 'GET' && credentialsAuthorization === 'Basic') {
        console.log(`Response-Method:${method}&Code:401`)
      } else if (!isAuthorizationTokenValid(hashPattern, credentialsBody)) {
        console.log(`Response-Method:${method}&Code:403`)
      } else {
        console.log(`Response-Method:${method}&Code:200&Header:${credentialsBody}`)
      }
    }
  }

  function isAuthorizationTokenValid (pattern, credentials) {
    let patternRegex = /(\d)([a-zA-Z])/g
    let match = patternRegex.exec(pattern)

    while (match) {
      let targetCount = Number(match[1])
      let targetLetters = match[2]

      let counter = 0
      for (let letter of credentials) {
        if (targetLetters === letter) {
          counter++
        }
      }

      if (counter === targetCount) {
        return true
      }

      match = patternRegex.exec(pattern)
    }

    return false
  }
}

// solve([
//   'Method: GET',
//   'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//   'Content: users.asd.1782452.278asd',
//   'Method: POST',
//   'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
//   'Content: Johnathan',
//   '2q'
// ])

// solve([
//   'Method: PUT',
//   'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//   'Content: users.asd/1782452$278///**asd123',
//   'Method: POST',
//   'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
//   'Content: Johnathan',
//   'Method: DELETE',
//   'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
//   'Content: This.is.a.sample.content',
//   '2e5g'
// ])
