// Creacion de biografia de los mejores jugadores del mundo.

// Se crea una funcion constructora
function SoccerPlayer (name, equipment, age, country) {
    this.name = name;
    this.equipment = equipment;
    this.age = age;
    this.country = country;
    this.ballGold = 0
    this.active = false

    // Se define el cuerpo de la informacion.
    this.DisplayInfo = function () {
        console.log(`Soccer player info: 
        name: ${this.name}.
        equipment : ${this.equipment}.
        age : ${this.age}
        country : ${this.country}
        ${this.active ? 'Sigue Activo : Yes' : 'Sigue Activo : No'}
        ${this.ballGold ? `Tiene valon de oro: ${this.ballGold}` : `No tiene balon de oro: ${this.ballGold}`}`)
    }

    // Se asigna que el jugador sigue activo.
    this.activate = function(){
        this.active = true;
        console.log(`${this.name} Aun sigue jugando en las ligas profesionales.`)
    }

    // Se le asigna un ballon de oro.
    this.ballgold = function () {
        this.ballGold += 1
        console.log(`Felicidades ${this.name}, acabas de ganar un balon de oro.`) 
    }
}

const messi = new SoccerPlayer('Lionel Andres Messi Cuchittini', 'Inter Miami', 37, 'Argentina') // Informacion de Messi
const ronaldo = new SoccerPlayer('Cristiano Ronaldo', 'Real madrid', 38, 'Portugal') // Informacion imaginaria de Cristiano Ronaldo
const neymar = new SoccerPlayer('Neymar JR', 'PSG', 30, 'Brazil') // Informacion imaginaria de Neymar Jr

// Se muestra la informaciormacion de los jugadores.
console.log('---------------INFORMACION DE LOS JUGADORES.-----------------')
messi.DisplayInfo()
ronaldo.DisplayInfo()
neymar.DisplayInfo()

// Se le asigna a messi que aun sigue activo.
console.log('---------------JUGADOR QUE SIGUE ACTIVO.-----------------')
messi.activate()

// Se le asigna dos balones de oro a Messi.
console.log('---------------GANADOR DE BALON DE ORO.-----------------')
messi.ballgold()
messi.ballgold()

//Se muestra la informacion Actualizada.
console.log('---------------INFORMACION DE LOS JUGADORES ACTUALIZADA.-----------------')
messi.DisplayInfo()
ronaldo.DisplayInfo()
neymar.DisplayInfo()


