"use strict"
{
    function myFunction(input) {
        let regExp = new RegExp('[aeiou]','gi');
        let regExp2 = new RegExp('[bcdfghjklmnpqrstwyxz]','gi');
        return `Vocales: ${input.match(regExp).length} \nConsonantes: ${input.match(regExp2).length}`;
       
    }

    console.log(myFunction('Hola Mundo'));
} 