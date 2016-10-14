function solve (arr) {
  let targetSequenceLength = Number(arr.pop())
  let elements = arr.join(' ').split(' ')
  let count = 1

  for (let i = 0; i < elements.length; i++) {
    let currentNumber = elements[i]
    let nextNumber = elements[i + 1]

    if (currentNumber === nextNumber) {
      count++
      if (count === targetSequenceLength) {
        let startIndex = i - targetSequenceLength + 2
        let endIndex = i + 1
        for (let j = startIndex; j <= endIndex; j++) {
          elements[j] = false
        }
        count = 1
      }
    } else {
      count = 1
    }
  }

  let elementsIndex = -1
  for (let row = 0; row < arr.length; row++) {
    let currentRowToPrint = []
    for (let col = 0; col < arr[row].split(' ').length; col++) {
      if (elements[++elementsIndex] !== false) {
        currentRowToPrint.push(elements[elementsIndex])
      }
    }

    if (currentRowToPrint.length > 0) {
      console.log(currentRowToPrint.join(' '))
    } else {
      console.log('(empty)')
    }
  }
}

// solve([
//   '3 3 3 2 5 9 9 9 9 1 2',
//   '1 1 1 1 1 2 5 8 1 1 7',
//   '7 7 1 2 3 5 7 4 4 1 2',
//   '2'
// ])

// solve([
//   '2 1 1 1',
//   '1 1 1',
//   '3 7 3 3 1',
//   '2'
// ])
