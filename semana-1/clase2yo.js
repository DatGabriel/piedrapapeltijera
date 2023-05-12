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

