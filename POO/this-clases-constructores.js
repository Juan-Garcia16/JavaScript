//this, el objeto mismo, o clase misma

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const person1 = new Persona('Alice', 25) 

person1.nuevoMetodo = function () {
    console.log(`Mi nombre es ${this.nombre}`) //this hace referecia al nombre de persona1
}

person1.nuevoMetodo()