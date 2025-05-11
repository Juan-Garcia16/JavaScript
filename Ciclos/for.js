//FOR clasico
let list = ['eat', 'sleep', 'code', 'repeat']
for(let i = 0; i < list.length; i++){
    console.log(list[i])
}

/*FOR OF
arrays, strings [algo]
por cada variable del objeto realizar el codigo
for (varable of objeto){ 
    codigo
}
*/
let listFrutas = ['manzana', 'banano', 'uva', 'pera']
//Util para cada vez que se tenga un variable de objetos iterables, strung array
for (fruta of listFrutas){ //se para cunado ya no exista ningun objeto en la lista 
    console.log(fruta)
}


/*FOR IN
Para iterar sobre objetos enumerables no iterables, como object, que tiene propiedad: valor
por cada propiedad en el objeto, ejecutar el codigo
*/

const listaDeCompras = {
    manzana: 5,
    pera: 2,
    naranja: 4,
    uva: 1
}

for(producto in listaDeCompras){ 
    console.log(producto, listaDeCompras[producto]) //con producto solo se imprimie la propiedad, producto se comporta como un numero index
}

for(producto in listaDeCompras){
    console.log(`Producto: ${producto} | Precio: ${listaDeCompras[producto]}`)
}

//En cuanto a while y do-while es igual a otros lenguajes
