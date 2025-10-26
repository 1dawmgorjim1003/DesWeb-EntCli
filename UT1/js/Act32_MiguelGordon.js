"use strict"
{
    function myFunction(chain) {
        let minusText = chain.toLowerCase();

        let vocals = (minusText.match(/[aeiou]/g)).length;

        let consonants = (minusText.match(/[bcdfghjklmnñpqrstvwxyz]/g)).length;

        return `Vocales: ${vocals}, Consonantes: ${consonants}`; 
    }


    console.log(myFunction('Hola Mundo'));;
}