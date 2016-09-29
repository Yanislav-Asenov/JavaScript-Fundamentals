function solve (arr) {
  let n = Number(arr[0])

  console.log(`<div class="chessboard">`)

  for (let row = 0; row < n; row++) {
    console.log(`<div>`)
    if (row % 2 === 0) {
      for (let col = 0; col < n; col++) {
        if (col % 2 === 0) {
          console.log(`<span class="black"></span>`)
        } else {
          console.log(`<span class="white"></span>`)
        }
      }
    } else {
      for (let col = 0; col < n; col++) {
        if (col % 2 === 0) {
          console.log(`<span class="white"></span>`)
        } else {
          console.log(`<span class="black"></span>`)
        }
      }
    }
    console.log(`</div>`)
  }

  console.log(`</div>`)
}

solve(['3'])
