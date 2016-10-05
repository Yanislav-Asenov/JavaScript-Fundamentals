function solve (arr) {
  let producedCars = []

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('|').filter(x => x).map(x => x.trim())
    let carBrand = lineArgs[0]
    let carModel = lineArgs[1]
    let quantity = Number(lineArgs[2])
    let carBrandIndex = getCarBrandIndex(carBrand, producedCars)


    if (!carBrandIndex && carBrandIndex !== 0) {
      producedCars.push({
        name: carBrand,
        models: new Map()
      })
      carBrandIndex = producedCars.length - 1
    }

    if (!producedCars[carBrandIndex].models.has(carModel)) {
      producedCars[carBrandIndex].models.set(carModel, 0)
    }

    producedCars[carBrandIndex].models.set(carModel, producedCars[carBrandIndex].models.get(carModel) + quantity)
  }

  for (let i = 0; i < producedCars.length; i++) {
    let currentBrand = producedCars[i]
    console.log(currentBrand.name)
    for (let [modelName, quantity] of currentBrand.models) {
      console.log(`###${modelName} -> ${quantity}`)
    }
  }

  function getCarBrandIndex (carBrand, cars) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].name === carBrand) {
        return i
      }
    }
    return false
  }
}

// solve([
//   'Audi | Q7 | 1000',
//   'Audi | Q6 | 100',
//   'BMW | X5 | 1000',
//   'BMW | X6 | 100',
//   'Citroen | C4 | 123',
//   'Volga | GAZ-24 | 1000000',
//   'Lada | Niva | 1000000',
//   'Lada | Jigula | 1000000',
//   'Citroen | C4 | 22',
//   'Citroen | C5 | 10'
// ])
