/*

Operadores logicos.


&& (AND): Devuelve true si ambos operandos son verdaderos.
|| (OR): Devuelve true si al menos uno de los operandos es verdadero.
! (NOT): Devuelve true si el operando es falso y false si el operando es verdadero.

*/

const a = 10;
const b = 20;
const c = "10";

a == b && a === c; // False
a != b || a === c; // True
!(a === c);// True


