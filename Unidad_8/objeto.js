/* Un objeto es una estructura de datos.
que tiene una KEY : VALUES
*/
const person = {
    names : 'Miguel Alejandro',
    lastnames : 'Zea Párraga',
    dni : 231233411,
    direccion : {
        province : 'Manabi',
        city : 'Portoviejo',
        parroquia : '18 de octubre'
    },
    saludar() {
        console.log(`Hola, me llamo ${this.names} y soy de ${this.direccion} es un gusto conocerte`);
    }
}
console.log(person);

// Añadir propiedad.
person.telefono = "099882334";

//Eliminar propiedad.

delete person.dni;

// Agregar metodo.
person.despedior = () => console.log('Adios');

// Ingresar a city.
console.log(person.direccion.city);