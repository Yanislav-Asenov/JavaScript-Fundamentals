function solve (input) {
  let appNameRegex = /\$app='(.+)'/
  let controllerRegex = /\$controller='(.+)'&app='(.+)'/
  let modelRegex = /\$model='(.+)'&app='(.+)'/
  let viewRegex = /\$view='(.+)'&app='(.+)'/

  let temporaryContainer = []

  for (let inputLine of input) {
    let appName = appNameRegex.exec(inputLine)
    let controllerMatch = controllerRegex.exec(inputLine)
    let modelMatch = modelRegex.exec(inputLine)
    let viewMatch = viewRegex.exec(inputLine)

    if (appName) {
      appName = appName[1]
      if (!containsAppName(temporaryContainer, appName)) {
        temporaryContainer[appName] = {
          controllers: [],
          models: [],
          views: [],
          isValid: true
        }
      } else {
        temporaryContainer[appName].isValid = true
      }
    } else if (controllerMatch) {
      let controllerName = controllerMatch[1]
      appName = controllerMatch[2]

      if (!containsAppName(temporaryContainer, appName)) {
        temporaryContainer[appName] = {
          controllers: [],
          models: [],
          views: [],
          isValid: false
        }
      }

      temporaryContainer[appName].controllers.push(controllerName)
    } else if (modelMatch) {
      let modelName = modelMatch[1]
      appName = modelMatch[2]
      if (!containsAppName(temporaryContainer, appName)) {
        temporaryContainer[appName] = {
          controllers: [],
          models: [],
          views: [],
          isValid: false
        }
      }
      temporaryContainer[appName].models.push(modelName)
    } else if (viewMatch) {
      let viewName = modelMatch[1]
      appName = modelMatch[2]
      if (!containsAppName(temporaryContainer, appName)) {
        temporaryContainer[appName] = {
          controllers: [],
          models: [],
          views: [],
          isValid: false
        }
      }
      temporaryContainer[appName].views.push(viewName)
    }
  }

  let resultContainer = []

  for (let index in temporaryContainer) {
    if (temporaryContainer[index].isValid) {
      resultContainer[index] = temporaryContainer[index]
      resultContainer[index].controllers.sort((a, b) => { return b < a })
      resultContainer[index].models.sort((a, b) => { return b < a })
      resultContainer[index].views.sort((a, b) => { return b < a })
    }
  }

  console.log(resultContainer)

  function containsAppName (container, appName) {
    for (let index in container) {
      if (index === appName) {
        return true
      }
    }

    return false
  }
}

solve([
  '$controller=\'PHPController\'&app=\'Language Parser\'',
  '$controller=\'JavaController\'&app=\'Language Parser\'',
  '$controller=\'C#Controller\'&app=\'Language Parser\'',
  '$controller=\'C++Controller\'&app=\'Language Parser\'',
  '$app=\'Garbage Collector\'',
  '$controller=\'GarbageController\'&app=\'Garbage Collector\'',
  '$controller=\'SpamController\'&app=\'Garbage Collector\'',
  '$app=\'Language Parser\''
])
