function solve (inputArr) {
  let courses = []
  let targetCourseName = inputArr.pop().trim()

  for (let i = 0; i < inputArr.length; i++) {
    let examArgs = inputArr[i].split(/\s+/).filter(x => x !== '')
    let studentName = examArgs[0]
    let courseName = examArgs[1]
    let examPoints = Number(examArgs[2])
    let bonusPoints = Number(examArgs[3])

    if (courses[courseName]) {
      courses[courseName].totalPoints += examPoints
      courses[courseName].examsCount++
    } else {
      courses[courseName] = {
        totalPoints: examPoints,
        examsCount: 1
      }
    }

    if (examPoints < 100) {
      console.log(`${studentName} failed at "${courseName}"`)
      continue
    }

    let coursePoints = (examPoints * 0.2) + bonusPoints
    coursePoints = Number(coursePoints.toFixed(2))
    let grade = ((coursePoints / 80) * 4) + 2
    grade = grade > 6 ? 6 : grade
    console.log(`${studentName}: Exam - "${courseName}"; Points - ${coursePoints}; Grade - ${grade.toFixed(2)}`)
  }

  let targetCourseAveragePoints = courses[targetCourseName].totalPoints / courses[targetCourseName].examsCount
  targetCourseAveragePoints = Number(targetCourseAveragePoints.toFixed(2))
  console.log(`"${targetCourseName}" average points -> ${targetCourseAveragePoints}`)
}

// solve([
//   'Pesho C#-Advanced 100 3',
//   'Gosho Java-Basics 157 3',
//   'Tosho HTML&CSS 317 12',
//   'Minka C#-Advanced 57 15',
//   'Stanka C#-Advanced 157 15',
//   'Kircho C#-Advanced 300 0',
//   'Niki C#-Advanced 400 10',
//   'C#-Advanced'
// ])
