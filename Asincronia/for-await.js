//Multiples peticiones
//las peticiones podrian estar en un array para que unas vez se resuelvan regresen al call stack

//vamos a hacer la peticion a cada una de las 3
const urls = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode'
]

async function fetchNewData () {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchNewData()

/*
Es aconsejable no usar await dentro de bucles innecesariamente, ya que esto puede bloquear el event loop. Si necesitas realizar múltiples operaciones asíncronas dentro de un bucle, considera usar Promise.all o manejar las promesas en paralelo.

// Evita esto:

for (let url of urls) {

let respuesta = await fetch(url);

// procesar respuesta

}

// En su lugar:

const promesas = urls.map(url => fetch(url).then(res => res.json()));

const resultados = await Promise.all(promesas); */