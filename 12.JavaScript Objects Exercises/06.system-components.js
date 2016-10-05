function solve (arr) {
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    let lineArgs = arr[i].split('|').filter(x => x).map(x => x.trim())
    let systemName = lineArgs[0]
    let componentName = lineArgs[1]
    let subComponentName = lineArgs[2]
    let systemIndex = getSystemIndexByName(systemName, resultArr)

    if (!resultArr[systemIndex] && systemIndex !== 0) {
      resultArr.push({
        name: systemName,
        components: []
      })
      systemIndex = resultArr.length - 1
    }

    let componentIndex = getComponentIndex(componentName, resultArr, systemIndex)
    if (!componentIndex && componentIndex !== 0) {
      resultArr[systemIndex].components.push({
        name: componentName,
        subComponents: []
      })
      componentIndex = resultArr[systemIndex].components.length - 1
    }


    resultArr[systemIndex].components[componentIndex].subComponents.push(subComponentName)
  }

  resultArr.sort((a, b) => {
    if (a.components.length !== b.components.length) {
      return a.components.length < b.components.length
    } else {
      return a.name.localeCompare(b.name)
    }
  })

  for (let system of resultArr) {
    system.components.sort((a, b) => {
      return a.length > b.length
    })
  }

  for (let i = 0; i < resultArr.length; i++) {
    let system = resultArr[i]
    console.log(system.name)
    for (let component of system.components) {
      console.log(`|||${component.name}`)
      for (let subComponent of component.subComponents) {
        console.log(`||||||${subComponent}`)
      }
    }
  }

  function getComponentIndex (componentName, resultArr, resultArrIndex) {
    for (let i = 0; i < resultArr[resultArrIndex].components.length; i++) {
      let currentSystem = resultArr[resultArrIndex].components[i]
      if (currentSystem.name === componentName) {
        return i
      }
    }
    return false
  }

  function getSystemIndexByName (systemName, resultArr) {
    for (let i = 0; i < resultArr.length; i++) {
      if (systemName === resultArr[i].name) {
        return i
      }
    }

    return false
  }
}

solve([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security'
])
