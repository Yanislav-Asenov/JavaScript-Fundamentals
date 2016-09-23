// function solve ([day, month, year]) {
//   [day, month, year] = [day, month, year].map(Number)
//   let currentDate = new Date(year, month - 1, day + 1)
//   let currentDay = day
//   let firstDayOfMonth = new Date(year, month - 1, 1).getDay()

//   console.log(`<table>
//   <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`)

//   printPreviousMonthDays(currentDate, firstDayOfMonth)

//   function printPreviousMonthDays (currentDate, firstDayOfMonthAsWeekDay, currentDay) {
//     // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
//     let lastDayOfPrevMoth = previousMonth.getDate()
//     let startDayOfPevMonth = previousMonth.getDate() - firstDayOfMonth + 1
//     let thisMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

//     let resultString = '  <tr>'
//     for (let i = startDayOfPevMonth; i <= lastDayOfPrevMoth; i++) {
//       resultString += `<td class="prev-month">${i}</td>`
//     }

//     let dayCounter = 1
//     for (let i = firstDayOfMonthAsWeekDay; i < 7; i++) {
//       if (dayCounter === currentDay) {
//         resultString += `<td class="today">${dayCounter}</td>`
//       } else {
//         resultString += `<td>${dayCounter++}</td>`
//       }
//     }
//     resultString += '</tr>'
//     console.log(resultString)

//     for (let i = 1; i <= 3; i++) {
//       let dayOfWeekCounter = 1

//       resultString = '  <tr>'
//       while (true) {
//         resultString += `<td>${dayCounter++}</td>`
//         dayOfWeekCounter++

//         if (dayOfWeekCounter === 8) {
//           break
//         }
//       }
//       resultString += '</tr>'
//       console.log(resultString)
//     }

//     let lastDayOfMonthDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1).getDay()

//     let numberOfDaysOfNextMonth = 7 - lastDayOfMonthDayOfWeek

//     resultString = '  <tr>'
//     for (let i = 1; i <= lastDayOfMonthDayOfWeek; i++) {
//       resultString += `<td>${dayCounter++}</td>`
//     }

//     let nextMonthDaysCounter = 1
//     for (let i = 0; i < numberOfDaysOfNextMonth; i++) {
//       resultString += `<td class="next-month">${nextMonthDaysCounter++}</td>`
//     }

//     resultString += '</tr>'
//     console.log(resultString)
//     console.log('</table>')
//   }
// }
