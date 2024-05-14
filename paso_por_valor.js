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

//paso por referencia

let fruta = ['Pera']
fruta.push('Manzana') //Añade la manzana al array
console.log(fruta) // ['Pera', 'Manzana']

let panes = ['🍞', '🥯']
let copiaPan = panes //El mismo contenido de la variable panes
panes.push('🥐', '🥖') //Se añade los emoticones a panes y a la vez se muestra en copiaPan

console.log(panes, copiaPan) //[ '🍞', '🥯' , '🥐', '🥖' ] [ '🍞', '🥯' , '🥐', '🥖' ]