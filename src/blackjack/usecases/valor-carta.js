


/**
 * Esta funcion recibe el resultado al pedir una carta y retorna su valor 
 * @param {String} carta  Ejemplo "AC or 10K"
 * @returns {number} Ejemplo "11 Or 10"
 */

export const valorCarta = ( carta ) => {

if (!carta || carta === 0) throw new Error('La carta es obligatoria como argumento');


    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}