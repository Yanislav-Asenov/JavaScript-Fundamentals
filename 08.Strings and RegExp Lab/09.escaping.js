function solve (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = htmlEscape(arr[i])
  }

  console.log('<ul>')
  for (let line of arr) {
    console.log(`  <li>${line}</li>`)
  }
  console.log('</ul>')

  function htmlEscape (text) {
    return text.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
  }
}

// solve(['<b>unescaped text</b>', 'normal text'])
