const numeroSecreto = Math.floor(Math.random() * 10 + 1) //de 1 al 10

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre el 1 y el 10'))

console.log(`Este es el numero con el que juegas: ${numeroJugador}`)
if (numeroJugador === numeroSecreto) {
    console.log('Acertase!, el numero secreto era el', numeroSecreto)
} else {
    console.log('Fallaste, el numero secreto era el', numeroSecreto)
}