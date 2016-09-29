function solve ([num]) {
  num = Number(num)
  let feet = parseInt(num / 12)
  let inches = num % 12
  console.log(`${feet}'-${inches}"`)
}

solve(['36'])
