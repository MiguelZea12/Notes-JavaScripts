// Pasar funciones como metodo.

function a () {}
function b (a) {}

// Retornar funciones.

function a () {
    function b() {}

    return b
}

// Asignar funciones a variables.

const a = function (){} // En este caso el nombre de la funcion es 'a'

// Tener propiedad y métodos.

function a (){}
const obj = {}

a.call(Obj)

// Nested Fuction. Concatenar funciones.

function a() {
    function b() {
        function c() {
        }
        c()
    }
    b()
}
a()

// Un objeto ser un funcion.

const rocket = {
    name : 'Apolo',
    lanzamiento : function () {
        console.log('El lanzamiento se ha completado')
    } 
}

rocket.lanzamiento() // El lanzamiento se ha completado