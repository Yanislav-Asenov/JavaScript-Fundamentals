function solve (arr) {
  let regex = /([a-zA-Z\s]+)\s*-\s*([a-zA-Z]+)\s*:\s*([\d]+)/
  let examContainer = {}

// Collect exams and their students
  for (let i = 0; i < arr.length; i++) {
    let currentExamArgs = regex.exec(arr[i].trim())
    let firstArgs = arr[i].trim().split('-')
    let studentName = firstArgs[0].trim()
    let secondArgs = firstArgs[1].trim().split(':')
    let examName = secondArgs[0].trim()
    let studentResult = Number(secondArgs[1].trim())
    if (!currentExamArgs) {
      continue
    }

    // let studentName = currentExamArgs[1].trim()
    // let examName = currentExamArgs[2].trim()
    // let studentResult = Number(currentExamArgs[3].trim())

    if (studentResult > 400 || studentResult < 0) {
      continue
    }

    if (!examContainer[examName]) {
      examContainer[examName.toString()] = []
    }

    AddOrUpdateStudent(studentName, examContainer[examName], studentResult)
  }

// Sort descending by student result
  for (let index in examContainer) {
    examContainer[index].sort((a, b) => {
      if (a.result !== b.result) {
        return a.result < b.result
      } else if (a.makeUpExams !== b.makeUpExams) {
        return a.makeUpExams > b.makeUpExams
      } else {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        // names must be equal
        return 0
      }

      // if (a.result === b.result && a.makeUpExams !== b.makeUpExams) {
      //   // if result are equal compare make up exams
      //   return a.makeUpExams < b.makeUpExams
      // } else if (a.result !== b.result) {
      //   // compare result descending
      //   return a.result < b.result
      // } else {
      //   let nameA = a.name.toUpperCase() // ignore upper and lowercase
      //   let nameB = b.name.toUpperCase() // ignore upper and lowercase
      //   // compare by name alphabetically
      // }
    })
  }

  let result = JSON.stringify(examContainer)
  console.log(result)

  function AddOrUpdateStudent (studentName, exam, studentResult) {
    for (let i = 0; i < exam.length; i++) {
      if (exam[i].name === studentName) {
        exam[i].makeUpExams++
        if (exam[i].result < studentResult) {
          exam[i].result = studentResult
        }
        return
      }
    }

    exam.push({
      name: studentName,
      result: studentResult,
      makeUpExams: 0
    })
  }
}

// solve([
//   'Peter Jackson - Java : 350',
//   'Jane - JavaScript : 200',
//   'Jane     -    JavaScript :     400',
//   'Simon Cowell - PHP : 100',
//   'Yani -PHP: 400',
//   'Ani -PHP: 400',
//   'The rock - PHP : 350',
//   'The rock - PHP : 200',
//   'The smock - PHP : 350',
//   'The smock - PHP : 200',
//   'The rock - PHP : 350'
// ])

// solve([
//   'Peter Jackson - Java : 400',
//   'Jane - JavaScript : 200',
//   'Jane     -    JavaScript :     400',
//   'A - PHP : 400',
//   'B-PHP: 400',
//   'B-PHP: 400',
//   'B-PHP: 333',
//   'B-PHP: 222',
//   'B-PHP: 111',
//   'C - PHP : 400',
//   'A - PHP : 300'
// ])

// solve([
//   'Simon Cowell - PHP : 100',
//   'Simon Cowell-PHP: 500',
//   'Peter Jackson - PHP: 350',
//   'Simon Cowell - PHP : 400'
// ])
