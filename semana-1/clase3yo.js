//Aca vamos a crear una funcion que determine quien gane al mejor de 3.
//Primero tenemos que crear un objeto literal donde ir guardando los resultados de la partida

let puntajes= {
    usuario: 0,
    computadora: 0
}

const nombreJugador = iniciarJuego();

while(puntajes.usuario <2 && puntajes.computadora <2){

    const resultadoDePartida = compararJugadas();

    alert(resultadoDePartida);
    console.log(resultadoDePartida);

    if(resultadoDePartida.includes("ganaste")){
        puntajes.usuario ++;
    }
    else if(resultadoDePartida.includes("perdiste")){
        puntajes.computadora ++;
    }

    console.table(puntajes);

} 