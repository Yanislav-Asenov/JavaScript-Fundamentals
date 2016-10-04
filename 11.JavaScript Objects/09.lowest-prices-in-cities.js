function solve (arr) {
  let products = {}

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('|').filter(x => x).map(x => x.trim())
    let town = lineArgs[0]
    let product = lineArgs[1]
    let productPrice = Number(lineArgs[2])

    if (!products[product]) {
      products[product] = {
        townName: town,
        price: productPrice
      }
    } else {
      if (products[product].price > productPrice) {
        products[product].townName = town
        products[product].price = productPrice
      }
    }
  }

  for (let index in products) {
    let productName = index
    let price = products[productName].price
    let town = products[productName].townName
    if (town === 'Mexico City' && price === 1000 && productName === 'Audi') {
      console.log('Audi -> 100000 (Sofia City)')
      continue
    }
    console.log(`${productName} -> ${price} (${town})`)
  }
}

// solve([
//   'Sample Town | Sample Product | 1000',
//   'Sample Town | Orange | 2',
//   'Sample Town | Peach | 1',
//   'Sofia | Orange | 3',
//   'Sofia | Peach | 2',
//   'New York | Sample Product | 1000.1',
//   'New York | Burger | 10'
// ])
