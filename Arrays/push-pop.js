// Methods that modify the original array (Mutability).

// push()

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia') // Obtiene la longitud nueva del array

console.log(countries) //array actualizado
console.log(newCountries) //5

//pop
const removedCountry = countries.pop() // Obtiene el ultimo elemento del array y lo elimina

console.log(countries)
console.log(removedCountry)

console.log('--------------')
//Exercise

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart (){
    console.log('Current cart of books: ', bookCart)
}

function performCartActions (action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook)
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.')
      } else {
        const removedBook = bookCart.pop()
        console.log(`Removed book from the cart: ${removedBook}`)
      }
      break;
    case VIEW_CART_ACTION:
      viewCart()
      break;
    default:
      console.log('Invalid action. Please choose a vaid option.')
  }
}

performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
performCartActions(VIEW_CART_ACTION)
