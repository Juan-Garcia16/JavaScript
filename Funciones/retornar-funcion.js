/*
🔁 ¿Qué significa retornar una función?
Significa que una función devuelve otra función como resultado.
Esa función retornada se puede guardar, ejecutar más adelante, o personalizar según sea necesario.

🎯 ¿Para qué sirve?
Para crear funciones más específicas (funciones fábrica).
Para hacer configuración previa (como currying o closures).
Para tener modularidad y reutilización. */

function saludar() {
  return function() {
    console.log("Hola Juan Pablo");
  }
}

const saludoPersonal = saludar(); // esto guarda la función retornada
saludoPersonal(); // ahora la ejecutas


//ejemplo 2
function crearSaludo(nombre) {
  return function() {
    console.log("Hola " + nombre);
  }
}

const saludoJuan = crearSaludo("Juan");
saludoJuan(); // Hola Juan

const saludoAna = crearSaludo("Ana");
saludoAna(); // Hola Ana

//Ejemplo 3
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  }
}

const porDos = crearMultiplicador(2);
const porCinco = crearMultiplicador(5);

console.log(porDos(4));  // 8
console.log(porCinco(4)); // 20


//Ejemplo 4
function crearMensaje (tipo) {
    return function (texto) {
        console.log(`[${tipo.toUpperCase()}] ${texto}`)
    }
}

// Creamos funciones especializadas
const mensajeError = crearMensaje("error")
const mensajeExito = crearMensaje("exito")
const mensajeInfo = crearMensaje("info")

// Usamos esas funciones
mensajeError('No se pudo conectar con el servidor')
mensajeExito('Usuario registrado correctamente')
mensajeInfo('Cargando datos, por favor espere')