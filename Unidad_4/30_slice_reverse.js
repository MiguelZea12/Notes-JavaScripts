// Metodo Slice().

const fruit = ['Manzana', 'Pera', 'Piña', 'Sandia'];
const sliceFruit = fruit.splice(2, 3, 'Uva', 'Uva verde');

console.log(sliceFruit); // [ 'Piña', 'Sandia' ]
console.log(fruit); // [ 'Manzana', 'Pera', 'Uva', 'Uva verde' ]

// Metodo reverse().

const num = [1, 5, 16, 89, 22, 44];
const numreverse = num.reverse();

console.log(numreverse);// [ 44, 22, 89, 16, 5, 1 ]


// Metodo sort();

const num1 = [1, 5, 16, 89, 22, 44];
const numSort = num.sort((A, B) => A - B );
console.log(numSort); // [ 1, 5, 16, 22, 44, 89 ]

// Metodo sort() white string

const name = ['Miguel', 'Alejandro', 'Xavier', 'Aldair', 'Daza'];
const nameSort = name.sort(); 
console.log(nameSort); // [ 'Aldair', 'Alejandro', 'Daza', 'Miguel', 'Xavier' ]

// Metodo fill().

const num2 = [1, 5, 16, 89, 22, 44];
const num2Fill = num2.fill(0, 2, 4);

console.log(num2Fill); // [ 1, 5, 0, 0, 22, 44 ]