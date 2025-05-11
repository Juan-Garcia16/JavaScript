//Funcion clasica
const greeting = function (name) {
  return `Hi, ${name}`
}

// Arrow function - explicit return (indicamos su retorno)
const newGreeting = (name) => {
  return `Hi, ${name}`
}

// Arrow function - implicit return 
const newGreetingImplicit = name => `Hi, ${name}` 
//en este caso no es necesario el () ya que se trata de solo un parametro

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`


//relacion de las arrow con el contexto de ejecucion (this
//Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says ${message}`)
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsability')
//Uncle Ben says With great power comes great responsability
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus') 
//undefined says Beware of Doctor Octopus si se utiliza el this en el metodo del objeto