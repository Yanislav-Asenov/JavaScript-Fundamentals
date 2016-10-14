function solve (arr) {
  var banList = arr.pop().split(' ')
  var text = arr.join('\n')

  var codePattern = /<code>[\s\S]+?<\/code>/g
  var codeBlocks = []
  var matchingCode = codePattern.exec(text)
  while (matchingCode) {
    var codeBlock = matchingCode[0]
    var codeReplacer = new Array(codeBlock.length).join('#')
    text = text.replace(codeBlock, codeReplacer)
    codeBlocks.push({
      original: codeBlock,
      replacedWith: codeReplacer
    })
    matchingCode = codePattern.exec(text)
  }

  banList.forEach(function (entry) {
    var censoredUserPattern = new RegExp('(#\\b' + entry + ')\\b', 'g')
    var match = censoredUserPattern.exec(text)
    while (match) {
      var censoredName = match[1]
      var replacer = new Array(censoredName.length).join('*')
      text = text.replace(censoredName, replacer)
      match = censoredUserPattern.exec(text)
    }
  })

  var validUserPattern = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g
  var linkOpeningTag = '<a href="/users/profile/show/'
  var linkClosingTag = '</a>'
  text = text.replace(validUserPattern, linkOpeningTag + '$1">$1' + linkClosingTag)

  codeBlocks.forEach(function (codeBlock) {
    text = text.replace(codeBlock.replacedWith, codeBlock.original)
  })

  console.log(text)
}
