//Metodo para extraer porciones de un array, no modifica el array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)) //desde la posicion 2 en adelante (camel)
console.log(animals.slice(2, 4)) //desde la 2 hasta la 4 - 1 (camel - duck)
console.log(animals.slice(1, 6)) //(bison - elephant)
console.log(animals.slice(-2)) //elephan y duck
console.log(animals.slice(2, -1)) //inicia en camel, termina en duck 

