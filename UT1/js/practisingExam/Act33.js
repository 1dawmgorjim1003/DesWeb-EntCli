"use strict"
{
    function myFunction(input) {
        let regExp = new RegExp('^[^0-9?¿¡!ºª]+$', 'g');
        if (regExp.test(input)) {
            return 'Verdadero';
        }
        return 'Falso';
    }

    console.log(myFunction('Javier Ferrer'));
    
}