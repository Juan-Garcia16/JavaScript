//A base la estructura de un objeto, se pueden crear n objetos

//const persona = {
//    nombre: 'Diego',
//    apellido: 'Garcia'
//}

//La funcion constructora debe tener el nombre dle objeto on su primer letra mayuscula
function Persona (nombre, apellido, edad) {
    this.nombre = nombre; //el nombre del objeto va a ser igual al nombre del parametro
    this.apellido = apellido;
    this.edad = edad 
}

//Instancia: todos los objetos que vengan de la funcion constructora son llamados instancias
const persona1 = new Persona('Juan', 'Garcia', 20);
const persona2 = new Persona('Diego', 'Garcia', 22);

console.log(persona1)
console.log(persona2)

//En caso de querer agregar una nueva propiedad o metodo  al objeto, se puede anadir en la funcion constructora, o por medio de prototype
//Prototype permite que se cree la propiedad para todas las instancias, no se agrega en la funcion constructora, se agraga al prototipo de la funcion, que es una copia de ella que tiene las propiedades inciales del objeto
Persona.prototype.telefono = 3214567812 //por defecto
console.log(persona1)
console.log(persona2) //esto se ve mejor en el navegador


//Forma de anadir una propiedad pero solo para una instancia, no para todos los objetos
persona1.nacionalidad = 'Colombiano'

//Anadir un metodo para todas las instancias
Persona.prototype.saludar = () => console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

persona1.saludar()
persona2.saludar()