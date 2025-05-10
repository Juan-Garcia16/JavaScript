const numero = 2
const booleano = true

//js convierte los tipos a su conveniencia a medida que se va interpretando y es necesario
//Conversion implicita (por js)
console.log(numero + booleano) //3

//Conversion explicita (string(), number(), etc)

//EXPLICIT TYPE CASTING
const string = '42'
const integer = parseInt(string)
console.log(string, typeof string)
console.log(integer, typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(stringDecimal, typeof stringDecimal)
console.log(float, typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2) //base 2
console.log(decimal, typeof decimal)

//IMPLICIT TYPE CASTING
 const sum = '5' + 14
 console.log(sum)
 const sumInverse = 14 + '5'
 console.log(sumInverse)
 //ambos  casos los maneja como string y los concatena 

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log('---------------------')
//todos concatenan a string
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log('---------------------')
console.log(numberValue + stringValue) //concatena
console.log(numberValue + numberValue) //suma
console.log(numberValue + booleanValue) //suma
console.log('---------------------')
console.log(booleanValue + stringValue) //concatena
console.log(booleanValue + numberValue) //suma
console.log(booleanValue + booleanValue) //suma

//si hay string concatena, no hay string, suma