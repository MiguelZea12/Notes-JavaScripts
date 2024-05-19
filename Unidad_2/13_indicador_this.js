// Ejemplo de perro. -- Enlace implicita

const home = {
    name : 'Zeus',
    menssegeDog : function () {
        console.log(`Hola soy ${this.name}`)
    }
}

home.menssegeDog()

// Enlace Explicita.    

function dog (addres, owner) {
    console.log(`Hola soy ${this.names}, mi dueño es ${owner} y es super genial, ademas mi direccion de la casa es por la ${addres}`)
}
const name1 = {
    names : 'Mateo',
}
const addres = 'Avenidad manabi';
const owner = 'Zea';

dog.call(name1, addres, owner ) // Hola soy Mateo.


