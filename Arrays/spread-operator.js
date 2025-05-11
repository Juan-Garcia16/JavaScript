//...
//1. Copiar un array
const originalArray = [1, 2, 3, 4, 5]
const copyOfArray = [...originalArray]

console.log(originalArray)
console.log(copyOfArray)

//2. Combinar arrays
 
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(combinedArray)

//3 Crear array base con elelemntos adicionales
const base = [1, 2, 3]
const arrayWithAditionalElements = [...base, 4, 5, 6]
 
console.log(base)
console.log(arrayWithAditionalElements)

//4. Pasarle parametros a una funcion 
function sum (a, b, c){
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result)

