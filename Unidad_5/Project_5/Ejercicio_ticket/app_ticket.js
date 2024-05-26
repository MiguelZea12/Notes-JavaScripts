// Ejercicio de ver el ticket ganador.

const person = [
    {id : 1, name : 'Alejandro', lastname : 'Zea', ticket : 23 },
    {id : 2, name : 'Anthonella', lastname : 'Cedeño', ticket : 33 },
    {id : 3, name : 'Alejandra', lastname : 'Zea', ticket : 22 },
    {id : 4, name : 'Juan', lastname : 'Daza', ticket : 12 },
    {id : 5, name : 'Aldair', lastname : 'Toala', ticket : 64 },
    {id : 1, name : 'Xavier', lastname : 'Navia', ticket : 43 },
]

function Options () {
    return prompt('Ingrese la opcion que desea realizar:');
}

function WinnerByName () {
    const inputName = prompt('Ingrese el nombre para ver si existe el ganador');
    const winnerName = person.find( persons => persons.name === inputName );
    console.log (winnerName || 'No se encontro el nombre del ganador'); 
}

function WinnerByIndex () {
    const inputTicket = parseInt(prompt('Ingrese el ticket: '));
    const winnerTicket = person.findIndex( persons => persons.ticket === inputTicket );
    console.log(winnerTicket != -1 ? winnerTicket : 'No se encontro el nombre del ganador');
}

function app () {
    let response = Options();
    while (response != 'exit') {
        if (response === 'winnerByName') {
            WinnerByName();
        } else if ( response == 'winnerByTicket') {
            WinnerByIndex();
        } 
        response = Options();
    } 
}

app();