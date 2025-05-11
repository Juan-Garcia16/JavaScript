/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/

function outerFunction () {
    let outerVariable = "I am from outer function"

    function innterFunction () {
        console.log(outerVariable)
    }

    return innterFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice")
closureA("Bob")


//Ejemplo 2:
function crearCajaDeAhorros() {
  let dinero = 0;  // Esta es la "memoria" o estado de la caja

  return function(agregarDinero) {
    dinero += agregarDinero;
    console.log(`Tienes ahora $${dinero} en tu caja de ahorros.`);
  };
}

const miCaja = crearCajaDeAhorros();  // Creamos una nueva caja
miCaja(50);  // Añadimos $50
miCaja(30);  // Añadimos $30 más