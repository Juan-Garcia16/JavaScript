//Metodos que iteran sobre el array sin modificarlo

//Map permite aplicar una funcion a cada elemento de array y permite construir un nuevo array con el resultado
const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num) //num pasaria a ser parametro de la funcion a tomar cada elento del array

console.log(numbers)
console.log(squareNumbers) // no modifica el array original

//ForEach al igual que map tambien ejecuta una funcion para cada elemento, pero no devuelve un array, nos devueve un valor

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color.toUpperCase()))

console.log(colors)
console.log(iteratedColors) //undefined ya que no devuelve nada, solo aplica

//EXERCISE Farenheit to Celsius conversion

const temperaturesFarenheit = [32, 68, 95, 212]
const temperatureCelsius = temperaturesFarenheit.map(farenheit => (5/9) * (farenheit - 32))

console.log('Temperatures in Farenheit: ',temperaturesFarenheit)
console.log('Temperatures in Celsius: ', temperatureCelsius)

//EXERSICE sum of elements in an array
const newNumbers = [1, 2, 3, 4, 5]
let sum = 0

newNumbers.forEach(newNumber => sum+= newNumber)

console.log(sum)