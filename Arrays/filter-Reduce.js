//Filter y Reduce no modifican el array original

//Filter crea un nuevo array con elementos que cumplen una condicion dada por una funcion
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0) //numeros pares

console.log(numbers)
console.log(evenNumbers)

//Reduce ejecuta una funcion reduce sobre cada elemento del array, devolviendo como resultado un unico valor resultante de todo//acumular es el resultado parcial, valor actual es cada elemento del array
/*
acumulador: el valor que se va "acumulando" (resultado parcial).
valorActual: cada elemento del array.
valorInicial: (opcional) valor inicial del acumulador.
 */
// array.reduce((acumulador, valorActual) => {logica}, valorInicial)

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum) // 15

//Segundo ejemplo de reduce, que tanto se repite una palabra en un array
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){ //cuando ya existan
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {}) //como valor inicial un objeto vacio

console.log(words)
console.log(wordFrecuency)
