function solve (arr) {
  let name = arr.shift()
  let email = arr.shift()
  let phoneNumber = arr.shift()

  let namePattern = /<![a-zA-Z]+!>/
  let emailPattern = /<@[a-zA-Z]+@>/
  let phonePattern = /<\+[a-zA-Z]+\+>/

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(namePattern, name)
    arr[i] = arr[i].replace(emailPattern, email)
    arr[i] = arr[i].replace(phonePattern, phoneNumber)
  }

  for (let line of arr) {
    console.log(line)
  }
}

// solve([
//   'Pesho',
//   'pesho@softuni.bg',
//   '90-60-90',
//   'Hello, <!username!>!',
//   'Welcome to your Personal profile.',
//   'Here you can modify your profile freely.',
//   'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//   'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//   'Your current phone number is: <+number+>. Would you like to change that? (Y/N'
// ])
