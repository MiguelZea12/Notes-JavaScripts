//  Numeros enteros.

const entero = 20
const decimal = 3.14
console.log(typeof(entero), typeof(decimal))//number number


// Notaciones cientificas.

const cientifica = 5e6
console.log(typeof(cientifica))// number

// Infinity and NaN.
const infinito = Infinity
const NoEsUnNumero = NaN
console.log(typeof(infinito), typeof(NoEsUnNumero))//number number

//Operaciones aritmeticas.

const suma = 2 + 2
const resta = 2 - 2 
const multiplicacion = 2 * 2
const division = 2 / 2

//Modulo y Exponenciacion.

const modulo = 2 % 2
const  exponenciacion = 2 ** 2

// Precision.

const precision = 0.1 + 0.2 //0.30000000000000004
console.log(precision.toFixed(1))//Redondea el numero. Resultado = 0.3

// Operaciones Avanzadas.

const raizCuadrada = Math.sqrt(16)// La funcion sqrt(), sacar la raiz cuadrada.
const valorAbsoluto = Math.abs(-7)// La funcion abs(), obtener el valor absoluto.
const aleatorio = Math.random()// La funcion random(), obtener un valor aleatorio.

console.log(raizCuadrada) // 4
console.log(valorAbsoluto) // 7
console.log(aleatorio.toFixed(1))// 0.7