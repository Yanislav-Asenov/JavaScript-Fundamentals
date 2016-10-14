function solve (input) {
  let html = input.join('\n')
  let regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g
  let match = regex.exec(html)
  while (match) {
    let hrefValue = match[3]
    if (hrefValue === undefined) {
      hrefValue = match[4]
    }
    if (hrefValue === undefined) {
      hrefValue = match[5]
    }
    console.log(hrefValue)
    match = regex.exec(html)
  }
}
