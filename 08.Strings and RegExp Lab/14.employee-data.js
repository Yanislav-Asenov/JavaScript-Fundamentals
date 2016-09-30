function solve (arr) {
  let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9- ]+)$/

  let employees = []
  for (let line of arr) {
    let match = regex.exec(line)

    if (match) {
      employees.push({
        name: match[1],
        salary: match[2],
        position: match[3]
      })
    }
  }

  for (let employee of employees) {
    console.log(`Name: ${employee.name}`)
    console.log(`Position: ${employee.position}`)
    console.log(`Salary: ${employee.salary}`)
  }
}

// solve([
//   'Isacc - 1000 - CEO',
//   'Ivan - 500 - Employee',
//   'Peter - 500 - Employee'
// ])


// solve([
//   'Jonathan - 2000 - Manager',
//   'Peter- 1000- Chuck',
//   'George - 1000 - Team Leader'
// ])
