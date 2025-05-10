let string1 = 'Hola mundo'
let string2 = 'Javascript es xd'
//con conmilla invertido se pueden concatenar strings
let string3 = `${string1} feliz :), ${string2}`
//otra forma de concatenar
let string4 = string1 + ' ' + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

//tamano de strings y manejos de min mayus
let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length) //longitud de la cadena
console.log(frase[1]) //caracter en posicion n
console.log(frase.toLowerCase()) //cadena en minus
console.log(frase.toUpperCase()) //cadena en mayus
console.log(frase.substring(0, 10)) //imprimir desde un caracter hasta otro n+1