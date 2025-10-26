"use strict"
{
    function myFunction(chain) {
        //Se comprueba antes del arroba letras, numeros, guiones y punto - Se verifica que tenga el arroba - Se verifica numeros, letras - Se verifica el punto de la extension - Se verifica extension co al menos 2 caracteres
        let regExp1 = new RegExp('^[A-Za-z0-9._-]+@[A-Za-z0-9]+[\.][A-Za-z]{2,}$');
        if ((regExp1.test(chain)) == true) {
            return 'Verdadero';
        }
        return 'Falso';
    }


    console.log(myFunction('javier.ferrer@iesmartinezm.es'));;
}