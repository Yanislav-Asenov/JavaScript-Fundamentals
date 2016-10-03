function solve (arr) {
  let regex = /www\.[a-zA-Z0-9-]+?\.[a-z]+([.]{1}[a-z]+)*/g
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    let match = arr[i].match(regex)
    if (match) {
      if (resultArr.indexOf(match[0]) === -1) {
        resultArr.push(match[0])
      }
    }
  }
  console.log(resultArr.join('\n'))
}

// solve([
//   'Join WebStars now for free, at www.web-stars.com',
//   'You can also support our partners:',
//   'Internet - www.internet.com',
//   'WebSpiders - www.webspiders101.com',
//   'Sentinel - www.sentinel.-ko'
// ])

// solve([
//   'Need information about cheap hotels in London?',
//   'You can check us at www.london-hotels.co.uk!',
//   'We provide the best services in London.',
//   'Here are some reviews in some blogs:',
//   '"London Hotels are awesome!" - www.indigo.bloggers.com',
//   '"I am very satisfied with their services" - ww.ivan.bg',
//   '"Best Hotel Services!" - www.rebel21.sedecrem.moc www.london-hotels.co.uk',
//   'www.indigo.bloggers.com',
//   'www.rebel21.sedecrem.moc'
// ])
