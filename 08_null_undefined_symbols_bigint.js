// Null.

const text = null
console.log(text) // Null
console.log(typeof(text)) // Object

// Undefined.

let text1 
console.log(text1) // Undefined

// Symbols.

const id = Symbol('id')
const id1 = Symbol('1')
const id2 =  Symbol('1')
console.log(id1 === id2) // False, porque al colocar Symbol(), crea uno unico.

const user = {}
user[id] = 1 
console.log(user) // { [Symbol(id)]: 1 }

// BigInt.

const numbers = 123123123123n
console.log(numbers)// 123123123123n

const particuleUniverse = 123123124412423123123n
console.log(typeof(particuleUniverse))// bigint