function solve (inputArr) {
  let appRegex = /^\$app\s*=\s*'([^$]+)'$/
  let controllerRegex = /^\$controller\s*=\s*'([^$]+)'\s*&\s*app\s*=\s*'([^$]+)'$/
  let modelRgex = /^\$model\s*=\s*'([^$]+)'\s*&\s*app\s*=\s*'([^$]+)'$/
  let viewRegex = /^\$view\s*=\s*'([^$]+)'\s*&\s*app\s*=\s*'([^$]+)'$/

  let modules = {}

  for (let i = 0; i < inputArr.length; i++) {
    let appMatch = appRegex.exec((inputArr[i]))
    let controllerMatch = controllerRegex.exec((inputArr[i]))
    let modelMatch = modelRgex.exec((inputArr[i]))
    let viewMatch = viewRegex.exec((inputArr[i]))

    if (appMatch) {
      let appName = appMatch[1]
      if (containsApp(appName)) {
        modules[appName].isValid = true
      } else {
        modules[appName] = {
          controllers: [],
          models: [],
          views: [],
          isValid: true
        }
      }
    } else if (controllerMatch) {
      let controllerName = controllerMatch[1]
      let appName = controllerMatch[2]
      if (containsApp(appName)) {
        modules[appName].controllers.push(controllerName)
      } else {
        modules[appName] = {
          controllers: [controllerName],
          models: [],
          views: [],
          isValid: false
        }
      }
    } else if (modelMatch) {
      let modelName = modelMatch[1]
      let appName = modelMatch[2]
      if (containsApp(appName)) {
        modules[appName].models.push(modelName)
      } else {
        modules[appName] = {
          controllers: [],
          models: [modelName],
          views: [],
          isValid: false
        }
      }
    } else if (viewMatch) {
      let viewName = viewMatch[1]
      let appName = viewMatch[2]
      if (containsApp(appName)) {
        modules[appName].views.push(viewName)
      } else {
        modules[appName] = {
          controllers: [],
          models: [],
          views: [viewName],
          isValid: false
        }
      }
    }
  }

  let validModules = []

  for (let index in modules) {
    if (modules[index].isValid) {
      validModules.push({
        controllers: modules[index].controllers,
        models: modules[index].models,
        views: modules[index].views
      })
    }
  }

  // for (let index in modules) {
  //   validModules[index].controllers.sort((a, b) => {
  //     return a.localeCompare(b)
  //   })

  //   validModules[index].models.sort((a, b) => {
  //     return a.localeCompare(b)
  //   })

  //   validModules[index].views.sort((a, b) => {
  //     return a.localeCompare(b)
  //   })
  // }


  validModules.sort((a, b) => {
    if (a.controllers.length !== b.controllers.length) {
      return a.controllers.length > b.controllers.length
    } else if (a.models.length !== b.models.length) {
      return a.models.length < b.models.length
    } else {
      return 0
    }
  })

  console.log(validModules)

  function containsApp (appName) {
    for (let index in modules) {
      if (index === appName) {
        return true
      }
    }

    return false
  }
}

solve([
  '$controller=\'Language1\'&app=\'Language Parser\'',
  '$controller=\'Language2\'&app=\'Language Parser\'',
  '$controller=\'C#Garbage1\'&app=\'Garbage Collector\'',
  '$controller=\'C++Garbage2\'&app=\'Garbage Collector\'',
  '$app=\'Garbage Collector\'',
  '$controller=\'Garbage3\'&app=\'Garbage Collector\'',
  '$controller=\'Garbage4\'&app=\'Garbage Collector\'',
  '$app=\'Language Parser\''
])

// solve([
//   '$controller=\'PHPController\'&app=\'Language Parser\'',
//   '$controller=\'JavaController\'&app=\'Language Parser\'',
//   '$controller=\'C#Controller\'&app=\'Language Parser\'',
//   '$controller=\'C++Controller\'&app=\'Garbage Collector\'',
//   '$app=\'Garbage Collector\'',
//   '$controller=\'GarbageController\'&app=\'Garbage Collector\'',
//   '$controller=\'SpamController\'&app=\'Garbage Collector\'',
//   '$model=\'SpamModel\'&app=\'Garbage Collector\'',
//   '$app=\'Language Parser\''
// ])
