// Metodo filter.

const numbers = [1, 4, 6, 2, 5, 7, 8, 12];

const numberFilter = numbers.filter( num => num % 2 === 0);
console.log(numberFilter);

// Metodo reduce().

const number = [1, 4, 6, 2, 5, 7, 8, 12];

const numberReduce = number.reduce((accumulation, Values) => accumulation + Values, 0);
console.log("El numero total es: ", numberReduce);

// Metodo reduce() para encontrar los que se repiten.

const fruits = ['Manzanas', 'Peras', 'Limon', 'Manzana', 'Uvas' , 'Peras'];

const fruitReduce = fruits.reduce((accumulation, values) => {
    if (accumulation[values]) {
        accumulation[values]++
    } else {
        accumulation[values] = 1;
    }
    return accumulation
}, {});

console.log(fruitReduce);