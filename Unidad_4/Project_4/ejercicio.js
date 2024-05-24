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

        // El primer caso por si el usuario llegase a querer añadir un libro.
        case 'add':
            const newBook = prompt('Ingresa el nombre del libro que deseas añadir: ').toLocaleLowerCase(); 
            if (books.includes(newBook)) {
                alert(`El libro ${newBook} ya está en el stack`); 
            } else {
                books.push(newBook);
                alert(`Ya se ha incluido el libro ${newBook} al stack`); 
            }
            break;        

        // El segundo caso por  si el usuario llegase a querer eliminar un libro.
        case 'remove':
            if (books.length > 0) {
                books.pop(); 
            } else {
                alert('No hay libros para eliminar'); 
            }
            break;

        // El tercer caso por si el usuario llegase a querer ver todos los libros de su Stack.
        case 'all':
            console.log(books); 
            break; 
        
        // El cuarto caso por si el usuario quiere salir de la app.
        case 'exit':
            console.log('Adios'); 
            return false;  
        
        // Caso default por si llega a escribir una opcion que no este determinada.
        default:
            alert('No escogiste una opción válida');
    }
    return true;  
}

// Loop para correr la app.
let books = []; 
let running = true; 
while (running) {
    const userAction = action(); 
    running = app(userAction); 
}
