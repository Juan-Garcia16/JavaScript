/*
ESTADOS DE UNA PROMESA
-pending (dependiente): cuando la promesa se va a crear
-fullfilled: cuando la promesa se resuelva, bueno o malo pero se resuelve
-rejected: cunado la promesa no se resolvio

callback 2 tipos
-resolve: cuando se resuelve
-reject: cuando no se puede resolver

Metodos
-then: cuando la promesa se resuelve cuando ya esta fullfilled
-catch: cuando la promesa no se resuelve, aqui podemos obtener el error
 */
/* PROBAR DESPUES
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

const promesa = new Promise((resolve, reject) => { //resultados posibles callbacks
    setTimeout(() => {
        let operationSuccssful = true //codigo de api simulado

        if(!operationSuccssful){
            resolve('La operacion fue exitosa') //caso de exito
        } else {
            reject('Fallo en la operacion') //caso de fracaso
        }
    }, 2000) //2 segundos tiempo de peticion
})

promesa //forma de validar la promesa
    .then(successMessage => console.log(successMessage)) //si funciona
    .catch(errorMessage => console.log(errorMessage)) //si no funciona
//then y catch son necesarios para poder ejecutar el resultado que venga de la promesa

/*
Promesas en JavaScript

Las promesas (promises) en JavaScript son un concepto fundamental para manejar operaciones asincrónicas. Permiten a los desarrolladores escribir código más limpio, organizado y manejable al lidiar con tareas que se ejecutan en el tiempo, como la recuperación de datos de una API o la ejecución de tareas en segundo plano.

¿Qué es una operación asincrónica?

Una operación asincrónica es una tarea que se inicia y luego se ejecuta en un momento posterior, sin bloquear el hilo principal de ejecución. Esto permite que el programa continúe ejecutando otro código mientras la operación asincrónica se completa.

¿Cómo funcionan las promesas?

Las promesas se basan en dos estados principales:

Pendiente: La promesa aún no se ha completado ni rechazado.
Resuelta: La operación asincrónica se completó con éxito y se devuelve un valor.
Rechazada: La operación asincrónica falló y se genera un error.
Una promesa se crea utilizando el constructor Promise(). Dentro del constructor, se pasa una función asíncrona como argumento. Esta función asíncrona, también conocida como función de resolución o rechazo, recibe dos argumentos:

Resolve: Una función que se llama cuando la operación asincrónica se completa con éxito. Se le pasa un valor como parámetro, que representa el resultado de la operación.
Reject: Una función que se llama cuando la operación asincrónica falla. Se le pasa un error como parámetro, que representa la causa del fallo.
Encadenamiento de promesas:
Las promesas se pueden encadenar utilizando los métodos then() y catch(). El método then() se utiliza para procesar el valor devuelto cuando la promesa se resuelve, mientras que el método catch() se utiliza para manejar errores.
 */




