function solve (arr) {
  let html = '<table>\n'
  for (let i = 0; i < arr.length; i++) {
    let object = JSON.parse(arr[i])
    html += '    <tr>\n'
    html += `        <td>${object.name}</td>\n`
    html += `        <td>${object.position}</td>\n`
    html += `        <td>${object.salary}</td>\n`
    html += '    <tr>\n'
  }
  html += '</table>'

  console.log(html)
}

// solve([
//   '{"name":"Pesho","position":"Promenliva","salary":100000}',
//   '{"name":"Teo","position":"Lecturer","salary":1000}',
//   '{"name":"Georgi","position":"Lecturer","salary":1000}'
// ])
