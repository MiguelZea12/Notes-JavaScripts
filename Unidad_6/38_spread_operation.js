// Copiar un array.

const number = [1, 2, 4, 22, 44, 12];
const copyNum = [...number];

console.log(number); // [ 1, 2, 4, 22, 44, 12 ]
console.log(copyNum); //[ 1, 2, 4, 22, 44, 12 ]

// Combinar arrays.
const number1 = [1, 2, 4, 22, 44, 12];
const number2 = [33, 44, 55, 66, 77];
const combinationNum = [...number1, ...number2];
console.log(combinationNum); // [ 1,  2,  4, 22, 44,  12, 33, 44, 55, 66,  77]

// Añadir elemetno al array

const number3 = [33, 44, 55, 66, 77];
const addNum = [...number3, 1, 3, 55, 332];
console.log(addNum); //[33, 44, 55, 66, 77, 1, 3, 55, 332]

// Pasar elementos a una fucion.
const num = [1, 2, 3];

function sum (a, b, c) {
    return a + b + c;
};

const response = sum(...num);
console.log(response); // 6