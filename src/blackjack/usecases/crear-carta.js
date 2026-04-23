  
  
  
  /**
   * 
   * @param {HTMLElement} carta recibe el valor tomado del deck a la hora de pedir la carta
   * @returns retorna y valor de la carta y crea un HTML Img Element
   */
  
  export const crearCarta = (carta)=>{
  const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');



        return imgCarta;
        
  }
  
  
