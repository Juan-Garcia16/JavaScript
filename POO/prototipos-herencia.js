//La pripiedad protottipo solo existe en funciones de objetos, clases y en funciones constructoras 

//las instancias no tienen la propiedad de prototipo
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('El animal emite un sonido')
    }
}

//Herencia
//Se pueden utilizar metdods y propiedades de una clase que ya existe
class Perro extends Animal { //La clase perro va a extender de la clase animal
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //utiliza el nombre y el tipo de animals
        this.raza = raza //this de Perro
    }
    emitirSonido() { //se rescribe de animals porque es lo adecuado
        console.log(`El perro ladra`) 
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro('Boby', 'perro', 'Pug')
console.log(perro1)
perro1.correr() //esta usando el nombre descrito en Animals, hace uso de su propiedad heredada 
perro1.emitirSonido()