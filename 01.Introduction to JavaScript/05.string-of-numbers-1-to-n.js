function solve(arr) {
    let endNum = Number(arr[0])
    let result = ''

    for(let i = 1; i <= endNum; i++) {
        result += i
    }

    console.log(result)
}

solve(['11'])
