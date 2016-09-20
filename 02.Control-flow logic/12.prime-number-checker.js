function solve(input) {
    let num = Number(input[0]);
    let isPrime = true;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            isPrime = false;
            console.log(isPrime);
            return;
        }
    }
    
    isPrime = num > 1;

    console.log(isPrime);
}

solve(['0'])