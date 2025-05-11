function calculadora (a, b, callback) {
    console.log('Resultado: ', callback(a, b))
}

function sumar (a, b) {
    return a + b
}

function restar (a, b) { 
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

calculadora(10, 5, sumar);       // Resultado: 15
calculadora(10, 5, restar);      // Resultado: 5
calculadora(10, 5, multiplicar); // Resultado: 50