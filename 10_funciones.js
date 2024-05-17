// Definicion de una funcion que calcule el producto con su descuento.
function Calculate (price, discountPercentage){
    const discount = (price * discountPercentage) / 100; // Calcula el monto del descuento.

    const calculate = price - discount; // Calcula el precio con descuento restando el descuento del precio original.
    return calculate //Devuelve el precio con el descuento.
}

const originalPrice = 100; // Precio original
const discountPercentage = 20; // El descuento

const finalTotal = Calculate(originalPrice, discountPercentage) // LLama a la funcion para calcular el producto con el descuento.

console.log(`El precio original es: ${originalPrice}`) // El precio original es: 100
console.log(`El descuento es : ${discountPercentage}%`) // El descuento es : 20%
console.log(`El total con el porcentaje es :$${finalTotal}`) //El total con el porcentaje es :$80
