// Metodo slice();

const names = ['Miguel', 'Alejandra', 'Anthonella', 'Alejandra', 'Miguel'];

const nameSlice = names.slice(2);
const nameSlice1 = names.slice(2, 4);
const nameSlice2 = names.slice(-2);
const nameSlice3 = names.slice(2, -1);

console.log(nameSlice); // [ 'Anthonella', 'Alejandra', 'Miguel' ].
console.log(nameSlice1); // [ 'Anthonella', 'Alejandra' ].
console.log(nameSlice2); // [ 'Alejandra', 'Miguel' ].
console.log(nameSlice3); // [ 'Anthonella', 'Alejandra' ].
