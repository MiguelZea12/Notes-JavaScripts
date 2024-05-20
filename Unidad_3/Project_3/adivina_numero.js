// Genera un numero aleatorio con el metodo random().
function AleatorieNum () {
    const numSystem = Math.floor(Math.random() * 10 + 1);
    return numSystem;
};

// Genera un prompt para que el usuario pueda ingresar el numero al jugar.
function NumPlayer () {
    const numPlayer = parseInt(prompt('Ingresa el numero de 1-10 que vas a jugar: '));
    return numPlayer;
};

// Compara los numero del usuario con el del sistema.
function CompareNumplayer(numPlayer, numSystem) {
    if (numPlayer === numSystem){
        console.log(`Oh! Felicidades, le has dado al blanco.
        Numero del sistema : ${numSystem}
        Numero del Jugador : ${numPlayer}`); // Si estan iguales, da las felicitaciones, con los resultados.
    }else if (numPlayer < numSystem){
        console.log('Tu numero fue bajo, subele un poco.'); // Si el numero del usuario es inferior, da un aviso de que debe de aumentar.
    }else if (numPlayer > numSystem){
        console.log('Tu numero esta elevado, bajale un poco.');// Si el numero del usuario es muy alto, le da una aviso que debe de bajar.
    }
}

// Juego.
const num_system = AleatorieNum()
const num_player = NumPlayer()
CompareNumplayer(num_player, num_system )
