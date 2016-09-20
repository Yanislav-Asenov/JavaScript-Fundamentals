function solve(arr) {
    let text = arr[0].toLowerCase()
    let letter = arr[1]

    let letterOccurrences = 0;
    for(let char of text) {
        if(letter === char) {
            letterOccurrences++
        }
    }

    console.log(letterOccurrences)
}

solve(['heLlo', 'l'])