function solve (arr) {
  let match = arr.shift()
  arr = arr.join(' ')
  let count = 0
  while (arr.indexOf(match) > -1) {
    arr = arr.substring(arr.indexOf(match) + 1)
    count++
  }

  console.log(count)
}

solve(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'])
// solve(['the', 'The quick brown fox jumps over the lay dog.'])
