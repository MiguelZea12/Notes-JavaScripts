/*
Crear un programa que simule un stack usando los metodos push y pop. El stack debe guardar una coleccion de libros. El usuario puede realizar las siguientes acciones:
- Agregar un libro al tope del stack
- Sacar un libro del tope del stack
- Mostrar todos los libros

Se debe implementar un loop que permita al usuario realizar estas acciones hasta que decida salir.
*/

// Ingreso de la opcion del usuario.
function action() {
    alert(`Lista de acciones: add, remove, all, exit`);
    let action = prompt('Ingrese la acción que desea realizar: ');
    return action;
}

// Funcionalidad principal de la app con sus opciones.

function app(action) {
    switch(action) {
        case 'add':
            const newBook = prompt('Ingresa el nombre del libro que deseas añadir: ').toLocaleLowerCase(); // Ingresa el nombre del libro que quiera guardad.
            if (books.includes(newBook)) {
                alert(`El libro ${newBook} ya está en el stack`); // Si el libro se repite le da una alerta de que ya existe.
            } else {
                books.push(newBook);
                alert(`Ya se ha incluido el libro ${newBook} al stack`); // Le da una alerta de que ya se almaceno el libro.
            }
            break; // Se termina el primer caso,        
        case 'remove':
            if (books.length > 0) {
                books.pop(); // Si la cantidad de libros supera la de 0, entonces elimina el ultimo elemento,
            } else {
                alert('No hay libros para eliminar'); // si llega a ser 0, le da una alerta de que no hay libro para eliminar.
            }
            break;// Se corta el segundo caso.
        case 'all':
            console.log(books); // Muestra todos los libros.
            break; // Se corta el tercer caso.
        case 'exit':
            console.log('Adios'); // Se despide cuando el usuario quiere teminar.
            return false;  // Indicamos que queremos salir del bucle
        default:
            alert('No escogiste una opción válida'); // Si no escogio una de las opciones, le muestra que no escogio una opcion valida.
    }
    return true;  // Indicamos que queremos seguir en el bucle
}
let books = []; // Array vacio para que se almacenen.
let running = true; // Variable para que siga el bucle.
while (running) {
    const userAction = action(); // Asignamos la funcion action() a una variable.
    running = app(userAction); // Con running le asignamos la funcion app con la variable userAction para que reciba los datos.
}
