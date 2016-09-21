function solve([principal, interest, frequency, time]) {
    [principal, interest, frequency, time] = [principal, interest, frequency, time].map(Number);

    let n = 12 / frequency;
    
    let F = Math.pow((1 + interest / n), n * time);

}

solve([1500, 4.3, 3, 6]);