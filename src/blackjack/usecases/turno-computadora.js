import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta";


/**
 * Esta funcion automatiza el turno de la computadora 
 * @param divCartasComputadora elemento HTML para mostrar las cartas
 * @param {HTMLElement}puntosHTML elemento HTML para mostra los puntos
 * @param {number} puntosMinimos es la cantidad de puntos necesarios para ganarle al Jugador
 * @param {Array<string>} deck es un array de string de donde la computadora extrae las cartas Ejemplo:['7H', '7C', '6D', '9H', '3S', 'JD']
 * 
 */


export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck = [], ) => {


    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}