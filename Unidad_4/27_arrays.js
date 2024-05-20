// Arrays con el metodo array()

const list = Array('Salmon', 'Pescado');
console.log(list); // [ 'Salmon', 'Pescado' ].

const list1 = Array(2);
console.log(list1) // No funciona bien. Esa es la desventaja.

// Sintaxis implicita del array

const hobbies = ['Futbol', 'Escuchar Musica', 'Volleyball'];
console.log(hobbies); // [ 'Futbol', 'Escuchar Musica', 'Volleyball' ].

const more = [2]; // [2],
const clear = []; // [],
const variety = [
    'Perro', 
    true, 
    2,
    {comida : 'atun', animal : 'Gato'},
    2.1
]

console.log(variety); // [ 'Perro', true, 2, { comida: 'atun', animal: 'Gato' }, 2.1 ].

// Acceder a los elementos del array.
const accessing = hobbies[1];
console.log(accessing); // Escuchar Musica.

// Saber la longitud del array.

const length = variety.length;
console.log(length); // 5,

//Mutabilidad.

const newHobbies = hobbies.push('Programar', 'Leer libros');
console.log(hobbies);
console.log(newHobbies); // ['Futbol', 'Escuchar Musica', 'Volleyball', 'Programar', 'Leer libros']

// Inmutabilidad.

const NewInmutability = hobbies.concat(['Jugar en el telefono', 'Ordenar mi cuarto.']);
console.log(NewInmutability); // ['Futbol', 'Escuchar Musica', 'Volleyball', 'Programar', 'Leer libros', 'Jugar en el telefono','Ordenar mi cuarto.']

// Verificar si es un array.

const CheckingArray = Array.isArray(hobbies);
console.log(CheckingArray); // true.


// Ejercicio de practica. Que todos los numeros del array se sumen.

const number = [1, 2, 3, 4, 5, 6];
let sum = 0;

for(let i = 0; i < number.length; i++){
    sum += number[i];
}
console.log(sum); // 21.