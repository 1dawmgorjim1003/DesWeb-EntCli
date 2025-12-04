// Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
// “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
"use strict"
{
    function myFunction(chain) {
        const regExp = /^[md].*[ao]$/i;
        if (regExp.test(chain)) {
            return true;
        }
        return false;
    }

    function myFunction2(chain) {
        chain = chain.toLowerCase();
        if ((chain.charAt(0)=='m' || chain.charAt(0)=='d') && (chain.charAt(chain.length-1)=='a' || chain.charAt(chain.length-1)=='o')) {
            return true;
        } else {
            return false;
        }
    }


    console.log(myFunction('Dama'));;
    console.log(myFunction2('Dama'));;
}