// Encontrar Índices de Subcadena.

const text = 'Hola me llamo Miguel Alejandro Zea Parraga, soy estudiante de la Pontificia Universidad Catolica del Ecuador - Sede Manabi de Portoviejo.'

function textUbic (texts) {
    const ubic = text.includes(texts);
    if (ubic === true) {
        console.log(text.indexOf(texts));
        console.log(text.lastIndexOf(texts));
    } else {
        console.log(`No existe la palabra ${texts}`);
    }
}


textUbic('de');