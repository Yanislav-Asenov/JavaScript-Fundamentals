function solve ([count]) {
  count = Number(count)
  for (let row = 1; row <= count; row++) {
    console.log('*'.repeat(row))
  }

  for (let row = count - 1; row >= 0; row--) {
    console.log('*'.repeat(row))
  }
}

// solve(['5'])
