function solve ([day, month, year]) {
  [day, month, year] = [day, month, year].map(Number)
  month--
  day++

  let resultDate = new Date(year, month, 0)
  console.log(resultDate.getDate().toString())
}

solve(['17', '3', '2002'])
