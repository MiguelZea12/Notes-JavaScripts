// Informacion personal.
const person = {
    names: 'Miguel Alejandro',
    lastnames : 'Zea Parraga',
    age : 20,
    sex : 'Hombre'
}

// Mis pasatiempos.
const hobbies = ['Futbol', 'Volleyball', 'Estudiar Programacion', 'Escuchar Musica']

// Mis conocimientos.
const conocimiento = ['Python avanzado',  'Flask', 'django', 'JavaScripts', 'Node.js', 'Nest.js', 'Expresss', 'Gestion de proyectos', 'Scrum Master',]

// Titulos.
const title = {
    ScrumMaster : 'https://platzi.com/p/miguel_alejandro2022/learning-path/12833-rol-de-scrum-master/diploma/detalle/'
}

//Redes sociales.
const redesSociales = {
    gitHub : 'https://github.com/MiguelZea12',
    LinkedIn : 'https://www.linkedin.com/in/miguel-zea-39828b252/'
}

//Certificados de la Carrera Scrum Master.
const certificated_scrum_master = {
    ScrumMaster : 'https://platzi.com/p/miguel_alejandro2022/learning-path/12833-rol-de-scrum-master/diploma/detalle/',
    cursoProfesionalScrum : 'https://platzi.com/p/miguel_alejandro2022/curso/1750-scrum/diploma/detalle/',
    cursoGestionEquipoAgil : 'https://platzi.com/p/miguel_alejandro2022/curso/4128-equipos-agiles/diploma/detalle/',
    cursoHistoriaDeUsuario : 'https://platzi.com/p/miguel_alejandro2022/curso/2616-historias-usuario-scrum/diploma/detalle/',
    cursoScrumMaster : 'https://platzi.com/p/miguel_alejandro2022/curso/4129-scrum-master/diploma/detalle/'
}

// Certificados para se Data Engineer (En proceso...)
const certificated_DataEnginner = {
    cursoFundamentosPython : 'https://platzi.com/p/miguel_alejandro2022/curso/4227-python/diploma/detalle/',
    cursoPythonComprehensions : 'https://platzi.com/p/miguel_alejandro2022/curso/4260-python-funciones/diploma/detalle/',
    cursoFundamentosBaseDatos : 'https://platzi.com/p/miguel_alejandro2022/curso/1566-bd/diploma/detalle/',
    cursoFundamentosIngDatos : 'https://platzi.com/p/miguel_alejandro2022/curso/5514-course/diploma/detalle/',
    cursoPrincipiosVisualizacion : 'https://platzi.com/p/miguel_alejandro2022/curso/2195-visualizacion-datos/diploma/detalle/',
}

// Certificados para se Data Anality (En proceso...)
const certificated_DataAnality = {
    cursoExcelBasico: 'https://platzi.com/p/miguel_alejandro2022/curso/4036-excel-basico/diploma/detalle/',
    cursoPrincipiosVisualizacion : 'https://platzi.com/p/miguel_alejandro2022/curso/2195-visualizacion-datos/diploma/detalle/',
}

// Otros certificados.
const otherCertificated = {  
    cursoEntornoDesarrollo : 'https://platzi.com/p/miguel_alejandro2022/curso/6900-configuracion-windows/diploma/detalle/',
    cursoBasicoPython : 'https://platzi.com/p/miguel_alejandro2022/curso/1937-python/diploma/detalle/',
    cursoCPlusPlus : 'https://platzi.com/p/miguel_alejandro2022/curso/2372-c-plus-plus/diploma/detalle/',
    cursoPoo : 'https://platzi.com/p/miguel_alejandro2022/curso/1474-oop/diploma/detalle/'
}

// Una descripcion breve mia.

const description = `Hola yo soy ${person.names} ${person.lastname}, y tengo ${person.age} años de edad, soy una persona muy extrovertida
estudiosa y mis hobbies favoritos son: ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}, ${hobbies[3]}. 
Ademas tengo conocimiento en lenguajes como ${conocimiento[0]}, con Framework ${conocimiento[1]} y ${conocimiento[2]}. 
Por otro lado, estoy adquiriendo conocimientos de ${conocimiento[3]} con sus Frameworks como ${conocimiento[4]}, 
${conocimiento[5]}, ${conocimiento[6]}. Sin olvidar que tengo conocimiento de ${conocimiento[7]} y certificado como ${conocimiento[8]}.`

// Mis redes sociales.
const redes = `GitHub : ${redesSociales.gitHub}
LinkedIn : ${redesSociales.LinkedIn}`

// Carreras terminadas.
const carreras_Description = `Scrum Master : ${title.ScrumMaster}`

// Mis certificados y licencias.
const certification_description = `SCRUM MASTER.
Scrum Master : ${certificated_scrum_master.ScrumMaster}.
Curso de Gestion de Equipo Agil : ${certificated_scrum_master.cursoGestionEquipoAgil}.
Curso de Historia de Usuario : ${certificated_scrum_master.cursoHistoriaDeUsuario}.
Curso Profesional de Scrum : ${certificated_scrum_master.cursoProfesionalScrum}.
Curso de Scrum Master : ${certificated_scrum_master.cursoScrumMaster}.

Data Engineer(En proceso...).
Curso de Fundamentos de Base de Datos : ${certificated_DataEnginner.cursoFundamentosBaseDatos}.
Curso de Fundamentos de Ingenieria de Datos : ${certificated_DataEnginner.cursoFundamentosIngDatos}.
Curso de Fundamentos de Python : ${certificated_DataEnginner.cursoFundamentosPython}.
Curso de Python: Comprehensions, Funciones y Manejos de errores : ${certificated_DataEnginner.cursoPythonComprehensions}.
Curso de Principios de Visualizacion de Datos para Business Intelligence : ${certificated_DataEnginner.cursoPrincipiosVisualizacion}.

Data Analyst(En proceso...).
Curso de Principios de Visualizacion de Datos para Business Intelligence : ${certificated_DataAnality.cursoPrincipiosVisualizacion}.
Curso de Excel Basico : ${certificated_DataAnality.cursoExcelBasico}.

Other Certificated.
Curso Basico De Python : ${otherCertificated.cursoBasicoPython}.
Curso Basico De C++ : ${otherCertificated.cursoCPlusPlus}.
Curso de Configuración de Entorno de Desarrollo en Windows : ${otherCertificated.cursoEntornoDesarrollo}.
Curso Basico De POO : ${otherCertificated.cursoPoo}`

// Impresion en la consola
console.log('--------------DESCRIPCION PERSONAL---------------')
console.log(description.trim())

console.log('-------------------------------------------')
console.log('--------------REDES SOCIALES---------------')
console.log(redes)

console.log('-------------------------------------------')
console.log('--------------CARRERAS COMPLETAS---------------')
console.log(carreras_Description)

console.log('-------------------------------------------')
console.log('--------------CERTIFICADOS Y LICENCIAS.---------------')
console.log(certification_description)