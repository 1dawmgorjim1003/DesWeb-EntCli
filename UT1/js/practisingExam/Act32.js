"use strict"
{
    function myFunction(input) {
        let regExp = new RegExp('[aeiou]', 'gi');
        let regExp2 = new RegExp('[bcdfghjklmnpqrstvwxyz]', 'gi');
        input = input.toLowerCase();
        let vocals = (input.match(regExp)).length;
        let consonants = (input.match(regExp2)).length;
        return console.log(`Vocales: ${vocals}, Consonantes: ${consonants}`);
    }

    myFunction('Hola Mundo');
    
}