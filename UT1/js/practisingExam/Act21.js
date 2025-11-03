"use strict"
{
    function myFunction(chain) {
       let array = chain.split("");
       array = array.reverse();
        return array.join("");
    }

    console.log(myFunction('Hola Mundo'));
    
}