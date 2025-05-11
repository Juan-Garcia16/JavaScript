//Capacidades que tienen las funciones al igual que otros objetos
//1. Pasar funciones como argumentos (callback: una funcion que se pasa como argumento)
/*
function a () {}
function b (a) {}
b(a)

//2. Retornar funciones
function a () {
    function b () {}
    return b
}

//3. Asignar funciones a variables, el nombre de la funcion pasaria a ser a 
// (Expresion de funcion)
const a = function () {}

//4. Tener propiedades y metodos
//el contexto de ejecucion de a pasa a ser el objeto
function a () {}
const obj = {}
a.call(obj)

//5. Anidar funciones (Nested functions)

function a () {
    function b () {
        function c () {
            //se puede llamar funciones dentro de ellas mismas, acceder a las variables que tienen las funciones grandes, desde c puedo acceder a propiedades de a o b
        }
        c()
    }
    b()
}
a()
*/
//Es posible almacenar funciones en objetos???

//que cuando el cohete despegue, el mensasje sea mostrados
const rocket = {
    nombre: 'Falcon 9',
    launchMessage: function launchprueba () {
        console.log('🔥')
    }
}

rocket.launchMessage()
console.log(rocket.nombre) // Falcon 9

const claves = Object.keys(rocket) // Pasa las propiedades a una lista
console.log(claves) // [ 'nombre', 'launchMessage' ]
console.log(claves[0]) // nombre

/*Las funciones pueden realizar tareas y calcular valores y para calificar como función debe tomar alguna entrada y devolver una salida.

Un método es una función asociada a un objeto específico.

Los métodos están ligados a un objeto y se llaman en el contexto de ese objeto.

por lo tanto, un método es esencialmente una función que opera sobre propiedades o comportamientos de un objeto.*/