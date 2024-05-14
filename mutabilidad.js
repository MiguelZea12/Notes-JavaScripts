// tipo de datos primitivos - Inmutables
let cantidad = 10
cantidad = cantidad * 10

console.log(cantidad)

let nombre = 'Alejandro'
nombre = 'Anthonella'

console.log(nombre)

let logico = true
logico = false
console.log(logico)


//Tipos de datos complejos - Mutables

let person = {
    names : 'Miguel Alejandro', 
    lastnames : 'Zea Párraga', 
    age : 20
}

person.age = 21

console.log(person)


let frutas = ['Manzanas', 'Peras', 'Sandias']
frutas[1] = 'uvas'
console.log(frutas)

let juguetes = [
    'balon',
    'consola de videojuego',
    'Trompo',
    'Balon de volley'
]
juguetes[2] = 'Robot'
console.log(juguetes)

//funcion
function CambiarNombre(objeto) {
    objeto.nombre = 'Miguel'
}

let persona = {nombre : 'Alejandro'}
CambiarNombre(persona)
console.log((persona))


function CambiarFruta(objeto) {
    objeto[2] = 'Mandarina'
}

let fruta = ['Manzana', 'Pera', 'Banana', 'Uva']
CambiarFruta(fruta)
console.log(fruta)