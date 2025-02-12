import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promeseComponent = (element) => {
    const id1 ='5d86371fd55e2e2a30fe1ccb16532';
    /*element.innerHTML = element;
    console.log(findHero(id));*/
    const renderHero = (hero) =>{
        element.innerHTML = hero.name;
    }
    const renderError = (error) => {
        element.innerHTML = `<h1>ERROR</h1></br><p>${error}</p>`;
    }

    /* este es el modo correcto */
   //findHero(id1).then(pacotilla => renderHero(pacotilla));
   /* esto solo silve si mando un unico algumento puedo saltarme la variable y mandarla de forma anonima ejemplo siguiente */
   findHero(id1).then(renderHero).catch(renderError);
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