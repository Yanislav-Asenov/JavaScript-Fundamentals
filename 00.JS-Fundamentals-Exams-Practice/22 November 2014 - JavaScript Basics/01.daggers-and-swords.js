function solve (inputArr) {
  let html = '<table border="1">\n'
  html += '<thead>\n'
  html += '<tr><th colspan="3">Blades</th></tr>\n'
  html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n'
  html += '</thead>\n'
  html += '<tbody>\n'

  for (let i = 0; i < inputArr.length; i++) {
    let currentBladeLength = parseInt(inputArr[i])
    let bladeType = currentBladeLength > 40 ? 'sword' : 'dagger'
    let typeOfApplication = ''

    if (currentBladeLength <= 10) {
      continue
    }

    let fingerInexes = currentBladeLength % 5

    switch (fingerInexes) {
      case 0:
        typeOfApplication = '*rap-poker'
        break
      case 1:
        typeOfApplication = 'blade'
        break
      case 2:
        typeOfApplication = 'quite a blade'
        break
      case 3:
        typeOfApplication = 'pants-scraper'
        break
      case 4:
        typeOfApplication = 'frog-butcher'
        break
    }

    html += `<tr><td>${currentBladeLength}</td><td>${bladeType}</td><td>${typeOfApplication}</td></tr>\n`
  }


  html += '</tbody>\n'
  html += '</table>'

  console.log(html)
}

// solve([
//   '17.8',
//   '19.4',
//   '13',
//   '55.8',
//   '126.96541651',
//   '3'
// ])
