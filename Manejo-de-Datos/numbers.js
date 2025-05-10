const entero = 100
const decimal = 3.14
//ambos seran de tipo number
console.log(typeof entero, typeof decimal)

//notacion cientifica
const cientifico = 5e3

//infinitos y NaA (not a number)
const infinito = Infinity
const noEsUnNumero = NaN

//puede tener problemas con la presicion de operacions
const operacionDecimal = 0.1 + 0.2 

console.log(operacionDecimal) //0.30000000000000004
//toFixed para especificar cuantos decimales coger
console.log(operacionDecimal.toFixed(1)) //0.3

console.log(operacionDecimal === 0.3) //false (CUIDADO CON ESTE TIPO DE VERIFICACIONES)

//OPERACIONES NUMERICAS AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

//Pequeno ejercicio: un numero aleatorio entre 0 y max
//radom por si solo gener un decimal entre 0 y 1, por lo cual se puede aprochar floor para redondear a entero

function intAleatorio (max){
    let enteroAleatorio = Math.floor(Math.random() * max)
    console.log(enteroAleatorio)
}

intAleatorio(8)