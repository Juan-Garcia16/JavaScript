/*
Métodos mutables: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift.

Métodos no mutables: slice, concat, toReversed, slice, toSorted, toSoliced. */

// How to create an Array ?

// 1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]
console.log(recipeIngredients)

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutability
fruits.push('watermelon') //push para adicionar elementos al array al final
console.log(fruits)

//Inmutability
const newFruits = fruits.concat(['grape', 'kiwi']) // concatena elmentos al array
console.log(fruits) //concat no altera el array original
console.log(newFruits)

//Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits); //arroja un booleano
console.log(isArray) //true

//Exercise: la suma de todos lo elementos de un array
const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}

console.log(sum)

let sum2 = 0

for (number2 of numbersArray){
    sum2 += number2
}

console.log(sum2)