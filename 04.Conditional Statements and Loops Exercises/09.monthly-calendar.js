function solve ([day, month, year]) {
  [day, month, year] = [day, month, year].map(Number)
  let currentDate = new Date(year, month, 0)
  let currentMonthFirstDayOfWeek = new Date(year, month - 1, 1).getDay()
  let currentMonthLastDay = currentDate.getDate()
  let previousMonthDaysToPrint = currentMonthFirstDayOfWeek - 1
  let previousMonth = new Date(year, month - 1, 0)
  let previousMonthLastDay = previousMonth.getDate()
  let previousMonthStartDay = previousMonthLastDay - previousMonthDaysToPrint
  let currentMonthFirstDaysCount = 7 - previousMonth.getDay() - 1

  console.log(`<table>`)
  console.log(`  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`)

  printFirstRow(previousMonthStartDay, previousMonthLastDay, currentMonthFirstDaysCount, day, currentMonthLastDay)

  function printFirstRow (previousMonthStartDay, previousMonthLastDay, currentMonthFirstDaysCount, currentDay, currentMonthLastDay) {
    let dayOfWeek = 1
    let result = '  <tr>'
    // Concatenate previous month days
    for (let i = previousMonthStartDay; i <= previousMonthLastDay; i++) {
      result += `<td class="prev-month">${i}</td>`
      dayOfWeek++
    }

    let day = 1
    // Concat current month firstDays
    for (let i = dayOfWeek; i <= 7; i++) {
      if (day === currentDay) {
        result += `<td class="today">${day++}</td>`
      } else {
        result += `<td>${day++}</td>`
      }
    }

    result += '</tr>'
    console.log(result)
    let isMonthOver = false
    for (let i = 1; i <= 4; i++) {
      result = '  <tr>'
      for (let j = 1; j <= 7; j++) {
        if (day === currentDay) {
          result += `<td class="today">${day++}</td>`
        } else {
          result += `<td>${day++}</td>`
        }
        if (day > currentMonthLastDay && i === 4) {
          let day = 1
          while (j < 7) {
            result += `<td class="next-month">${day++}</td>`
            j++
          }
          isMonthOver = true
        }
      }
      result += '</tr>'
      console.log(result)
    }
    if (isMonthOver) {
      console.log('</table>')
      return
    }
    dayOfWeek = 1
    let daysLeftToPrint = currentMonthLastDay - day
    result = '  <tr>'
    for (let i = 0; i <= daysLeftToPrint; i++) {
      if (day === currentDay) {
        result += `<td class="today">${day++}</td>`
      } else {
        result += `<td>${day++}</td>`
      }
      dayOfWeek++
    }
    // while (day < currentMonthLastDay) {
    //   if (day === currentDay) {
    //     result += `<td class="today">${day++}</td>`
    //   } else {
    //     result += `<td>${day++}</td>`
    //   }
    //   dayOfWeek++
    // }

    let nextMonthDaysToPrint = 7 - dayOfWeek + 1
    day = 1
    for (let i = 0; i < nextMonthDaysToPrint; i++) {
      result += `<td class="next-month">${day++}</td>`
    }
    result += '</tr>'
    console.log(result)
    console.log('</table>')
  }
}

solve(['4', '9', '2016'])
