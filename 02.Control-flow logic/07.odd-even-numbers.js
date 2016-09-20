function solve(arr) {
    let number = Math.abs(Number(arr[0]));

    if(number % 2 === 0) {
        console.log('even');
    } else if (number % 2 === 1) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}

solve(['-3'])
