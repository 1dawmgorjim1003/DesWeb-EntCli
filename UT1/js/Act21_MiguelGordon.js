"use strict"
{
    function myFunction(chain) {
        let arrayChain = chain.split("");
        arrayChain.reverse();
        let output = arrayChain.join("");
        return output;
    }

    console.log(myFunction("Hola Mundo"));
}