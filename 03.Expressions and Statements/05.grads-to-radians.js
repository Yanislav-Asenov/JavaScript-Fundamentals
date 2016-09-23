function solve (arr) {
  let grads = Number(arr[0])
  let degrees = grads * 0.9

  if (grads < 0) {
    console.log(360 + (degrees % 360))
  } else {
    console.log(degrees % 360)
  }
}

solve([400])
