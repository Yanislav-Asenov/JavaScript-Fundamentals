function solve ([input]) {
  let regex = /(-?[0-9][0-9]*\.?[0-9]*)\s*\*\s*(-?[0-9][0-9]*\.?[0-9]*)/g
  let match = regex.exec(input)
  while (match) {
    let a = Number(match[1])
    let b = Number(match[2])
    let result = a * b
    input = input.replace(match[0], result)
    match = regex.exec(input)
  }

  console.log(input)
}

// solve(['8Just text 14 with number5 in i7.'])
// solve(['Moar t3xt w1th 99 numbers in 17. C00l numb3rs 411 4rr0und.'])
// solve(['My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).'])
