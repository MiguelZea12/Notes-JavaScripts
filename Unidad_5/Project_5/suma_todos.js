// Ejercicio 2: Suma todos los elementosx

const numers1 = [];

function options () {
    const response = prompt('Ingrese la opcion que quiere ejecutar add, suma, view, exit: ');
    return response;
}

function Add () {
    const incomeNum = parseInt(prompt('Ingresa el numero que quieres añadir a la lista: '));
    numers1.push(incomeNum);
}

function Sum () {
    let sum = 0;
    const sumElement = numers1.forEach(sum1 => {
        sum += sum1;
        
    });
    console.log(sum);
}

function view () {
    console.log(numers1)
}


function app() {
    let response = options();  
    while(response !== 'exit') {
        if (response === 'add') {
            Add();
        } else if (response === 'suma') { 
            Sum();
        } else if (response === 'view') { 
            view();
        }
        response = options();  
    }
}

app();