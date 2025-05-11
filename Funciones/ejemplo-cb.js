function operar (a, b, callback) {
    return callback(a, b)
}

function sumar (a, b) {
    return a + b
}

function multiplicar (a, b) {
    return a * b
}

console.log(operar(5, 3, sumar))
console.log(operar(5, 3, multiplicar))