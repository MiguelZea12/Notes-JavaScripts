/*

Operador if y else.

*/

const name = 'Paul'
const name1 = 'Alejandro'

if (name === name1) {
    console.log(`El nombre ${name} se repite.`)
} else if (name === 'Paul') {
    console.log('Hola Paul')
} else{
    console.log(`No se repite, uno se llama ${name} y el otro/a ${name1}`)
}