function solve (arr) {
  let regex = /^([a-zA-Z0-9]+)@([a-z]+).([a-z]+)$/g
  for (let i = 0; i < arr.length; i++) {
    if (regex.exec(arr[i])) {
      console.log('Valid')
    } else {
      console.log('Invalid')
    }
  }
}

// solve(['valid@email.bg'])
// solve(['invalid@emai1.bg'])
