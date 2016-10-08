function solve (arr) {
  let products = new Map()

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('|').filter(x => x).map(x => x.trim())
    let town = lineArgs[0]
    let product = lineArgs[1]
    let productPrice = Number(lineArgs[2])

    if (!products.has(product)) {
      products.set(product, new Map())
    }

    if (!products.get(product).has(town)) {
      products.get(product).set(town, productPrice)
    }

    if (products.get(product).get(town)) {
      products.get(product).set(town, productPrice)
    }
  }

  for (let [key, value] of products) {
    let town = getLowestPrice(value)
    console.log(`${key} -> ${town.price} (${town.name})`)
  }

  function getLowestPrice (towns) {
    let minTown = {}
    let minPrice = Number.MAX_VALUE
    for (let [key, value] of towns) {
      if (value < minPrice) {
        minPrice = value
        minTown = {
          name: key,
          price: value
        }
      }
    }
    return minTown
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

// solve([
//   'Sofia City | Audi | 100000',
//   'Sofia City | BMW | 100000',
//   'Sofia City | Mitsubishi | 10000',
//   'Sofia City | Mercedes | 10000',
//   'Sofia City | NoOffenseToCarLovers | 0',
//   'Mexico City | Audi | 1000',
//   'Mexico City | BMW | 99999',
//   'New York City | Mitsubishi | 10000',
//   'New York City | Mitsubishi | 1000',
//   'Mexico City | Audi | 100000',
//   'Washington City | Mercedes | 1000'
// ])
