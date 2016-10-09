function solve (inputArr) {
  let courses = {}
  for (let i = 0; i < inputArr.length; i++) {
    let courseArgs = inputArr[i].split('|').map(x => x.trim())
    let studentName = courseArgs[0]
    let courseName = courseArgs[1]
    let studentGrade = Number(courseArgs[2])
    let visits = Number(courseArgs[3])

    if (!courses[courseName]) {
      courses[courseName] = {
        avgGrade: 0,
        avgVisits: 0,
        visits: 0,
        visitsCount: 0,
        gradesSum: 0,
        gradesCount: 0,
        students: []
      }
    }

    if (courses[courseName].students.indexOf(studentName) === -1) {
      courses[courseName].students.push(studentName)
    }

    courses[courseName].gradesSum += studentGrade
    courses[courseName].gradesCount++
    courses[courseName].visits += visits
    courses[courseName].visitsCount++
    courses[courseName].avgGrade = courses[courseName].gradesSum / courses[courseName].gradesCount
    courses[courseName].avgVisits = courses[courseName].visits / courses[courseName].visitsCount
  }

  for (let index in courses) {
    courses[index].students.sort()
  }

  let sortedKeys = Object.keys(courses).sort()
  let resultObject = {}

  for (let i = 0; i < sortedKeys.length; i++) {
    let avgGrade = Number(courses[sortedKeys[i]].avgGrade.toFixed(2))
    let avgVisits = Number(courses[sortedKeys[i]].avgVisits.toFixed(2))
    let students = courses[sortedKeys[i]].students
    resultObject[sortedKeys[i]] = {
      avgGrade: avgGrade,
      avgVisits: avgVisits,
      students: students
    }
  }

  console.log(JSON.stringify(resultObject))
}

// solve([
//   'Peter Nikolov | PHP  | 5.50 | 8',
//   'Maria Ivanova | Java | 5.83 | 7',
//   'Ivan Petrov   | PHP  | 3.00 | 2',
//   'Ivan Petrov   | C#   | 3.00 | 2',
//   'Peter Nikolov | C#   | 5.50 | 8',
//   'Maria Ivanova | C#   | 5.83 | 7',
//   'Ivan Petrov   | C#   | 4.12 | 5',
//   'Ivan Petrov   | PHP  | 3.10 | 2',
//   'Peter Nikolov | Java | 6.00 | 9'
// ])
