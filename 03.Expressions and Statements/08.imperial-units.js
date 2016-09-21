function solve([number]) {
    number = Number(number);
    let feet = parseInt(number / 12);
    let inches = number % 12;
    console.log(`${feet}'-${inches}"`);
}

solve(['36']);