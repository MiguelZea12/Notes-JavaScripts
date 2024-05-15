//Creacion de string.

const firstForm = 'Comilla Simple'
const secondForm = "Comilla doble"
const thirdForm = `Comillas curviadas`
console.log(firstForm, secondForm, thirdForm) 

// 1. Concatenación : Operation +.

const name = 'Alejandro'
const lastname = 'Zea'
const country = 'Ecuador'
const presentation = 'Hola yo soy ' + name + ' ' + lastname + ' ' + 'y soy de ' + country              // Existiran problemas con los espacion y por ese motivo se añade 
console.log(presentation)                                                                              // las comillas simples en vacio.

// 2. Concatenación : Template Literals ${}.

const teacher = 'Guillermo Cevallos'
const class_subject = 'Desarrollo de sistemas de informacion'
const semester = 'V semestre'
//Para este uso de concatenacion se utilizarian las comillas cuviadas para poder usas ${}, ayudando a no tener el problema de espacios
const union = `Hola soy ${teacher} y doy la materia de ${class_subject} a los estudiantes de ${semester}`

console.log(union)


// 3. Concatenación : join().

const firstPart = 'Me gusta'
const secondPart = 'mucho'
const thirdPart = 'el encebollado'
const union_join = [firstPart, secondPart, thirdPart]
console.log(union_join.join(' ')) // Las comillas dentro del join es para indicarle el espacion que debe de dejar en cada una de las concatenación.

//4. Concatenación : concat().

const hobby1 = 'Estudiar'
const hobby2 = 'Jugar volley'
const hobby3 = 'Leer libros'
const hobbies = 'En mi tiempo libre me gusta realizar: '.concat(hobby1, ', ', hobby2, ', ', hobby3)
console.log(hobbies)


// Candena de caracteres.

// Formas de asignar.

// 1. Escape alternativo
const first = "I'am Software Engineer"

// 2. Barra invertida. 
const second = 'I\'am Software Enginner'

// 3. Template literals
const third = `I'am Software Enginner`

// Escritura de string largos.

/*
En el vasto reino del código y la luz,
donde objetos y arrays con gracia danzan,
primitivos inmutables guardan su virtud,
y funciones sabias en silencio avanzan.
Con let y const, variables toman vida,
un sinfín de posibilidades en cada línea escrita,
JavaScript, lenguaje ágil, siempre nos invita,
a explorar su magia infinita y su esencia bendecida.
*/

// Barra invertida \n con concatenación.

const poem1 = 'En el vasto reino del código y la luz,\n' +
                'donde objetos y arrays con gracia danzan,\n'+
                'primitivos inmutables guardan su virtud,\n'+
                'y funciones sabias en silencio avanzan.\n'+
                'Con let y const, variables toman vida,\n'+
                'un sinfín de posibilidades en cada línea escrita,\n'+
                'JavaScript, lenguaje ágil, siempre nos invita,\n'+
                'a explorar su magia infinita y su esencia bendecida.\n'
console.log(poem1)

// Barra invertida \n sin concatenación.

const poem2 = 'En el vasto reino del código y la luz,\n\
               donde objetos y arrays con gracia danzan,\n\
                primitivos inmutables guardan su virtud,\n\
                y funciones sabias en silencio avanzan.\n\
                Con let y const, variables toman vida,\n\
                un sinfín de posibilidades en cada línea escrita,\n\
                JavaScript, lenguaje ágil, siempre nos invita,\n\
                a explorar su magia infinita y su esencia bendecida.'
console.log(poem2)

// Con template literals

const poem3 = `En el vasto reino del código y la luz,
donde objetos y arrays con gracia danzan,
primitivos inmutables guardan su virtud,
y funciones sabias en silencio avanzan.
Con let y const, variables toman vida,
un sinfín de posibilidades en cada línea escrita,
JavaScript, lenguaje ágil, siempre nos invita,
a explorar su magia infinita y su esencia bendecida.`

console.log(poem3)


