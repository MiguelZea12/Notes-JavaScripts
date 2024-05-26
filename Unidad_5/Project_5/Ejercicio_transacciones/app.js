// Analisis de transacciones.

const transactionList = [
    {id : 1, description : 'appliance', balance : -400},
    {id : 2, description : 'transfer', balance : 200},
    {id : 3, description : 'salary', balance : 1200},
    {id : 4, description : 'computer', balance : -850},
    {id : 5, description : 'shopping', balance : -120},
    {id : 6, description : 'light', balance : -30},
    {id : 7, description : 'agua', balance : -20}
];

function Options () {
    const user = prompt('Ingresa la opcion que quieras ver de tus transacciones. sumatotal, nummax, negative, description, transaction, update: ').toLocaleLowerCase();
    return user;
}

//Funcion para la suma total de los balances.
function SumTotal () {
    const sumTotal = transactionList.reduce((accumulation, values) => accumulation + values.balance, 0);
    console.log(Math.abs(sumTotal));
}

// Funcion para obtener el numero mayor.
function largestBalance () {
    const valuesMax = transactionList.reduce((accumulation, values) => {
        if (accumulation > values.balance) {
            values.balance = accumulation;
        }
        
        return values.balance;
    }, Number.NEGATIVE_INFINITY) 

    console.log(`$${valuesMax}`)
}

// Funcion para obtener las transacciones negativas.
function Negativetransactions () {
    const negative = transactionList.filter( num => num.balance < 0);
    console.log(negative);
}

// Funcion para obtener una transaccion por una descripcion especifica.
function searchDescription() {
    const description = prompt('Ingrese la descripcion que quiere buscar: ').toLocaleLowerCase()
    const search = transactionList.find( theme => theme.description === description);
    console.log(search);
}

// Funcion para obtener una transaccion por un balance en especifico.
function searchAmountIndex () {
    const amount = parseInt(prompt('Ingresa el balance que quieres buscar: '))
    const searchIndex = transactionList.findIndex( amounts => amounts.balance === amount);
    console.log(searchIndex);
    }
    
// Funcion para actualizar la descripcion de acuerdo si es un gasto o un ingreso.
function UpdateTransaction () {
    transactionList.forEach((item) => {
        if (item.balance > 0) {
            item.description = `Ingresos: ${item.description}`;
        } else {
            item.description = `Gastos: ${item.description}`;
        }
        return item.description;
    })
    console.log(transactionList)
}

function app () {
    let options = Options();
    while(options != 'exit') {
        if (options === 'sumatotal') {
            SumTotal();
        } else if (options === 'nummax') {
            largestBalance();
        } else if (options === 'negative') {
            Negativetransactions();
        } else if (options === 'description') {
            searchDescription();
        } else if (options === 'transaction') {
            searchAmountIndex();
        } else if (options === 'update') {
            UpdateTransaction();
        }
        options = Options();
    }
}

app();