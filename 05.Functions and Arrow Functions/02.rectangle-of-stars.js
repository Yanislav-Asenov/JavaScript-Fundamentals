function solve (count) {
  count = Number(count)

  for (let row = 1; row <= count; row++) {
    console.log('*' + ' *'.repeat(count - 1))
  }
}

// solve(['5'])
