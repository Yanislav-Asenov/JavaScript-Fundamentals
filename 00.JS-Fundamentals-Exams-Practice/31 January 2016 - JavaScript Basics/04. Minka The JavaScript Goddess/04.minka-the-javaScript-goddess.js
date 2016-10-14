function solve (arr) {
  let data = []


  for (let i = 0; i < arr.length; i++) {
    let inputArgs = arr[i].split('&')
    let name = inputArgs[0].trim()
    let type = inputArgs[1].trim()
    let taskNumber = 'Task ' + inputArgs[2].trim()
    let score = Number(inputArgs[3].trim())
    let linesOfCode = Number(inputArgs[4].trim())

    let dataIndex = getDataIndexByNumber(taskNumber, data)
    if (!data[dataIndex]) {
      data.push({
        'taskNumber': taskNumber,
        'tasks': [],
        'average': 0,
        'lines': 0,
        'totalScore': 0
      })
      dataIndex = data.length - 1
    }

    data[dataIndex].tasks.push({
      'name': name,
      'type': type
    })
    data[dataIndex].lines += linesOfCode
    data[dataIndex].totalScore += score
    data[dataIndex].average = Number((data[dataIndex].totalScore / data[dataIndex].tasks.length).toFixed(2))
  }


  data.sort((a, b) => {
    if (a.average !== b.average) {
      return a.average < b.average
    } else if (a.lines !== b.lines) {
      return a.lines > b.lines
    } else {
      return 0
    }
  })

  for (let index in data) {
    data[index].tasks.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }


  let resultData = {}

  for (let index in data) {
    resultData[data[index].taskNumber] = {
      'tasks': data[index].tasks,
      'average': data[index].average,
      'lines': data[index].lines
    }
  }

  console.log(JSON.stringify(resultData))

  function getDataIndexByNumber (dataNumber, data) {
    for (let index in data) {
      if (data[index].taskNumber === dataNumber) {
        return index
      }
    }
  }
}

// solve([
//   'Array Matcher & strings & 4 & 100 & 38',
//   'Magic Wand & draw & 3 & 100 & 15',
//   'Dream Item & loops & 2 & 88 & 80',
//   'Knight Path & bits & 5 & 100 & 65',
//   'Basket Battle & conditionals & 2 & 100 & 120',
//   'Torrent Pirate & calculations & 1 & 100 & 20',
//   'Encrypted Matrix & nested loops & 4 & 90 & 52',
//   'Game of bits & bits & 5 &  100 & 18',
//   'Fit box in box & conditionals & 1 & 100 & 95',
//   'Disk & draw & 3 & 90 & 15',
//   'Poker Straight & nested loops & 4 & 40 & 57',
//   'Friend Bits & bits & 5 & 100 & 81'
// ])
