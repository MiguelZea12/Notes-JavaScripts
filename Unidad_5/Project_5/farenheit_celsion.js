const number = [];

const response = () => { 
    const num = parseInt(prompt('Ingrese los grados farenheit que desea convertir a Celsios: '));
    number.push(num)
    return num;
};

const convertion = () => {
    const convertions = number.map( result => 5/9 * (result - 32)); 
    console.log(`El ${numero}°F en Celcios es: ${convertions}C`); 
}
const numero = response();
convertion.call(numero);


