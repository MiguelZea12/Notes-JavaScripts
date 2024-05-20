function SecretWord() {
    let equipment = ['barcelona', 'real madrid', 'milan', 'psg'];
    const random = Math.floor(Math.random() * equipment.length);
    const secretWord = equipment[random];
    return secretWord;
}


function Guess(secretWord) {
    let Attempts = 3;
    alert(`BIENVENIDO AL JUEGO DE ADIVINAR PALABRAS.
    VAS A TENER 3 INTENTOS PARA ADIVINAR
    UNA DE LAS PISTAS ES QUE SON EQUIPOS DE FUTBOL.
    Y OTRA PISTA ES QUE TU EQUIPO COMIENZA CON LA LETRA: ${secretWord[0]}`);

    while(Attempts > 0) {
        let assumption = prompt('Adivina el equipo: ');
        if (assumption.toLocaleLowerCase() === secretWord) {
            alert('Oh! Genial, has adivinado la palabra secreta.');
            break;
        } else {
            Attempts--;
            if(Attempts > 0) {
                alert(`Cuidado! Te has equivocado, te quedan ${Attempts} intentos`);
            } else {
                alert(`Te has quedado sin intentos, tu palabra secreta era ${secretWord}`);
            }
        }
    }
} 

const secretWord = SecretWord();
console.log(secretWord)
Guess(secretWord);



