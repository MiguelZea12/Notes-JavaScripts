// Paso por valor
let x = 1
let y = true
let z = null

let a = x
let b = y
let c = z
console.log(x, y, z, a, b, c)// 1, true, null, 1, true, null

a = 12
b = false
c = undefined
console.log(x, y, z, a, b, c) //1, true, null, 12, false, undefined

//tipo de datos complejos - paso por referencia

let fruta = ['Pera']
fruta.push('Manzana') //Añade la manzana al array
console.log(fruta) // ['Pera', 'Manzana']

let panes = ['🍞', '🥯']
let copiaPan = panes //El mismo contenido de la variable panes
panes.push('🥐', '🥖') //Se añade los emoticones a panes y a la vez se muestra en copiaPan

console.log(panes, copiaPan) //[ '🍞', '🥯' , '🥐', '🥖' ] [ '🍞', '🥯' , '🥐', '🥖' ]


// tipo de datos complejos - paso por referencia

let juguetes = {
    robot : '🤖'
}
let jugue = juguetes
jugue.robot = '🎮' //Cambia el emoji de robot, ya que jugue y juguetes estan conectados
console.log(jugue) //{ robot: '🎮' }

//Otro ejemplo

let mascotas = {
    perro : '🐕',
    gato : '🐈'
}
mascotas.conejo = '🐇' // Lo que va hacer es que va a crear uno nuevo dentro de la variable.
console.log(mascotas) //{ perro: '🐕', gato: '🐈', conejo: '🐇' }