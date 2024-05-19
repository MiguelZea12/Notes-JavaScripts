function Equipo (name, country, mensaje) {
    this.name = name,
    this.country = country,
    this.mensseger = function () {
        console.log(`El equipo de ${name}, quedo campeon en ${country}, ${mensaje}`)
    }
}

const barcelona = new Equipo('Barcelona', 'España', 'Felicitaciones por ganar la Liga')
const realmadrid = new Equipo('Real Madrid', 'España', 'Felicidades por ganar la Liga')
barcelona.mensseger()
realmadrid.mensseger()


