function solve ([dayOfWeek]) {
  let daysOfTheWeek = { 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7 }

  if (daysOfTheWeek[dayOfWeek]) {
    console.log(daysOfTheWeek[dayOfWeek])
  } else {
    console.log('error')
  }
}

// solve(['Monday'])
