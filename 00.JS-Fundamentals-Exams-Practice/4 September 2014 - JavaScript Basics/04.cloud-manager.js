function solve (inputArr) {
  let filesInfo = new Map()

  for (let i = 0; i < inputArr.length; i++) {
    let currentFileArgs = inputArr[i].split(' ').filter(x => x).map(x => x.trim())
    let fileName = currentFileArgs[0]
    let fileExtension = currentFileArgs[1]
    let fileSize = Number(currentFileArgs[2].substring(0, currentFileArgs[2].length - 2))

    if (!filesInfo.has(fileExtension)) {
      filesInfo.set(fileExtension, { totalSize: 0, files: [] })
    }

    filesInfo.get(fileExtension).totalSize += fileSize
    filesInfo.get(fileExtension).files.push(fileName)
  }

  let sortedKeys = []

  for (let [key] of filesInfo) {
    sortedKeys.push(key)
  }

  sortedKeys.sort()

  let resultObject = {}

  for (let i = 0; i < sortedKeys.length; i++) {
    let currentKey = sortedKeys[i]

    resultObject[currentKey] = {
      files: filesInfo.get(currentKey).files.sort((a, b) => a > b),
      memory: filesInfo.get(currentKey).totalSize.toFixed(2)
    }
  }

  console.log(JSON.stringify(resultObject))
}

// solve([
//   'sentinel .exe 15MB',
//   'zoomIt .msi 3MB',
//   'skype .exe 45MB',
//   'trojanStopper .bat 23MB',
//   'kindleInstaller .exe 120MB',
//   'setup .msi 33.4MB',
//   'winBlock .bat 1MB'
// ])


// solve([
//   'eclipse .tar.gz 198.00MB',
//   'uTorrent .gyp 33.02MB',
//   'nodeJS .gyp 14MB',
//   'nakov-naked .jpeg 3MB',
//   'gnuGPL .pdf 5.6MB',
//   'skype .tar.gz 66MB',
//   'selfie .jpeg 7.24MB',
//   'myFiles .tar.gz 783MB'
// ])
