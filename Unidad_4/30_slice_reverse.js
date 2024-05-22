// Metodo Slice().

const fruit = ['Manzana', 'Pera', 'Piña', 'Sandia'];
const sliceFruit = fruit.splice(2, 3, 'Uva', 'Uva verde');

console.log(sliceFruit);
console.log(fruit);

// Metodo reverse().

const num = [1, 5, 16, 89, 22, 44];
const numreverse = num.reverse();

console.log(numreverse);


// Metodo sort();

const num1 = [1, 5, 16, 89, 22, 44];
const numSort = num.sort((A, B) => A - B );
console.log(numSort);

// Metodo sort() white string

const name = ['Miguel', 'Alejandro', 'Xavier', 'Aldair', 'Daza'];
const nameSort = name.sort();
console.log(nameSort);

// Metodo fill().

const num2 = [1, 5, 16, 89, 22, 44];
const num2Fill = num2.fill(0, 2, 4);

console.log(num2Fill);