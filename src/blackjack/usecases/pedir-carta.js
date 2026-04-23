// 

/**
 * Esta función me permite tomar una carta
 * Esta funcion recibe un valor de tipo string de un array
 * @param {Array<string>} deck es un arreglo de strings con las cartas Ejemplo:  ['7H', '7C', '6D', '9H', '3S', 'JD']
 * @returns {String} Retorna un string Ejemplo: 'JD'
 */


export const pedirCarta = (deck) => {
  
    if ( deck.length === 0 || !deck) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}



