function iniciarJuego(){

    
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    
    let nombre = "";

    do {

        nombre = prompt("Ingrese su nombre por favor: ");

    } while ( nombre === null|| nombre.length<3 || !isNaN(nombre));


    nombre = nombre.toUpperCase();
    alert("Gracias por jugar " + nombre + " que disfrutes el juego!")

    console.log("----------------------------");
    console.log("El jugador es:");
    console.log(nombre);
    console.log("----------------------------");

    return nombre;

}

// const nombreJugador = iniciarJuego();