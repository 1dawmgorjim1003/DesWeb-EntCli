"use strict"
{
    function myFunction(chain) {
       return chain.split('').reverse().join('');
    }

    console.log(myFunction('Hola Mundo'));
}