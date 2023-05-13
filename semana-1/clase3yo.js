//Aca vamos a crear una funcion que determine quien gane al mejor de 3.
//Primero tenemos que crear un objeto literal donde ir guardando los resultados de la partida

let puntajes= {
    usuario: 0,
    computadora: 0,
    empates: 0,
    partidasJugadas:0
}

const nombreJugador = iniciarJuego();

while(puntajes.usuario <2 && puntajes.computadora <2){

    const resultadoDePartida = compararJugadas();

    alert(resultadoDePartida);
    console.log(resultadoDePartida);

    if(resultadoDePartida.includes("ganaste")){
        puntajes.usuario ++;
        puntajes.partidasJugadas ++;
    }
    else if(resultadoDePartida.includes("perdiste")){
        puntajes.computadora ++;
        puntajes.partidasJugadas ++;
    }
    else if(resultadoDePartida.includes("Empate")){
        puntajes.empates ++;
        puntajes.partidasJugadas ++;
    }

    if (puntajes.usuario === 2) {
        alert("El ganador es: " + nombreJugador + " ,felicidades!");
        console.log("El ganador es: " + nombreJugador + " ,felicidades!");
    
    } else if(puntajes.computadora ===2 ){
        alert("El ganador es la IA");
        console.log("El ganador es la IA");
    }

    console.table(puntajes);

} 



alert("Se jugaron un total de: " + puntajes.partidasJugadas + " partidas");
alert("El usuario " + nombreJugador + " gano " + puntajes.usuario + " partidas");
alert("La IA gano " + puntajes.computadora + " partidas");
alert("Se empataron un total de " + puntajes.empates + " partidas" );


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// XXXX 1- Modificar el objeto puntajes para poder contabilizar los empates tambien. XXXX
// XXXX 2- Modificar el bucle para poder sumar tambien la cantidad de empates. XXXX
// XXXX 3- Mostrar en cada partida el resultado al usuario. XXXX 
// XXXX 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego. XXXX