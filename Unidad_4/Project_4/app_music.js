let listMusic = ['Toy en el mic', 'La receta', 'Mientes'];

function Peticiones () {
    alert(`Estas son tus opciones: add y remove.`)
    const music = prompt('Ingresa la musica que deseas agregar en tu Playlist: ');
    return music;
}

function add(music){
    const addMusic = 'add'

    if (music === addMusic){
        listMusic.shift();
        alert(`${music} Fue agregado exitosamente en tu Playlist`);
    }else if (listMusic.includes(music)){
        alert(`Oh! La musica ${music}, ya existe en la Playlistm no es posible que se agregue`);
    }else{
        alert('No has ingresado nada en el campo de agregar');
    }
}

function remove(music){
    const removeMusic = 'remove';

    if (music === removeMusic){
        alert(`Seguro que quieres eliminar esta musica: ${music}? Yes/No`);
        const responseRemove = prompt('Ingresa Yes/No: ');
        if (responseRemove === 'yes'){
            listMusic.unshift();
        }else {
            alert('Ok! No se eliminara la musica.')
        }
    }
}

function exit(music){
    const exit = 'exit'

    if (music === exit){
        window.exit()
    }
}


const music = Peticiones();
const exitr = exit(music);

while(music === exitr){
    add(music);
    remove(music);
}



