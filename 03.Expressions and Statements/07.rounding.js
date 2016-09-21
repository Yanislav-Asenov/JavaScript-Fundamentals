function solve(arr) {
    let num = Number(arr[0]);
    let digitsAfterFloatingPoint = Number(arr[1]);
    
    if(digitsAfterFloatingPoint > 15) {
        digitsAfterFloatingPoint = 15;
    } 

    let denominator = Math.pow(10, digitsAfterFloatingPoint);

    let result = Math.round(num * denominator) / denominator;

    console.log(result);
}

solve(['1.1', '2']);