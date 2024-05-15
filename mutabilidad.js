// tipo de datos primitivos - Inmutables

// 1. Ejercicio con numeros
let amount = 10
amount = amount * 10 // Asignas un nuevo valor a la variable pero no cambia.
console.log(amount)

// 2. Ejercicio con Strings
let name = 'Alejandro'
name = 'Anthonella' // Asignas un nuevo valor a la variable pero no cambia.
console.log(name) 

// 3. Ejercicio con Booleanos
let logical = true
logical = false
console.log(logical) // Asignas un nuevo valor a la variable pero no cambia.


//Tipos de datos complejos - Mutables


// 1. Ejercicio con Persona
let person = {
    names : 'Miguel Alejandro', 
    lastnames : 'Zea Párraga', 
    age : 20
}
person.age = 21 // Se actualiza el valor de la propiedad age dentro del mismo objeto.
console.log(person)

// 2. Ejercicio con Frutas
let fruit = ['Manzanas', 'Peras', 'Sandias']
fruit[1] = 'uvas'
console.log(fruit)

// 3. Ejercicio con Juguetes
let toys = [
    'balon',
    'consola de videojuego',
    'Trompo',
    'Balon de volley'
]
toys[2] = 'Robot'
console.log(toys)

// 4. Ejercicio con una funcion

// 4.1. Cambiar Nombre
function Rename(object) {
    object.name = 'Miguel'
}

let persons = {name : 'Alejandro'}
Rename(persons)
console.log((persons))

// 4.2. Cambiar Fruta
function Change_Fruit(object) {
    object[2] = 'Mandarina'
}

let natural_fruits = ['Manzana', 'Pera', 'Banana', 'Uva']
Change_Fruit(natural_fruits)
console.log(natural_fruits)