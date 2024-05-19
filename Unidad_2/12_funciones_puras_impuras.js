// Funciones puras.

// side effect.
// Modificar variables globales.
// Modificar parámetros.s
// Solicitudes HTTP.
// Impresiones de mensajes en pantalla o consola.
// Manipulación del DOM (Document Obect Model).
// Obtener la hora actual.

let numero = 10
function suma(x) {
    return x + x
}

function multiplicacion (y) {
    return y * y
}

const union = multiplicacion(suma(numero))
console.log(union)// 400

// Funciones impuras.

total = 0
function impura (a) {
    total += 2
    return total
} // Esta cambiando una variable global, por ese motivo es impuraa