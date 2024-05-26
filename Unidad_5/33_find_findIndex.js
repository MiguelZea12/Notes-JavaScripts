// Metodo find(). Escoge el primer numero que cumple la condicion.

const number = [1, 2, 5, 62, 12, 44, 32, 16];

const numberFind = number.find( number => number > 50);
console.log(numberFind); // 62

// Metodo findIndex(). Busca el indice del primer numero que cumple la condicion.

const number1 = [3, 41, 31, 44, 66, 34, 11, 10];

const number1FindIndex = number1.findIndex( number => number > 30); 

console.log(number1FindIndex); // 1