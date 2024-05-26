// Metodo include(). Verifica si ya existe un elemento,

const text = ['Miguel', 'Alejandra', 'Anthonella', 'Alejandra', 'Miguel'];
const textInclude = text.includes('Miguel');
const textInclude1 = text.includes('Juan');

console.log(textInclude); // true
console.log(textInclude1); // false

// Metodo indexOF(). Te indica si existe el elemento y te da el indice del primer elemento que encuentra segun la peticion.

const textIndex = text.indexOf('Alejandra');
const textIndex1 = text.indexOf('Juan');

console.log(textIndex); // 1
console.log(textInclude1); // False.

// Metodo lastIndexOf(). Te indica si existe un elemento y te da el indice del ultimo elemento que se encuentra segun la peticion.

const textLast = text.lastIndexOf('Alejandra');
const textLast1= text.lastIndexOf('Miguel');

console.log(textLast); // 3
console.log(textLast1);// 4