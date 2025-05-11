let fruta = 'Pera'

switch (fruta){ // ===
    case 'Papaya':
        console.log('Las papayas cuestan $15');
        break;
    case 'Manzana':
        console.log('Las Manzanas cuestan $3')
        break;
    case 'Mango': //esta validacion funciona como un or
    case 'Mandarina':
        console.log('Los mangos y las mandarinas cuestan $7')
        break;
    default:
        console.log(`Lo sentimos, no contamos con ${fruta}`)
}