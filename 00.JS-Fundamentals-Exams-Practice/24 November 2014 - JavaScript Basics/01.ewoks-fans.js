function solve (inputArr) {
  let birthdates = []
  let maxDate = new Date('January 1, 2015')
  let breakPoint = new Date('"May 25, 1973')
  let minDate = new Date('January 1, 1900')
  let hasHater = false
  let hasFan = false

  for (let i = 0; i < inputArr.length; i++) {
    let dateArgs = inputArr[i].split('.')
    let day = parseInt(dateArgs[0])
    let month = parseInt(dateArgs[1])
    let year = parseInt(dateArgs[2])

    let currentDate = new Date(year, month - 1, day)

    if (currentDate > minDate && currentDate < maxDate) {
      birthdates.push(currentDate)
      if (currentDate > breakPoint) {
        hasFan = true
      } else if (currentDate <= breakPoint) {
        hasHater = true
      }
    }
  }

  birthdates.sort((a, b) => a.getTime() - b.getTime())

  if (hasFan && hasHater) {
    console.log(`The biggest fan of ewoks was born on ${birthdates[birthdates.length - 1].toDateString()}`)
    console.log(`The biggest hater of ewoks was born on ${birthdates[0].toDateString()}`)
  } else if (hasFan) {
    console.log(`The biggest fan of ewoks was born on ${birthdates[birthdates.length - 1].toDateString()}`)
  } else if (hasHater) {
    console.log(`The biggest hater of ewoks was born on ${birthdates[0].toDateString()}`)
  }
}

// solve([
//   '22.03.2014',
//   '17.05.1933',
//   '10.10.1954'
// ])

// solve([
//   '22.03.1700',
//   '01.07.2020'
// ])

// solve(['22.03.2000'])
