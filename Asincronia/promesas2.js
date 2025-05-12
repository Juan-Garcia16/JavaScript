// Simulacion de funcion que obtiene datos del servidor
function obtenerDatosDelServidor(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1) {
        resolve({id:1, nombre: "Juan", edad: 30})
      } else {
        reject("ErrorL Usuario no encontrado")
      }
    }, 2000)
  })
}

// Uso de la promesa
console.log("Iniciando busqueda...")

obtenerDatosDelServidor(1)
  .then((usuario) => {
    console.log("Usuario encontrado:", usuario)
    return usuario.edad
  })
  .then((edad) => {
    console.log("La edad del usuario es:", edad)
    
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("Busqueda finalizada")
  })