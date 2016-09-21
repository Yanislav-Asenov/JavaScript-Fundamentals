function solve(arr) {
    let coins = 0;

    for(let i = 0; i < arr.length; i++) {
        let args = arr[i].toLowerCase().split(' ');
        let type = args[0];

        if(type === 'coin') {
            let currentCoins = Number(args[1]);
            if(currentCoins % 1 === 0 && currentCoins >= 0) {
                coins += currentCoins;
            }
        }
    }

    let gold = 0;
    let silver = 0;
    let bronze = 0;

    if(coins >= 100) {
        gold = Math.floor(coins / 100.0);
        coins = coins - gold * 100;
    }

    if(coins >= 10) {
        silver = Math.floor(coins / 10.0);
        coins = coins - silver * 10;
    }

    bronze = coins;

    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
}

solve(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);