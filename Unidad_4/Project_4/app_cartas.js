// Ejercicio: Juego de cartas implementando el metodo slice().

const deck = ['♡', '♢', '♤', '♧', '♣', '♦', '♥', '♠', '♡', '♢', '♤', '♧', '♣', '♦', '♥', '♠'];

// Funcion para las opciones del usuario.
function options() {
    return prompt(`Tienes la opción de: stir, distribute y exit.\n Escribe EXIT para terminar.\n ¿Cuál es tu opción?`).toLocaleLowerCase();
}

// Funcion para saber que cantidad de carta se van a repartir.
function quantityLetter() {
    return parseInt(prompt('¿Cuántos números de cartas desea repartir? El rango es de 5 a 7: '));
}

// Funcion para revoler las cartas.
function stirCard() {
    for (let i = deck.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[random]] = [deck[random], deck[i]];
    }
    console.log('Las cartas han sido revaladas:', deck);
}

// Funcion para repartir las cartas con los usuarios.
function distribute(letterQuantity) {
    const totalCardsNeeded = letterQuantity * 3;
    if (totalCardsNeeded > deck.length) {
        console.log('No hay suficientes cartas para repartir a 3 personas.');
        return;
    }

    const player1 = deck.slice(0, letterQuantity);
    const player2 = deck.slice(letterQuantity, letterQuantity * 2);
    const player3 = deck.slice(letterQuantity * 2, letterQuantity * 3);

    console.log('Cartas repartidas:');
    console.log('Persona 1:', player1);
    console.log('Persona 2:', player2);
    console.log('Persona 3:', player3);
}

// Loop para la funcionalidad de la app.
let response = '';
while (response !== 'exit') {
    response = options();
    if (response === 'distribute') {
        const letterQuantity = quantityLetter();
        stirCard(); 
        distribute(letterQuantity);
    } else if (response === 'stir') {
        stirCard();
    } else if (response !== 'exit') {
        console.log('Opción no válida.');
    }
}
console.log('El Juego terminado.');
