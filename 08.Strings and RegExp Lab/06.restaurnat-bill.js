function solve (arr) {
  let resultObject = { totalCost: 0, products: [] }

  for (let i = 0; i < arr.length - 1; i += 2) {
    let productName = arr[i]
    let cost = Number(arr[i + 1])

    resultObject.products.push(productName)
    resultObject.totalCost += cost
  }

  console.log(`You purchased ${resultObject.products.join(', ')} for a total sum of ${resultObject.totalCost}`)
}

// solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69'])
