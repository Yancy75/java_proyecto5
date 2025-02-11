import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promeseComponent = (element) => {
    element.innerHTML = 'promeseComponent';
    console.log('promeseComponent');
   
}
/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    /* modo organizado */
  /* const promesa = new Promise((resolve, reject )=>{
      
       const hero = heroes.find(hero => hero.id === id);

       if(hero){
         resolve(hero);
         return;
       }
       reject(`heroe con la id ${id} no encontrado`);
   });
   return promesa;*/

   /* modo optimizado */
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {resolve(hero);return;}
        reject(`heroe con la id ${id} no encontrado`);
    });
   
    //const hero = heroes.find(hero => hero.id === id);
}