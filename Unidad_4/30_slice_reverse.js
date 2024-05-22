// Metodo Slice().

const fruit = ['Manzana', 'Pera', 'Piña', 'Sandia'];
const sliceFruit = fruit.splice(2, 3, 'Uva', 'Uva verde');

console.log(sliceFruit);
console.log(fruit);