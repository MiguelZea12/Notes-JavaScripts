let listMusic = ['Toy en el mic', 'La receta', 'Mientes'];

function Peticiones() {
    alert(`Estas son tus opciones: add, remove, all y exit.`);
    const music = prompt('Ingresa la opción que deseas ejecutar: ').toLocaleLowerCase();
    return music;
}

function add(music) {
    const addMusic = 'add';

    if (music === addMusic) {
        const newMusic = prompt('Ingresa el nombre de la música que deseas agregar:').toLocaleLowerCase();
        if (listMusic.includes(newMusic)) {
            alert(`Oh! La música ${newMusic} ya existe en la Playlist, no es posible agregarla.`);
        } else {
            listMusic.unshift(newMusic); // Usando unshift para agregar al principio de la lista
            alert(`${newMusic} fue agregado exitosamente a tu Playlist.`);
        }
    }
}

function remove(music) {
    const removeMusic = 'remove';

    if (music === removeMusic) {
        if (listMusic.length > 0) {
            const removedMusic = listMusic.shift(); // Eliminando el primer elemento de la lista
            alert(`${removedMusic} fue eliminado exitosamente de tu Playlist.`);
        } else {
            alert('La Playlist está vacía, no hay música para eliminar.');
        }
    }
}

function ViewAllList(music){
    const viewAllList = 'all';

    if (music === viewAllList){
        console.log(listMusic);
    };
}

function exit(music) {
    const exitCommand = 'exit';
    return music === exitCommand;
}

while (true) {
    const music = Peticiones();
    if (exit(music)) {
        alert('¡Gracias por usar la aplicación! Hasta luego.');
        break;
    }
    add(music);
    remove(music);
    ViewAllList(music)
}



