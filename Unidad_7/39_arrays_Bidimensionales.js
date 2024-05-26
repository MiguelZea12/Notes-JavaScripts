// Array unidimensional.
let array1D = [1, 2, 3];

// Arrat Bidimensional.
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 10]];

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
];

// Reemplazar un numero del array.
matriz[2][1] = 2; // El primero es el numero de la fila, el segundo es el numero de la columna.
console.log(matriz) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 2, 10 ]]. 


// Acceder a un valor.
let values = matriz[2][1];
console.log(values); // 2

// Que itere todos los valores de la matriz.

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j ++) {
        console.log(matriz[i][j]); 
    }
}

// Copiar matriz.

function copyMatriz () {
    let newMatriz = []
    for (let i = 0; i < matriz.length; i++) {
        newMatriz[i] = [...matriz[i]];
    }
    console.log(newMatriz); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 2, 10 ] ].
}
copyMatriz ();

// Encontrar un valor en la matriz.

function Vmatrix (matriz, value) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j ++) {
            if (matriz[i][j] === value){
                return true;
            } 
        }
    }
    return false;
}

console.log(Vmatrix(matriz, 3)); // true