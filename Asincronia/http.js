//fetch("https://jsonplaceholder.typicode.com/posts")
//    .then((response) => response.json())
//    .then((data) => console.log(data));

const { use, useActionState } = require("react");

/*
Tenia problemas para entender porque si la funcion sendHTTPRequest espera 3 parametros al brindarle solo 2 funcionaba sin errores.

Al parecer en JavaScript, si una función espera 3 parámetros y solo le das 2, el tercero se vuelve undefined. Cuando se llama a sendHTTPRequest con solo dos parámetros, data se vuelve undefined. Despues, JSON.stringify(undefined) también da undefined. En la configuración de fetch, si body es undefined, simplemente no se envía ningún cuerpo en la solicitud.

Esto está bien para una solicitud GET, que normalmente no necesita un cuerpo. Por eso, aunque falte el tercer parámetro, el código funciona sin errores y hace la solicitud correctamente.

Espero haber ayudado a quien pueda tener mi misma duda. */

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts);

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content);
});

postList.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id;
    console.log(postId);
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

/*
Si como a mi te genero la duda el porque no se brinda de manera explicita un "ID" al momento de realizar el post, te explico porque es:

El servidor, al recibir el post, nota que falta el id y genera uno único para asegurar que cada post tenga un identificador único. Esto facilita el trabajo de los desarrolladores porque no se tiene que crear un id único y evita errores al asegurar que no haya duplicados.

Este id puede ser generado usando diferentes métodos, como:

Incremento Secuencial
UUID (Identificador Único Universal)
Timestamp
Desde las bases de datos:

Las bases de datos relacionales, como MySQL o PostgreSQL, a menudo tienen columnas con la propiedad AUTO_INCREMENT o SERIAL, que se incrementan automáticamente cada vez que se inserta un nuevo registro.
Las bases de datos NoSQL, como MongoDB, usan automáticamente un _id que es un objeto ObjectId único.
Concusion: Generar un id automáticamente ahorra tiempo y reduce la posibilidad de errores, ya que no necesitas preocuparte por crear un identificador único manualmente.

Espero haberlos ayudado. */
