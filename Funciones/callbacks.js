/*🧠 ¿Qué es un callback?
Un callback es simplemente una función que se pasa como argumento a otra función, para que sea ejecutada más adelante. 

🔧 ¿Por qué se usan?
Para ejecutar código después de que algo haya pasado (como esperar que termine un proceso).
Para hacer el código más flexible y reutilizable.
*/

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}

function procesarEntradaUsuario (callback) {
    const nombre = 'Juan Pablo'
    callback(nombre) // aquí se ejecuta el callback con ese valor
    console.log('prueba')
}

procesarEntradaUsuario(saludar)
