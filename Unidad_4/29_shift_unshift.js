// Se declara una array de colores.
const color = ['Yellow', 'Red', 'Blue'];
const remove = color.shift(); // Se elimina el primer elemento de array.

console.log(color); // [ 'Red', 'Blue' ]
console.log(remove); // Yellow
 
// Se agrega nuevos elementos en el principio de array.
const newColor = color.unshift('Orange', 'Pink');
console.log(newColor); // 4
console.log(color) // [ 'Orange', 'Pink', 'Red', 'Blue' ]