// Explicit Type Casting.

const text = '42'
const number = parseInt(text)
console.log(number)
console.log(typeof(number)) // 42.

const stringDecimal = '3.14'
const numeroDecimal = parseFloat(stringDecimal)
console.log(numeroDecimal)
console.log(typeof(numeroDecimal))// 3.14.

const binary  = '1010'
const string = parseInt(binary, 2)
console.log(string)// 10.

// Impicit Type Casting.

console.log('--------------Implicit Type Casting----------------')
const number1 = '20' + 20
console.log(number1)// 2020.

const number2 = 20 + true
console.log(number2)// 21.


console.log('----------------------------------------------------')
const StringNumero = '10'
const numeroValues = 10
const BooleanValues = true
console.log(StringNumero + StringNumero) // 1010. CONCATENA
console.log(StringNumero + numeroValues) // 1010. CONCATENA
console.log(StringNumero + BooleanValues) // 10true. CONCATENA
console.log(numeroValues + numeroValues) // 20. SUMA
console.log(numeroValues + StringNumero) // 1010. CONCATENA
console.log(numeroValues + BooleanValues) // 11. SUMA
console.log(BooleanValues + BooleanValues) //2.SUNMA
console.log(BooleanValues + StringNumero) // true10. CONCATENA
console.log(BooleanValues + numeroValues) // 11. SUMA
