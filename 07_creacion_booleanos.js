// Creacion de booleanos. 

const isActive = true
const HasPermisson =  false

// Conversion implicita.

const result = 6 > 3
console.log(result) // true.

const country = 'Ecuador'
console.log(!!country) // Los !! buscaran si existe algo, si llega a existir, mostrar que es true, y si no llegase a encontrar sera false.

// Conversion explicita.

const values = 0
const otherValue = 23
const verification = Boolean(values)
const otherVerification = Boolean(otherValue)
console.log(verification) // False. Da resultado FALSE porque el cero lo hace valer como false.
console.log(otherVerification)// True. Da True porque cualquier numero que no sea cero, sera true.