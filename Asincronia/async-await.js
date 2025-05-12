//otra forma de trabajr promesa asincronas
/*
Async y await devuelven una promesa, 
es una formas mas legible de hacer una promesa

*/

//forma de uso de un fetch, regresa una promesa
/*function fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
fetchData()
*/

//gracias a async, ya no se regresa una promesa
//try: codigo que pasa
//catch: nos regresa el error de lo que no funciona
async function fetchData() {
    try {
        //await indica que espera a que se resuelva la promesa fetch
        let response = await fetch('https://rickandmortyapi.com/api/character')
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

/*
Async y Await en JavaScript

Async y await son dos palabras clave introducidas en JavaScript (ES8) para simplificar la programación asíncrona. Antes de su llegada, se utilizaban promesas para manejar operaciones asíncronas, pero el código podía resultar complejo y difícil de leer.

¿Qué es Async?

Async se utiliza para declarar una función como asíncrona.
Una función asíncrona siempre devuelve una promesa.
Dentro de una función async, puedes utilizar la palabra clave await.
¿Qué es Await?

Await se utiliza únicamente dentro de una función async.
Pausa la ejecución de la función hasta que la promesa asociada se resuelva o rechace.
El valor resuelto de la promesa se asigna a la variable que está a la izquierda de await.
Ventajas de usar Async/Await:

Código más legible: El código se parece más a código síncrono, lo que mejora la comprensión.
Manejo de errores más fácil: Puedes utilizar try...catch para manejar errores de las promesas.
Mejor estructuración del código: Facilita la organización del código asíncrono.
En resumen:

Async/await es una sintaxis que hace que el código asíncrono sea más fácil de escribir y leer. Transforma el código asíncrono en un estilo similar al síncrono, lo que mejora la mantenibilidad y legibilidad del código. */