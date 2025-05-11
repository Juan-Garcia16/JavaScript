//Es el paradigma de la programacion que permite axtraer cosas de la realidad a la progracion
//permitiendo asignar propiedades y metodos a un objeto

const persona = {
    name: 'Juan Pablo',
    age: 20,
    direction: { //objeto dentro de objeto
        calle: 'Alamos',
        ciudad: 'Pereira'
    },
    saludar: name => console.log(`Hi, my name is ${persona.name}`),
    alert(){
        console.log(`warning ${persona.direction.ciudad}`)
    }
}

console.log(persona)
persona.saludar(persona.name)
persona.alert(persona.direction.ciudad)

//Se pueden adicionar dinamicamente propiedades y metodos a los objetos
persona.status = 'alone'
persona.despedir = message => console.log(`bye ${persona.name}, ${message}`)

console.log('--------------')
console.log(persona)
persona.despedir('we sorry it')

//De forma inversa, podemos borrar propiedades y metodos de un objeto con delete
persona.prueba = 'esta propiedad sera eliminada'
console.log(persona)
delete persona.prueba
console.log(persona)
