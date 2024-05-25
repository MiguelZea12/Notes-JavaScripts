// Ejercicio de sacar el promedio de calificaciones.
const calification = [];

// Funcion para la opcion del usuario.
const options = () => prompt('Ingresa la opcion que quieres realizar, add, takeavarage, see (Aprobados o desaprobados), view, exit: ')

// Funcion para ingresar una calificacion al array.
function average () {
    const response = parseInt(prompt('Ingrese por favor la calificacion: '));
    calification.push(response);
}

// Funcion para sacar el promedio.
function takeAverage () {
    const takeReduce = calification.reduce((accumulation, values) => (accumulation + values) / calification.length, 0);
    console.log(takeReduce);
}

// Funcion para saber los aprobados o los desaprobados.
function seeApprovedandDisapproved () {
    const messenger = prompt('Desea ver los aprobados o los desaprobados, ingrese approved o disapproved ').toLocaleLowerCase();
    const approved = calification.filter(number => number >= 70);
    const disapproved = calification.filter(number1 => number1 < 70);

    if(messenger === 'approved') {
        console.log(approved);
    } else if (messenger === 'disapproved') {
        console.log(disapproved);
    } else {
        alert('No ha escogido una opcion valida');
    }
}

// Funcion para ver todas las calificaciones.
const view = () => console.log(calification);

// Funcion para el loop de la funcionalidad de la app.
function app () {
    let response = options();
    while(response != 'exit'){
        if (response === 'add') {
            average();
        } else if (response === 'takeavarage') {
            takeAverage();
        } else if (response === 'see') {
            seeApprovedandDisapproved();
        } else if (response === 'view') {
            view();
        } else if (response === 'exit') {
            window.exit()
            break;
        }
        response = options();  
    }
}

app();