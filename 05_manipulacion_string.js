// String Primitivos

const StringPrimitive = 'Hola soy un string primitivo'
console.log(typeof(StringPrimitive))
                                                                // Los String primitivos no son mutables 
const StringPrimitive1 =  String('Hola soy un string primitivo')
console.log(typeof(StringPrimitive1))

// Strings como objetos.

const StringObject = new String('Hola soy un string objeto')    //Los String como objeto si son mutables
console.log(typeof(StringObject))


// Manipulacion

const text = 'Hola mundo de Software'

console.log(text[2]) // El [2] indico el indice que deseo mostrar, en este caso seria la letra l.
console.log(text.charAt(2)) // Añadiendo la funcion charAT(), haria lo mismo que el anterior.
console.log(text.indexOf('a')) // El metodo indexOf() te muestra donde esta ubicado el index, en este caso es en el 3.
console.log(text.indexOf('Hola'))// En este ejemplo daria desde donde comienza.
console.log(text.lastIndexOf('o'))// El metodo lastIndexIf(), indica donde esta ubicado la ultima letra que uno escriba. En este caso mostraria 15.
console.log(text.slice(0, 4))// El metodo slice(), recibe dos parametros para ver desde y hasta donde quieres mostrar. En este caso mostraria Hola.
console.log(text.split(' '))// El metodo split(), separa las palabras de acuerdo a lo que le indiques, en este a partir de los espacios que existen.
console.log(text.toLocaleUpperCase())// El metodo toLocaleUpperCase(), hace mayuscula todo el string.
console.log(text.toLocaleLowerCase())// El metodo toLocaleLoweCase(), hace minuscula todo el string.

// Otro ejemplo de manipulacion
const text2 =  ' Hola Mundo de Software '
console.log(text2.trim())// El metodo trim(), elimina esos espacios que llegan a existir en el string.
console.log(text2.replace('Software', '💻'))// El metodo replace(), indicas lo que deseas reemplazar si llegase a existir, y indicas con que lo reemplazaria.


