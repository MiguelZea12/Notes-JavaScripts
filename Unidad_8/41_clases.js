// Hacer una clase.

class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    saludar () {
        console.log(`Hola me llamo ${this.name} ${this.lastname} y tengo ${this.age} años`);
    }
}

const person1 = new Person('Miguel', 'Zea', 19);

person1.saludar();