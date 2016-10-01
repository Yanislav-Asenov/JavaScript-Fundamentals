  // TODO: 70/100
  function solve (medenkas) {
    let naskorDamageDone = 0
    let vitkorDamageDone = 0

    let previousMedenkaDamage
    let previousMedenkaType = ''

    let naskorPreviousDamage = -1
    let naskorSpreeCount = 0
    let vitkorSpreeCount = 0
    let vitkorPreviousDamage = -1
    for (let medenka of medenkas) {
      let medenkaArgs = medenka.split(' ')
      let medenkaType = medenkaArgs[1]
      let medenkaDamage = parseInt((Number(medenkaArgs[0]) * 60))
      let isMedenkas = medenkaArgs[2] === 'medenkas'

      if (medenkaDamage <= 0) {
        continue
      }

      if (isMedenkas) {
        if (medenkaType === 'dark') {
          if (naskorPreviousDamage === medenkaDamage) {
            naskorSpreeCount++
          } else {
            naskorSpreeCount = 1
          }

          if (naskorSpreeCount === 5) {
            naskorDamageDone += (medenkaDamage * 4.5)
            naskorPreviousDamage = medenkaDamage * 4.5
            naskorSpreeCount = 0
          } else {
            naskorDamageDone += medenkaDamage
            naskorPreviousDamage = medenkaDamage
          }

          previousMedenkaType = 'dark'
        } else {
          if (vitkorPreviousDamage === medenkaDamage) {
            vitkorSpreeCount++
          } else {
            vitkorSpreeCount = 1
          }

          if (vitkorSpreeCount === 2) {
            vitkorDamageDone += (medenkaDamage * 2.75)
            vitkorPreviousDamage = medenkaDamage * 2.75
            vitkorSpreeCount = 1
          } else {
            vitkorDamageDone += medenkaDamage
            vitkorPreviousDamage = medenkaDamage
          }

          previousMedenkaType = 'white'
        }
      }
    }

    let maxDamage = Math.max(vitkorDamageDone, naskorDamageDone)
    let winner = vitkorDamageDone === maxDamage ? 'Vitkor' : 'Naskor'

    console.log(`Winner - ${winner}`)
    console.log(`Damage - ${maxDamage}`)
  }

  // solve(['2 dark medenkas', '1 white medenkas', '2 dark medenkas', '2 dark medenkas', '15 white medenkas', '2 dark medenkas', '2 dark medenkas'])
  // solve(['1 white medenkas', '1 white medenkas', '1 white medenkas', '1 white medenkas', '1 white medenkas', '1 dark medenkas'])
  // solve(['5 white medenkas', '5 dark medenkas', '4 white medenkas'])
  // solve(['333 dark medenkas', '333 dark medenkas', '333 dark medenkas', '333 dark medenkas', '555 dark medenkas', '444 dark medenkas', '333 dark medenkas', '1 dark medenkas', '557 dark medenkas', '1 dark medenkas'])
