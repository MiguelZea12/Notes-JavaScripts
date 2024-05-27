// Ejemplo de herencia.

class Person {
    constructor (name, age, country) {
        this.name = name,
        this.age = age,
        this.country = country
    };

    saludar() {
        console.log(`Hola la persona se presenta`);
    };
};

class Enfermero extends Person {
    constructor (name, age, country, specialty) {
        super(name, age, country)
        this.specialty = specialty;
    }

    saludar() {
        console.log(`Hola me llamo ${this.name} y soy de ${this.country} y me mude a Ecuador a los ${this.age}, donde me especialice de ${this.specialty}`);
    }
}

const person1 = new Enfermero('Alejandra', 23, 'Colombia', 'Cirujana');
console.log(person1);
person1.saludar(); // age, country

// Crear un nuevo metodo debe de ser asi: Esto se debe ya que no se puede crear metodos en una instancia, si no del constructor.

Enfermero.prototype.nuevoMetodo(console.log('Nuevo metodo'))
    
