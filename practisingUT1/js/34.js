"use strict"
{
    function myFunction(input) {
        let regExp = new RegExp('^[a-z0-9\.-_]+@+[0-9a-z]+[\.]+[a-z]{2,}$','gi');
        if (regExp.test(input)) {
            return 'Verdadero';
        }
        return 'Falso';
       
    }

    console.log(myFunction('javier.ferrer@iesmartinezm.es'));
} 