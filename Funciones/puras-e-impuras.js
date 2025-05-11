//FUNCIONES PURAS
//Dada una misma entrada, siempre obtendremos la misma salida
//No producen efecto secundarios

//Side effects (efectos secundarios), hacen que las funciones puras dejen de ser puras
//1. Modificar variables globales
//2. Modificar parametros de una funcion
//3. Solicitudes http (llamados a APIs)
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM (acceder o hacer alguna consulta)
//6. Obtener la hora actual por ejemplo

//estructura funcion pura
function sum (a, b) { //misma entrada misma salida, no hay ningun side effect
    return a + b
}
sum(4, 5)

//funcion impura (imprimir pantalla)
function sum (a, b) {
    console.log('A: ', a)
    return a + b
}
sum(4, 5)

let total = 0
console.log(total)

function sumWithSideEffect (a) {
    total += a
    console.log('xd', total)
}
sumWithSideEffect(4)
console.log(total)
console.log('prueba', total)

/*salida:
A:  4
A:  4
0
xd 4
4
prueba 4
 */