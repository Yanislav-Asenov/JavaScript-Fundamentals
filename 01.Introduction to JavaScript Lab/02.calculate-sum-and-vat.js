function solve (arr) {
  let sum = 0
  for (let number of arr) {
    sum += Number(number)
  }

  let vat = sum * 0.2
  let total = sum * 1.20

  console.log('sum = ' + sum)
  console.log('VAT = ' + vat)
  console.log('total = ' + total)
}

solve(['1.20', '2.60', '3.50'])
