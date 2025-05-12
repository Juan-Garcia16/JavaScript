/*Proceso:

El JavaScript Engine ejecuta el código desde la Call Stack (pila de llamadas).
Cuando una operación asíncrona se encuentra (como una solicitud de red), se envía al Web APIs del navegador o a Node APIs en Node.js.
Una vez que la operación asíncrona se completa, su callback se envía a la Task Queue (cola de tareas).
El Event Loop verifica la Call Stack y, si está vacía, mueve el callback de la Task Queue a la Call Stack para su ejecución

El Memory Heap es el espacio donde se almacenan variables, funciones y objetos creados en JavaScript de forma aleatoria. Actúa como un almacén desorganizado donde el navegador gestiona la memoria de manera eficiente, permitiendo que las aplicaciones JavaScript funcionen sin problemas.. */
function varFunc() {
    console.log(1);
    setTimeout(() => console.log(2), 0);
    console.log(3);
}