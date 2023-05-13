//Funcion 1 pedir jugada al usuario
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

// Esta funcion retorna la eleccion del jugador, que solo puede ingresar 1 2 o 3, sino le 
// pregunta todo el tiempo hasta que ponga algo de eso

function pedirJugada (){

    let eleccion = 0;

    do {
        eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2(papel) o 3(tijera)"));

    } while ( eleccion === null || isNaN(eleccion) || eleccion <1 || eleccion >3);

    console.log("----------------------------");
    console.log("La eleccion del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

    return eleccion;

}

//Funcion 2 pedirle jugada a la maquina

function jugadaRandom(){
    let eleccionIa = parseInt(Math.random()*3+1);

    console.log("----------------------------");
    console.log("La eleccion de la IA es:")
    console.log(eleccionIa);
    console.log("----------------------------");

    return eleccionIa;
}

//Funcion 3 comparar las jugadas para ver quien gana
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas (){

    const resultadosPosibles = ['Genial, ganaste!' , 'Empate!' , 'Que lastima, perdiste :c.'];

    const eleccionJugador = pedirJugada();
    const eleccionIa = jugadaRandom();
    
    //Por defecto el jugador gana.
    let resultadoRonda = resultadosPosibles[0];

    //Ahora el empate

    if( eleccionJugador === eleccionIa){
    
        resultadoRonda = resultadosPosibles[1];
    
    }
    
    //Ahora vemos cuando pierde.
    else if (eleccionJugador === 1 && eleccionIa === 2 || eleccionJugador === 2 && eleccionIa === 3 || eleccionJugador === 3 && eleccionIa === 1) {

        resultadoRonda = resultadosPosibles[2];

    }

    return resultadoRonda;

}

// const resultadoPartida = compararJugadas();

// 1(piedra), 2(papel) o 3(tijera)