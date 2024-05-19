// Metodo call

function Dog (owner, addres) {
    console.log(`Hola yo me llamo ${this.dogname}, y estoy vivendo con ${owner}
    y mi direccion es ${addres}`)
}
const owner = 'Alejadro Zea'
const addres = 'reales tamarindos'
const NameDog = {
    dogname : 'Gonzalo'
}

Dog.call(NameDog, owner, addres)

// Metodo apply

const ArrayObject = [owner, addres]
Dog.apply(NameDog, ArrayObject)

// Metodo bind.

const bingObject = Dog.bind(NameDog, owner, addres)
bingObject()



// Otro ejemplo

function Cat (Person) {
    console.log(`Soy una gata callejera y mi nombre es ${this.name}, llevo con vida ${this.age} y vivo con ${Person.namePerson} que tiene ${Person.age} de edad
    y se dedica a la area de ${Person.dedication}`)
}

const CatInformation = {
    name : 'Lily',
    age : '1 Año',
}

const Person = {
    namePerson : 'Alejandra Zea',
    age : 23,
    dedication : 'Medicina'
}

Cat.call(CatInformation, Person )

