function solve(arr) {
    let minAge = Number(arr[0])

    let arrOfObejcts = []

    for(let i = 1; i < arr.length; i+=2) {
        let object = { name: arr[i], age: Number(arr[i + 1]) }
        arrOfObejcts.push(object)
    }

    arrOfObejcts = arrOfObejcts.filter(function(el) {
        return el.age >= minAge;
    })

    for(let object of arrOfObejcts) {
        console.log(object)
    }
}

solve(['12','Ivan','15','Asen','9'])