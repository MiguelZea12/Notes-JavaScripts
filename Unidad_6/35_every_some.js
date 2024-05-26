// Metodo every(). Todos deben de cumplir la condicion.

const num = [12, 44, 22, 66, 45, 70];
const everyNum = num.every(ages => ages > 18)
console.log(everyNum); // False

// Metodo some(). Almenos uno debe de cumplir la condicion.

const someNum = num.some(ages => ages > 68);
console.log(someNum); // True

const someNum1 = num.some(ages => ages > 18);
console.log(someNum1); // True