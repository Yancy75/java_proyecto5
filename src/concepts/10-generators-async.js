/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const generadorAsyncComponent = async (element) => {
    //console.log('generadorAsyncComponent');
    const heroeGenerador = tomaHeroGenerador();
    let cartel;
    do{
        cartel = await heroeGenerador.next();
        element.innerHTML = cartel.value;
    }while(!cartel.done)
   
}
async function* tomaHeroGenerador(){
     for(const heroe of heroes){
         await dormir();
         yield heroe.name;
     }
     return 'No hay mas';
}

const dormir = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}