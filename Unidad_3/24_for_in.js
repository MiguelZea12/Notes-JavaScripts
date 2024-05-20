/*

        for in

*/

// Se utiliza para iterar un objeto.

const listProduct = {
    computer : 90,
    mouse : 30,
    keyboard : 40,
    earphones : 20
};

for (product in listProduct) {
    console.log(product); // Imprime la lista pero sin sus valores.
};

for (product in listProduct) {
    console.log(`${product} : ${listProduct[product]}`) // imprime la lista con sus valores.
}