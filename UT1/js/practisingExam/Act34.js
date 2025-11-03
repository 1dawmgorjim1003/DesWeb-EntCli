"use strict"
{
    function myFunction(input) {
        let regExp = new RegExp('^[0-9a-zA-Z\.-_]+@[0-9A-Za-z]+[\.]+[A-Za-z]{2,}$');
        if (regExp.test(input)) {
            return 'Verdadero';
        }
        return 'Falso';
    }

    console.log(myFunction('javierferrer87@iesmartinezm.es'));
    
}