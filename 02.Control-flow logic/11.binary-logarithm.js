function solve(arr) {
    for(let num of arr) {
        console.log(Math.log2(num));
    }
}

solve(['1024', '1048576', '256', '1', '2']);