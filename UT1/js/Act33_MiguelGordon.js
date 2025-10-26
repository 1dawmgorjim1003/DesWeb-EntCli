"use strict"
{
    function myFunction(name) {
        let regExp1 = new RegExp("^[^0-9¡!¿?]+$", 'g')
        if ((regExp1.test(name)) == true) {
            return true;
        }
        return false;
    }


    console.log(myFunction('Miguel Gordon Jiménez'));;
}