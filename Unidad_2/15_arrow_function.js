// Funciones tradicionales.
function tradicional (name) {
    console.log(`Hola me llamo ${name}`)
}
tradicional('Miguel')

// Arrow function.

const arrowFuntion = name => `Me llamo ${name}` // Cuando exista solo un parametro, se puede omitir el parentesis
const arrorFuntionTwo = (name, lastmame) => `Hola me llamo ${name} ${lastmame}` // Cuando existe mas de un parametro, se debe de colocar el parentesis.
console.log(arrowFuntion('Alejandro')) // Me llamo Alejandro.
console.log(arrorFuntionTwo('Miguel', 'Alejandro')) // Hola me llamo Miguel Alejandro


// Otro ejemplo.

const person = {
    name : 'Alejandro',
    messeger : function (mensaje) {
        console.log(`Hola mi nombre es ${this.name}, el mensale es ${mensaje}`) // Hola mi nombre es Alejandro, el mensale es Eres increible
    },
    menssegerarror : mensaje => console.log(`${this.name}, el mensaje es ${mensaje}`)// undefined, el mensaje es Eres el mejor
    
}
person.messeger('Eres increible')
person.menssegerarror('Eres el mejor')