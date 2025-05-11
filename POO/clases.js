/*Una clase en JavaScript actúa como un blueprint o plano para crear objetos. Imagínalo como un molde, a partir del cual se pueden construir múltiples instancias o copias de un objeto. La definición de clase facilita la estructuración y organización de codificaciones, ya que permite separar claramente las propiedades y los métodos que lo caracterizan.*/

//constructo definde como se deben configurar las propiedades del objeto

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar () {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

const persona1 = new Persona('juan', 20)
const persona2 = new Persona('diego', 22)

console.log(persona1)
persona1.saludar()