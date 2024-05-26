// metodo concat():

const text = ['Hola', 'me'];
const text1 = ['Miguel', 'Alejandro'];

const textConcat = text.concat(text1);
console.log('Primer caso: ', textConcat); // Primer caso:  [ 'Hola', 'me', 'Miguel', 'Alejandro' ]

// Segundo caso.

const concatText = [].concat(text, text1);
console.log('Segundo caso: ', concatText); // Segundo caso:  [ 'Hola', 'me', 'Miguel', 'Alejandro' ]

// Spread Operador.

function SpreadOperador(text, text1) {
    console.log(...text, ...text1); // Hola me Miguel Alejandro
}

SpreadOperador(text, text1);

// metodo Join().

const joinText = textConcat.join(' ');
console.log(joinText);
