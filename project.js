const person = {
    names: 'Miguel Alejandro',
    lastnames : 'Zea Parraga',
    age : 20,
    sex : 'Hombre'
}

const hobbies = {
    hobbie1 : 'Futbol',
    hobbie2 : 'Volleyball',
    hobbie3 : 'Estudiar Programacion',
    hobbie4: 'Escuchar Musica'
}

const conocimiento = [
    'Python avanzado',
    'Flask',
    'django',
    'JavaScripts',
    'Node.js',
    'Nest.js',
    'Expresss',
    'Gestion de proyectos',
    'Scrum Master',
]

const title = {
    ScrumMaster : 'https://platzi.com/p/miguel_alejandro2022/learning-path/12833-rol-de-scrum-master/diploma/detalle/'
}

const redesSociales = {
    gitHub : 'https://github.com/MiguelZea12',
    LinkedIn : 'https://www.linkedin.com/in/miguel-zea-39828b252/'
}

const certificated = {
    cursoProfesionalScrum : 'https://platzi.com/p/miguel_alejandro2022/curso/1750-scrum/diploma/detalle/',
    cursoEntornoDesarrollo : 'https://platzi.com/p/miguel_alejandro2022/curso/6900-configuracion-windows/diploma/detalle/',
    cursoExcelBasico: 'https://platzi.com/p/miguel_alejandro2022/curso/4036-excel-basico/diploma/detalle/',
    cursoGestionEquipoAgil : '',
    cursoHistoriaDeUsuario : '',
    cursoPrincipiosVisualizacion : '',
    cursoScrumMaster : '',
    cursoFundamentosPython : '',
    cursoPythonComprehensions : '',
    cursoFundamentosBaseDatos : '',
    cursoFundamentosIngDatos : '',
    cursoBasicoPython : '',
    cursoCPlusPlus : '',
    cursoPoo : ''
}

const description = `Hola yo soy ${person.names} ${person.lastname}, y tengo ${person.age} años de edad, soy una persona muy extrovertida
estudiosa y mis hobbies favoritos son: ${hobbies.hobbie1}, ${hobbies.hobbie2}, ${hobbies.hobbie3}, ${hobbies.hobbie4}. 
Ademas tengo conocimiento en lenguajes como ${conocimiento[0]}, con Framework ${conocimiento[1]} y ${conocimiento[2]}. 
Por otro lado, estoy adquiriendo conocimientos de ${conocimiento[3]} con sus Frameworks como ${conocimiento[4]}, 
${conocimiento[5]}, ${conocimiento[6]}. Sin olvidar que tengo conocimiento de ${conocimiento[7]} y certificado como ${conocimiento[8]}
`
console.log('--------------DESCRIPCION PERSONAL---------------')
console.log(description.trim())

console.log('-' * 10)
console.log('--------------REDES SOCIALES---------------')
